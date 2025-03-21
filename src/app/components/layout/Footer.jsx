'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';
import profile from '@/app/data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-900 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              Gautam<span className="text-secondary-600 dark:text-secondary-400">.dev</span>
            </h4>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Software developer specializing in Flutter and mobile development, creating innovative solutions with a focus on quality.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </Link>
              <Link
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </Link>
              <Link
                href={`mailto:${profile.contact.email}`}
                className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                aria-label="Email Me"
              >
                <FiMail size={20} />
              </Link>
              <Link
                href={`tel:${profile.contact.phone}`}
                className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                aria-label="Call Me"
              >
                <FiPhone size={20} />
              </Link>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <FiArrowUp />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700 text-center text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Gautam Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;