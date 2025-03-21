'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/app/context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'header-scrolled'
          : 'header-transparent'
      }`}
      style={{
        backgroundColor: isScrolled 
          ? (darkMode ? 'var(--color-dark-800)' : '#ffffff') 
          : 'transparent',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        padding: isScrolled ? '0.5rem 0' : '1rem 0',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container flex justify-between items-center">
        <Link 
          href="#home" 
          className="logo"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--color-primary-600)'
          }}
        >
          Gautam<span style={{ color: 'var(--color-secondary-600)' }}>.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{
                color: darkMode ? 'var(--color-gray-300)' : 'var(--color-gray-700)',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--color-primary-600)'}
              onMouseOut={(e) => e.target.style.color = darkMode ? 'var(--color-gray-300)' : 'var(--color-gray-700)'}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            aria-label="Toggle dark mode"
            style={{
              padding: '0.5rem',
              borderRadius: '9999px',
              backgroundColor: darkMode ? 'var(--color-dark-700)' : 'var(--color-gray-100)',
              color: darkMode ? 'var(--color-gray-200)' : 'var(--color-gray-800)'
            }}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="mobile-controls" style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={toggleDarkMode}
            className="theme-toggle-mobile"
            aria-label="Toggle dark mode"
            style={{
              padding: '0.5rem',
              marginRight: '0.5rem',
              borderRadius: '9999px',
              backgroundColor: darkMode ? 'var(--color-dark-700)' : 'var(--color-gray-100)',
              color: darkMode ? 'var(--color-gray-200)' : 'var(--color-gray-800)'
            }}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className="menu-toggle"
            aria-label="Toggle menu"
            style={{
              padding: '0.5rem',
              borderRadius: '9999px',
              backgroundColor: darkMode ? 'var(--color-dark-700)' : 'var(--color-gray-100)',
              color: darkMode ? 'var(--color-gray-200)' : 'var(--color-gray-800)'
            }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{
              backgroundColor: darkMode ? 'var(--color-dark-800)' : '#ffffff',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <nav className="container py-4 flex flex-col" style={{ gap: '1rem' }}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="mobile-nav-link"
                  style={{
                    color: darkMode ? 'var(--color-gray-300)' : 'var(--color-gray-700)',
                    padding: '0.5rem 1rem',
                    transition: 'color 0.3s'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-primary-600)'}
                  onMouseOut={(e) => e.target.style.color = darkMode ? 'var(--color-gray-300)' : 'var(--color-gray-700)'}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          
          .mobile-controls {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;