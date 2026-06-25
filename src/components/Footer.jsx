import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer glass">
      <div className="footer-container">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} <span>Abdelwadoude</span>. All rights reserved.
        </p>
        <p className="footer-tagline">
          Designed & coded with absolute precision.
        </p>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button 
        className={`scroll-to-top glass ${showScrollTop ? 'show' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
