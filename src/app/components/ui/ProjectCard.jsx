'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col lg:flex-row items-center gap-8 mb-20 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-1/2 relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg group">
        <div className="absolute inset-0 bg-primary-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
        <Image
          src={project.image || '/images/placeholder-project.jpg'}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h3>
        
        <div className="mb-4 p-6 bg-gray-50 dark:bg-dark-700 rounded-lg shadow">
          {project.description.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300 mb-3 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-dark-600 text-gray-800 dark:text-gray-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FiGithub size={18} />
              <span>Code</span>
            </Link>
          )}
          
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FiExternalLink size={18} />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;