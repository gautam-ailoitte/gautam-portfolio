'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 mb-8 relative border-l-4 border-primary-500 dark:border-primary-400 ml-6"
    >
      {/* Timeline bullet */}
      <div className="absolute -left-10 top-6 w-8 h-8 bg-primary-500 dark:bg-primary-400 rounded-full flex items-center justify-center text-white">
        <FiBriefcase />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
        {experience.role}
      </h3>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <span className="font-medium">{experience.company}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <FiMapPin size={14} />
          <span>{experience.location}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <FiCalendar size={14} />
          <span>{experience.period}</span>
        </div>
      </div>
      
      <ul className="mb-4 space-y-2">
        {experience.description.map((item, idx) => (
          <li key={idx} className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-700">
            {item}
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs bg-gray-200 dark:bg-dark-600 text-gray-800 dark:text-gray-200 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;