import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';

// Service Pages
import FullProductBuilds from './pages/services/FullProductBuilds';
import ModuleFeatureDev from './pages/services/ModuleFeatureDev';
import MVPPrototyping from './pages/services/MVPPrototyping';
import MaintenanceHandoff from './pages/services/MaintenanceHandoff';

// Company Pages
import About from './pages/company/About';
import Contact from './pages/company/Contact';
import Careers from './pages/company/Careers';

// Resource Pages
import Articles from './pages/resources/Articles';
import Guides from './pages/resources/Guides';

function App() {
  // Load Google fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen mobile-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Service Routes */}
          <Route path="/services/full-product-builds" element={<FullProductBuilds />} />
          <Route path="/services/module-feature-dev" element={<ModuleFeatureDev />} />
          <Route path="/services/mvp-prototyping" element={<MVPPrototyping />} />
          <Route path="/services/maintenance-handoff" element={<MaintenanceHandoff />} />
          
          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/careers" element={<Careers />} />
          
          {/* Resource Routes */}
          <Route path="/resources/articles" element={<Articles />} />
          <Route path="/resources/guides" element={<Guides />} />
          
          {/* Catch all */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;