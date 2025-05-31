import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '../../data/homeContent';
import Logo from '../ui/Logo';
import CTAButton from '../ui/CTAButton';
import { useScrollDirection } from '../../hooks/useScrollDirection';

// Define types for navigation items
interface NavigationSubItem {
  name: string;
  href: string;
}

interface NavigationItemWithDropdown {
  title: string;
  items: NavigationSubItem[];
  href?: string;
  highlight?: boolean;
}

interface NavigationItemWithLink {
  title: string;
  href: string;
  highlight?: boolean;
  items?: never;
}

type NavigationItem = NavigationItemWithDropdown | NavigationItemWithLink;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>({});
  
  // Use scroll direction hook for smart navigation hiding/showing
  const { isVisible, lastScrollTop } = useScrollDirection({ 
    threshold: 15, 
    throttleMs: 100 
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
    // Reset expanded items when closing menu
    if (isMobileMenuOpen) {
      setExpandedItems({});
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
    setExpandedItems({});
  };

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out transform ${
        isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      style={{
        willChange: 'transform',
        maxWidth: '100vw',
        overflow: 'hidden'
      }}
    >
      <div className="mobile-header-container px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.values(navigationItems).map((item: NavigationItem, index) => (
              <div key={index} className="relative group">
                {item.items && item.items.length > 0 ? (
                  <>
                    <button className="text-white hover:text-brand-orange transition-colors flex items-center">
                      {item.title}
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-brand-black/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {item.items.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex} 
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-brand-orange transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className={`${
                      item.highlight
                        ? 'text-brand-green hover:text-brand-green/80'
                        : 'text-white hover:text-brand-orange'
                    } transition-colors`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center">
            <CTAButton href="/book-call" className="hidden lg:flex mr-4">
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </CTAButton>
            
            {/* Mobile Menu Button */}
            <button 
              className="block lg:hidden mobile-nav-button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              type="button"
            >
              <span className="text-sm font-medium select-none">Menu</span>
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-black/95 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1] 
            }}
            className="fixed inset-x-0 top-0 bottom-0 bg-brand-black z-50 lg:hidden overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header Space */}
              <div className="h-20 flex-shrink-0" />
              
              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto px-6 pb-6">
                <nav className="space-y-0">
                  {Object.values(navigationItems).map((item: NavigationItem, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                      className="border-b border-white/20 last:border-b-0"
                    >
                      {item.items && item.items.length > 0 ? (
                        <div>
                          {/* Main Menu Item with Toggle */}
                          <button
                            className="w-full flex items-center justify-between py-6 text-left"
                            onClick={() => toggleExpanded(index)}
                          >
                            <span className="text-xl font-semibold text-white">
                              {item.title}
                            </span>
                            <motion.div
                              animate={{ rotate: expandedItems[index] ? 45 : 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              {expandedItems[index] ? (
                                <X className="h-5 w-5 text-white/60" />
                              ) : (
                                <Plus className="h-5 w-5 text-white/60" />
                              )}
                            </motion.div>
                          </button>
                          
                          {/* Collapsible Sub-items */}
                          <AnimatePresence>
                            {expandedItems[index] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ 
                                  duration: 0.3, 
                                  ease: [0.4, 0, 0.2, 1] 
                                }}
                                className="overflow-hidden"
                              >
                                <div className="pb-4 space-y-3">
                                  {item.items.map((subItem, subIndex) => (
                                    <motion.div
                                      key={subIndex}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ 
                                        delay: subIndex * 0.05,
                                        duration: 0.3 
                                      }}
                                    >
                                      <Link 
                                        to={subItem.href}
                                        className="block text-white/80 hover:text-brand-orange transition-colors py-2 pl-4"
                                        onClick={closeMenu}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href || '#'}
                          className={`block py-6 text-xl font-semibold ${
                            item.highlight
                              ? 'text-brand-green'
                              : 'text-white'
                          } hover:text-brand-orange transition-colors`}
                          onClick={closeMenu}
                        >
                          {item.title}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
                
                {/* CTA Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5 + Object.values(navigationItems).length * 0.1, 
                    duration: 0.4 
                  }}
                  className="pt-8"
                >
                  <CTAButton href="/book-call" className="w-full justify-center">
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                  </CTAButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}