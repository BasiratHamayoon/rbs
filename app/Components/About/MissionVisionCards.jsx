"use client";
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

// Mock construction images - replace with your actual images
import construction1 from '../../../public/About/1.jpg';
import construction2 from '../../../public/About/2.jpg';
import construction3 from '../../../public/About/3.jpg';
import construction4 from '../../../public/About/4.jpg';
import construction5 from '../../../public/About/5.jpg';

const MissionVisionCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const cards = [
    {
      type: 'mission',
      title: 'Our Mission',
      description: 'To deliver exceptional construction solutions that exceed client expectations through innovative design, superior craftsmanship, and unwavering commitment to quality and safety.',
      image: construction1,
    },
    {
      type: 'vision',
      title: 'Our Vision',
      description: 'To be the most trusted construction partner, transforming skylines and communities through sustainable practices while maintaining the highest standards of excellence.',
      image: construction2,
    },
    {
      type: 'values',
      title: 'Our Values',
      description: 'Integrity, innovation, and excellence form the foundation of everything we do. We believe in building not just structures, but lasting relationships and sustainable communities.',
      image: construction3,
    },
    {
      type: 'approach',
      title: 'Our Approach',
      description: 'Combining traditional craftsmanship with modern technology to create spaces that are both beautiful and functional, while ensuring timely delivery and budget adherence.',
      image: construction4,
    },
    {
      type: 'commitment',
      title: 'Our Commitment',
      description: 'Dedicated to sustainable construction practices that minimize environmental impact while maximizing efficiency and creating spaces that stand the test of time.',
      image: construction5,
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
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
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
      const newActive = activeCard > 0 ? activeCard - 1 : cards.length - 1;
      setActiveCard(newActive);
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const scrollRightHandler = () => {
    if (scrollRef.current) {
      const newActive = activeCard < cards.length - 1 ? activeCard + 1 : 0;
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
              Our Philosophy
            </span>
            <div className="w-8 h-0.5 bg-[#001C73] rounded-full"></div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={titleVariants}
          >
            Our <span className="text-[#001C73]">Guiding Principles</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            Building the future with purpose, passion, and precision
          </motion.p>
        </motion.div>

        {/* Cards Container with Navigation */}
        <div className="relative">
          {/* Navigation Buttons with Enhanced Hover Effects */}
          <motion.button
            onClick={scrollLeftHandler}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: '#001C73',
              boxShadow: '0 20px 40px rgba(0, 28, 115, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <svg 
              className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300 group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={scrollRightHandler}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: '#001C73',
              boxShadow: '0 20px 40px rgba(0, 28, 115, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <svg 
              className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300 group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Cards Scroll Container */}
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
            
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="flex-none w-80 snap-center"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Card with Achievement Style */}
                <div className={`relative bg-white rounded-xl border-2 transition-all duration-300 pb-4 flex flex-col ${
                  index === activeCard ? 'border-[#001C73] shadow-md' : 'border-gray-200 shadow-sm'
                }`}>
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-[#001C73] text-white rounded-lg px-3 py-1 text-sm font-bold capitalize">
                      {card.type}
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 flex-shrink-0">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                      {card.description}
                    </p>

                    {/* Bottom Badge */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4 flex-shrink-0">
                      <span className="text-xs text-gray-500 font-medium">
                        CORE PRINCIPLE
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#001C73] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
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
            {cards.map((_, index) => (
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

export default MissionVisionCards;