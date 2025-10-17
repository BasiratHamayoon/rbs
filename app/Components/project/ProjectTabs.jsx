"use client"
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useProject } from '@/context/ProjectContext';
import { FaRegSadTear } from 'react-icons/fa';

const ProjectTabs = ({ projects, activeCategory, onCategoryChange, onProjectSelect, loading }) => {
  const { categories } = useProject();

  const tabCategories = [
    { id: 'all', name: 'All Projects' },
    ...categories.map(cat => ({
      id: cat.toLowerCase(),
      name: cat
    }))
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const currentProjects = projects[activeCategory] || [];

  return (
    <section id="projects-section" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tabCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#001C73] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {loading && (
          <motion.div 
            className="flex justify-center items-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-[#001C73] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg font-medium">Loading Projects...</p>
            </div>
          </motion.div>
        )}

        {!loading && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <ProjectCard 
                  project={project} 
                  onClick={() => onProjectSelect(project)}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && currentProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-md mx-auto">
              <FaRegSadTear className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">We're working on adding more {activeCategory} projects. Check back soon!</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectTabs;