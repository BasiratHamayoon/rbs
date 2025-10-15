"use client"
import ImageTextSection from '@/Components/whyus/ImageTextSection';
import MissionSection from '@/Components/whyus/MissionSection';
import OwnerSection from '@/Components/whyus/OwnerSection';
import PartnershipSection from '@/Components/whyus/PartnershipSection';
import WhyUsHero from '@/Components/whyus/WhyUsHero.js';
import { motion } from 'framer-motion';

const page = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    out: { 
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <WhyUsHero />
        
        {/* Owner Section */}
        <OwnerSection />
        
        {/* Image & Text Section */}
        <ImageTextSection />
        
        {/* Mission Section */}
        <MissionSection />
        
        {/* Partnership Section */}
        <PartnershipSection />
      </motion.div>
    </motion.div>
  );
};

export default page;