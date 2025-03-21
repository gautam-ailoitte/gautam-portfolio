'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {skill.name}
        </span>
        <span className="text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-400 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;