'use client';

import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';
import skills from '@/app/data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and proficiency levels."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-dark-600">
                {category.name}
              </h3>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;