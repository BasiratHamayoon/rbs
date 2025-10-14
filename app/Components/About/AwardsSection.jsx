"use client";
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTrophy, FaAward, FaMedal, FaStar } from 'react-icons/fa';

// Mock award images - replace with your actual images
import award1 from '../../../public/About/1.jpg';
import award2 from '../../../public/About/2.jpg';
import award3 from '../../../public/About/3.jpg';
import award4 from '../../../public/About/4.jpg';
import award5 from '../../../public/About/5.jpg';

const AwardsSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const awards = [
    {
      id: 1,
      title: "Excellence in Construction",
      year: "2024",
      description: "Awarded for exceptional construction quality and innovative project delivery in commercial infrastructure.",
      image: award1,
      icon: FaTrophy,
      category: "Construction Excellence"
    },
    {
      id: 2,
      title: "Safety Innovation Award",
      year: "2023",
      description: "Recognized for implementing cutting-edge safety protocols and maintaining zero incident records.",
      image: award2,
      icon: FaAward,
      category: "Safety & Compliance"
    },
    {
      id: 3,
      title: "Sustainable Design Pioneer",
      year: "2024",
      description: "Honored for leadership in sustainable construction practices and eco-friendly building solutions.",
      image: award3,
      icon: FaMedal,
      category: "Sustainability"
    },
    {
      id: 4,
      title: "Client Choice Award",
      year: "2023",
      description: "Voted by clients for outstanding service delivery and exceptional project management.",
      image: award4,
      icon: FaStar,
      category: "Client Satisfaction"
    },
    {
      id: 5,
      title: "Innovation in Architecture",
      year: "2024",
      description: "Celebrated for revolutionary architectural designs that redefine urban landscapes.",
      image: award5,
      icon: FaTrophy,
      category: "Design Innovation"
    },
    {
      id: 6,
      title: "Community Impact Award",
      year: "2023",
      description: "Recognized for significant contributions to community development and social infrastructure.",
      image: award1,
      icon: FaAward,
      category: "Community Service"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: (index) => ({ 
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      scale: 0.9
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const scrollLeftHandler = () => {
    if (scrollRef.current) {
      const newActive = activeCard > 0 ? activeCard - 1 : awards.length - 1;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const scrollRightHandler = () => {
    if (scrollRef.current) {
      const newActive = activeCard < awards.length - 1 ? activeCard + 1 : 0;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft += 400;
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Update active card on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = 400; // 320px card + 80px gap
      const newActive = Math.round(scrollPosition / cardWidth);
      if (newActive !== activeCard) {
        setActiveCard(newActive);
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
            className="inline-flex items-center gap-3 mb-6"
            variants={titleVariants}
          >
            <div className="w-8 h-0.5 bg-[#001C73] rounded-full"></div>
            <span className="text-sm font-semibold text-[#001C73] tracking-widest uppercase">
              Award Winning Excellence
            </span>
            <div className="w-8 h-0.5 bg-[#001C73] rounded-full"></div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={titleVariants}
          >
            Our <span className="text-[#001C73]">Achievements</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            Celebrating excellence and recognition in construction innovation, safety, and client satisfaction
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollLeftHandler}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#001C73'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FaChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-white transition-all duration-300" />
          </motion.button>

          <motion.button
            onClick={scrollRightHandler}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#001C73'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FaChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-all duration-300" />
          </motion.button>

          {/* Horizontal Scroll Container */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto py-8 px-4 snap-x snap-mandatory scrollbar-hide gap-8 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
          >
            {/* Hide scrollbar for Webkit browsers */}
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                className="flex-none w-80 snap-center"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Achievement Style Card - Fixed Height */}
                <div className={`relative bg-white rounded-xl overflow-hidden border transition-all duration-300 h-[480px] flex flex-col ${
                  index === activeCard ? 'border-[#001C73] shadow-md' : 'border-gray-200 shadow-sm'
                }`}>
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-[#001C73] text-white rounded-lg px-3 py-1 text-sm font-bold">
                      {award.year}
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white rounded-full p-3 shadow-sm border border-gray-200">
                      <award.icon 
                        className="text-xl text-[#001C73]" 
                      />
                    </div>
                  </div>

                  {/* Image Container - Fixed Height */}
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  {/* Content Section - Flexible Height */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#001C73] text-white">
                        {award.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 flex-shrink-0">
                      {award.title}
                    </h3>
                    
                    {/* Description - Takes remaining space */}
                    <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow">
                      {award.description}
                    </p>

                    {/* Achievement Badge */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 flex-shrink-0">
                      <span className="text-xs text-gray-500 font-medium">
                        AWARD RECIPIENT
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#001C73] flex items-center justify-center">
                        <FaStar className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center space-x-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCard(index);
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft = index * 400;
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeCard 
                    ? 'bg-[#001C73] w-6' 
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

export default AwardsSection;