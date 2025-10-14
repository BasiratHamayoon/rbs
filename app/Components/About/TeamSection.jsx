"use client";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaAward, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

// Mock team images - replace with your actual images
import teamMember1 from '../../../public/About/01.jpg';
import teamMember2 from '../../../public/About/02.jpg';
import teamMember3 from '../../../public/About/03.jpg';
import teamMember4 from '../../../public/About/04.jpg';
import teamMember5 from '../../../public/About/05.jpg';

const TeamSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: teamMember1,
      description: "20+ years of experience in construction management and business development. Leading RBS Construction with vision and strategic direction.",
      badges: ["Leadership", "Strategy", "Innovation"],
      icon: FaRocket,
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head of Construction",
      image: teamMember2,
      description: "Expert in project management and sustainable building practices. Oversees all construction operations with precision.",
      badges: ["Project Management", "Sustainability", "Operations"],
      icon: FaAward,
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Architect",
      image: teamMember3,
      description: "Award-winning architect with focus on innovative and sustainable designs. Creates spaces that inspire and endure.",
      badges: ["Architecture", "Design", "Sustainability"],
      icon: FaLightbulb,
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Senior Project Manager",
      image: teamMember4,
      description: "Specialized in large-scale commercial and residential projects. Ensures timely delivery and quality excellence.",
      badges: ["Commercial", "Residential", "Quality"],
      icon: FaUsers,
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Design Director",
      image: teamMember5,
      description: "Creative visionary with expertise in modern architectural trends. Blends aesthetics with functionality seamlessly.",
      badges: ["Creative", "Modern", "Trends"],
      icon: FaAward,
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "Operations Director",
      image: teamMember1,
      description: "Ensuring seamless operations and client satisfaction across all projects. Masters of logistics and coordination.",
      badges: ["Operations", "Client Relations", "Logistics"],
      icon: FaUsers,
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  // Fast and stunning animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: (index) => ({ 
      opacity: 0,
      x: index % 2 === 0 ? -150 : 150,
      y: 50,
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 28, 115, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 1.2,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newActive = activeCard > 0 ? activeCard - 1 : teamMembers.length - 1;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newActive = activeCard < teamMembers.length - 1 ? activeCard + 1 : 0;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft += 400;
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCard]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-60 h-60 bg-[#001C73]/5 rounded-full blur-2xl"
        variants={backgroundVariants}
        animate="animate"
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#0026A3]/5 rounded-full blur-2xl"
        variants={backgroundVariants}
        animate="animate"
        transition={{ delay: 3 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 mb-6"
            variants={titleVariants}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#001C73] rounded-full"></div>
            <span className="text-sm font-bold text-[#001C73] tracking-widest uppercase">
              Our Team
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#001C73] rounded-full"></div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={titleVariants}
          >
            Meet Our <span className="bg-gradient-to-r from-[#001C73] to-[#0026A3] bg-clip-text text-transparent">Experts</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#001C73] to-[#0026A3] rounded-full mx-auto mb-8"
            variants={titleVariants}
          />

          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            Our dedicated team of construction professionals brings decades of expertise and innovation to every project
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative">
          {/* Navigation Buttons - Circular with Hover Effect */}
          <motion.button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: '#001C73'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: '#001C73'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Horizontal Scroll Container */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto py-8 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Hide scrollbar for Webkit browsers */}
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="flex-none w-80 mx-4 snap-center"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Team Card with Hover Description */}
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 ${
                  index === activeCard ? 'ring-2 ring-[#001C73]' : ''
                }`}>
                  {/* Image Container */}
                  <motion.div 
                    className="relative h-80 overflow-hidden"
                    variants={imageVariants}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Hover Overlay with Description */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex items-end p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === member.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="text-white mb-10 text-sm leading-relaxed"
                        initial={{ y: 20 }}
                        animate={{ y: hoveredCard === member.id ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.description}
                      </motion.p>
                    </motion.div>
                    
                    {/* Social Links */}
                    <motion.div 
                      className="absolute top-4 right-4 flex gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: hoveredCard === member.id ? 1 : 0, y: hoveredCard === member.id ? 0 : -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a 
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-[#001C73] hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaLinkedin className="w-3 h-3" />
                      </motion.a>
                    </motion.div>

                    {/* Position Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-sm font-medium bg-[#001C73] px-3 py-1 rounded-lg">
                        {member.position}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3"
                      variants={textVariants}
                    >
                      {member.name}
                    </motion.h3>
                    
                    {/* Badges */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      variants={textVariants}
                    >
                      {member.badges.map((badge, badgeIndex) => (
                        <span 
                          key={badgeIndex}
                          className="text-xs font-medium text-[#001C73] bg-[#001C73]/10 px-2 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </motion.div>

                    {/* Icon */}
                    <motion.div 
                      className="flex justify-center mt-4"
                      variants={textVariants}
                    >
                      <member.icon className="w-6 h-6 text-[#001C73]" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center space-x-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCard(index);
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft = index * 400;
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeCard 
                    ? 'bg-[#001C73] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;