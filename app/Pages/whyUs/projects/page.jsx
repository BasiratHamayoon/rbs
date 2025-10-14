"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { projectsData, categories } from '@/data/projectsData';
import HeroSection from '@/Components/project/HeroSection';
import QualitySection from '@/Components/project/QualitySection';
import ProjectTabs from '@/Components/project/ProjectTabs';
import ProjectModal from '@/Components/project/ProjectModal';

const Page = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(false);

  // Load projects directly from data file (no API call needed)
  useEffect(() => {
    setLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
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
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quality Section */}
      <QualitySection />
      
      {/* Projects Tabs Section */}
      <ProjectTabs
        projects={projects}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onProjectSelect={setSelectedProject}
        loading={loading}
      />

      {/* Project Detail Modal */}
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