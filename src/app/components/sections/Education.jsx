'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import education from '@/app/data/education';

const Education = () => {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto">
        <SectionTitle
          title="Education & Certifications"
          subtitle="My academic background and professional certifications."
        />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Degree
            </h3>
            
            <div className="card p-6 h-full">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {education.degree.title}
              </h4>
              
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                {education.degree.institution}
              </p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <FiMapPin size={14} />
                  <span>{education.degree.location}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <FiCalendar size={14} />
                  <span>{education.degree.period}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <FiAward size={14} />
                  <span>{education.degree.score}</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                {education.degree.description}
              </p>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            
            <div className="card p-6 h-full">
              <ul className="space-y-4">
                {education.certifications.map((cert, index) => (
                  <motion.li
                    key={cert.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 pb-4 border-b border-gray-200 dark:border-dark-600 last:border-0 last:pb-0"
                  >
                    <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <FiAward size={20} />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-600 dark:text-gray-400">
                        <span>{cert.issuer}</span>
                        <span>·</span>
                        <span>{cert.date}</span>
                      </div>
                      
                      {cert.credential && (
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                          Credential ID: {cert.credential}
                        </p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;