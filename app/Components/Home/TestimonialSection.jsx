'use client';
import React, { useRef, useState, useEffect } from 'react';
import { IoStar, IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from 'next/image';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

// Correct image paths for the public directory
const profile1 = '/home/profile1.jpg';
const profile2 = '/home/profile2.jpg';
const profile3 = '/home/profile3.jpg';
const profile4 = '/home/profile1.jpg';
const profile5 = '/home/profile2.jpg';

const reviews = [
    {
        review: "Working with this construction team was an absolute pleasure. They delivered our project ahead of schedule and the quality exceeded our expectations. Highly recommended!",
        stars: 5,
        profileImage: profile1,
        profileTitle: "Sarah Johnson",
        position: "Project Manager, TechCorp"
    },
    {
        review: "The attention to detail and professionalism shown by this company is remarkable. Our commercial building was completed with precision and care. Will definitely work with them again.",
        stars: 5,
        profileImage: profile2,
        profileTitle: "Michael Chen",
        position: "CEO, BuildRight Inc"
    },
    {
        review: "From design to completion, the entire process was seamless. The team communicated effectively and handled all challenges professionally. Outstanding work!",
        stars: 4,
        profileImage: profile3,
        profileTitle: "Emily Rodriguez",
        position: "Architect, Design Studio"
    },
    {
        review: "They transformed our vision into reality with exceptional craftsmanship. The residential project was completed on time and within budget. Very impressed!",
        stars: 5,
        profileImage: profile4,
        profileTitle: "David Thompson",
        position: "Homeowner"
    },
    {
        review: "Professional, reliable, and skilled. This construction company delivered exactly what they promised. The quality of work is exceptional and worth every penny.",
        stars: 5,
        profileImage: profile5,
        profileTitle: "Lisa Wang",
        position: "Property Developer"
    },
    {
        review: "Outstanding service and quality workmanship. The team was responsive to our needs and provided regular updates throughout the construction process.",
        stars: 4,
        profileImage: profile1,
        profileTitle: "Robert Martinez",
        position: "Business Owner"
    }
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 0.8
        }
    }
};

const itemVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6
        }
    }
};

const headerVariants = {
    hidden: { 
        opacity: 0, 
        y: -30 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            duration: 0.8
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        x: 100,
        rotateY: 10 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        rotateY: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 0.6
        }
    },
    hover: {
        y: -10,
        scale: 1.02,
        rotateY: 5,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    }
};

const arrowVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0 
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    },
    hover: {
        scale: 1.1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    }
};

