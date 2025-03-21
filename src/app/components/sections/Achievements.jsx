'use client';

import { motion } from 'framer-motion';
import { FiAward, FiTrophy, FiCode, FiBookOpen, FiAperture } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import achievements from '@/app/data/achievements';

const Achievements = () => {
  // Map achievement icons to React Icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'trophy':
        return <FiTrophy size={24} />;
      case 'code':
        return <FiCode size={24} />;
      case 'google':
        return <FiAperture size={24} />;
      case 'education':
        return <FiBookOpen size={24} />;
      case 'award':
      default:
        return <FiAward size={24} />;
    }
  };

  return (
    <section id="achievements" className="section bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto">
        <SectionTitle
          title="Achievements"
          subtitle="Recognitions and accomplishments throughout my career journey."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  {getIcon(achievement.icon)}
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;