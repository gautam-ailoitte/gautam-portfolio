'use client';

import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiServer } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  const cards = [
    {
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications with Flutter, focusing on performance and user experience.',
      icon: <FiSmartphone size={24} />,
    },
    {
      title: 'Algorithm Design',
      description: 'Creating efficient algorithms and data structures to solve complex computational problems.',
      icon: <FiCode size={24} />,
    },
    {
      title: 'Database Management',
      description: 'Designing and implementing database solutions for various applications.',
      icon: <FiDatabase size={24} />,
    },
    {
      title: 'Backend Development',
      description: 'Developing robust and scalable backend services to support applications.',
      icon: <FiServer size={24} />,
    },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my background and what drives me as a developer."
        />
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate software developer with a strong focus on Flutter and mobile application development. 
              Currently working at Ailoitte in Bangalore, I specialize in creating robust, user-friendly applications 
              with a particular interest in innovative solutions that solve real-world problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With a background in Computer Science and Engineering from Darbhanga College of Engineering, 
              I've developed a strong foundation in data structures, algorithms, and software development principles. 
              My experience includes working on complex mobile applications, implementing state management solutions, 
              and integrating various APIs to create seamless user experiences.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm constantly learning and exploring new technologies to enhance my skills and stay current with 
              industry trends. My goal is to build software that not only meets technical requirements but also 
              delivers exceptional user experiences.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, I enjoy participating in coding competitions like CodeChef and Google Kickstart 
              to sharpen my problem-solving abilities.
            </p>
          </motion.div>
          
          {/* Skills cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 inline-block mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;