function TestimonialSection() {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, threshold: 0.3 });

    // Mouse drag functionality
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch functionality for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (inView) {
            setIsInView(true);
            controls.start("visible");
        } else {
            setIsInView(false);
            controls.start("hidden");
        }
    }, [controls, inView]);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 300;
            const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            
            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });

            setTimeout(() => {
                checkScrollPosition();
            }, 300);
        }
    };

    const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(container.scrollLeft < (container.scrollWidth - container.clientWidth - 10));
        }
    };

    const handleScroll = () => {
        checkScrollPosition();
    };

    const renderStars = (count) => {
        return Array.from({ length: 5 }, (_, index) => (
            <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            >
                <IoStar 
                    className={`${index < count ? 'text-yellow-400 fill-current' : 'text-gray-300'} text-lg`}
                />
            </motion.div>
        ));
    };

    return (
        <motion.section 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className='flex flex-col justify-center items-center bg-white lg:px-8 px-4 py-16 md:py-20 text-black overflow-hidden'
        >
            {/* Header Section with Enhanced Animations */}
            <motion.div 
                variants={headerVariants}
                className='text-center max-w-3xl mb-12 md:mb-16 px-4'
            >
                <motion.p 
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='text-[#001C73] text-lg md:text-[22px] font-semibold mb-3 md:mb-4 relative inline-block'
                >
                    <motion.span 
                        className='absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2'
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.4, type: "spring" }}
                    >
                        ❝
                    </motion.span>
                    See What Our Client Say
                    <motion.span 
                        className='absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2'
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        ❞
                    </motion.span>
                </motion.p>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-black to-[#001C73] bg-clip-text text-transparent'
                >
                    TESTIMONIALS
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='text-gray-600 text-base md:text-lg leading-relaxed'
                >
                    We are working hard to exceed expectations and deliver excellence.
                    <motion.span 
                        className='block'
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Discover the experiences of those who trust us with their construction
                    </motion.span>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        projects.
                    </motion.span>
                </motion.p>
            </motion.div>

            {/* Testimonial Cards Container */}
            <motion.div 
                variants={itemVariants}
                className='relative w-full max-w-7xl'
            >
                {/* Navigation Arrows */}
                <AnimatePresence>
                    {showLeftArrow && (
                        <motion.button 
                            key="left-arrow"
                            variants={arrowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            whileHover="hover"
                            onClick={() => scroll('left')}
                            className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white hover:bg-[#001C73] text-[#001C73] hover:text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border border-gray-200 backdrop-blur-sm'
                        >
                            <IoChevronBack className='text-lg md:text-xl' />
                        </motion.button>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {showRightArrow && (
                        <motion.button 
                            key="right-arrow"
                            variants={arrowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            whileHover="hover"
                            onClick={() => scroll('right')}
                            className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white hover:bg-[#001C73] text-[#001C73] hover:text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border border-gray-200 backdrop-blur-sm'
                        >
                            <IoChevronForward className='text-lg md:text-xl' />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Scrollable Cards with Mouse Drag */}
                <motion.div 
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className={`flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 lg:gap-8 py-4 md:py-6 px-2 md:px-4 scroll-smooth select-none ${
                        isDragging ? 'cursor-grabbing' : 'cursor-grab'
                    }`}
                    style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        userSelect: 'none'
                    }}
                >
                    <AnimatePresence>
                        {reviews.map((review, index) => (
                            <motion.div 
                                key={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                whileHover="hover"
                                transition={{ delay: index * 0.1 }}
                                className='flex-shrink-0 w-[280px] sm:w-80 bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#001C73]/20 backdrop-blur-sm select-none mx-2'
                                style={{ 
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
                                    cursor: isDragging ? 'grabbing' : 'grab'
                                }}
                            >
                                {/* Card Content */}
                                <div className='p-6 md:p-8 h-full flex flex-col select-text'>
                                    {/* Stars */}
                                    <motion.div 
                                        className='flex mb-4 md:mb-6 gap-1'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                    >
                                        {renderStars(review.stars)}
                                    </motion.div>
                                  
                                    {/* Review Text */}
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                        className='text-gray-700 mb-4 md:mb-6 leading-relaxed flex-grow text-sm md:text-lg italic select-text'
                                    >
                                        "{review.review}"
                                    </motion.p>
                                  
                                    {/* Profile */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.5 }}
                                        className='flex items-center space-x-3 md:space-x-4 pt-4 md:pt-6 border-t border-gray-200 select-none'
                                    >
                                        <motion.div 
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className='relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#001C73] to-[#00072D] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg overflow-hidden'
                                        >
                                            {review.profileImage ? (
                                                <Image 
                                                    src={review.profileImage} 
                                                    alt={review.profileTitle}
                                                    width={56}
                                                    height={56}
                                                    className='rounded-full object-cover w-full h-full'
                                                    onError={(e) => {
                                                        // Fallback to initial if image fails to load
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            ) : (
                                                <span className='text-white font-semibold'>
                                                    {review.profileTitle.charAt(0)}
                                                </span>
                                            )}
                                        </motion.div>
                                        <div className='flex-1 min-w-0'>
                                            <h4 className='font-bold text-gray-900 text-base md:text-lg truncate'>{review.profileTitle}</h4>
                                            <p className='text-xs md:text-sm text-gray-600 truncate'>{review.position}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            {/* Custom CSS to hide scrollbar */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </motion.section>
    );
}

export default TestimonialSection;