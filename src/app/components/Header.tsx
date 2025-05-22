"use client";

import { useEffect, useState } from "react";
import { FullScreenMenu } from "./FullScreenMenu";
import Link from "next/link";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // 向上滚动
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 向下滚动且已经滚动了一定距离
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 当菜单打开时，禁止背景滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed bg-black top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/" className="text-xl font-bold">Nocta Suidio.</Link>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-sm font-medium uppercase tracking-wide flex items-center gap-2"
        >
          <span>Menu</span>
          <span className="relative w-6 h-6">
            <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
              isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}>+</span>
            <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
              isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}>×</span>
          </span>
        </button>
      </header>
      <div className="h-[48px]"></div>

      <FullScreenMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
}