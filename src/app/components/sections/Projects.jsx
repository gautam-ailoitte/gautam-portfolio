'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import projects from '@/app/data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Get unique technologies from all projects
  const allTechnologies = ['all', ...new Set(
    projects.flatMap(project => project.technologies)
  )];
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(filter));
  
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto">
        <SectionTitle
          title="My Projects"
          subtitle="Explore some of my recent work and technical projects."
        />
        
        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tech
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-dark-600'
              }`}
            >
              {tech === 'all' ? 'All Projects' : tech}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <div className="mt-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
          
          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-600 dark:text-gray-400 my-16"
            >
              No projects found with the selected technology.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;