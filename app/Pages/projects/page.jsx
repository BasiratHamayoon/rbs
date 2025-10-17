"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProject } from '@/context/ProjectContext';
import HeroSection from '@/Components/project/HeroSection';
import QualitySection from '@/Components/project/QualitySection';
import ProjectTabs from '@/Components/project/ProjectTabs';
import ProjectModal from '@/Components/project/ProjectModal';

const Page = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const { projects, loading, fetchProjects } = useProject();

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    fetchProjects(category);
  };

  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20 
    },
    in: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    out: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <HeroSection />
      
      <QualitySection />
      
      <ProjectTabs
        projects={projects}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onProjectSelect={setSelectedProject}
        loading={loading}
      />

      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;