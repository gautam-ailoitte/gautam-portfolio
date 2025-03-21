'use client';

import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../ui/ExperienceCard';
import experiences from '@/app/data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <SectionTitle
          title="Work Experience"
          subtitle="A timeline of my professional journey and key roles."
        />
        
        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"
          ></motion.div>
          
          {/* Experience cards */}
          <div className="relative z-10">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;