'use client';

import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const scrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };
    
    window.addEventListener('scroll', scrollReveal);
    
    // Trigger once on load
    scrollReveal();
    
    return () => window.removeEventListener('scroll', scrollReveal);
  }, []);
};