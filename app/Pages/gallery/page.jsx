"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCard from '@/Components/gallery/GalleryCard';
import GalleryModal from '@/Components/gallery/GalleryModal';


// Construction projects data with optimized images
const projectsData = [
  {
    id: 1,
    title: "Modern Residential Complex",
    description: "A luxurious residential complex featuring contemporary architecture and sustainable design principles",
    category: "Residential",
    image: "/Gallery/1.jpg",
    images: [
      "/Gallery/1.jpg",
      "/Gallery/2.jpg",
      "/Gallery/3.jpg",
      "/Gallery/4.jpg",
      "/Gallery/22.jpg",
      "/Gallery/27.jpg"
    ],
    technologies: ["Concrete", "Steel", "Glass", "Sustainable Materials"],
    completionDate: "2024-01-15",
    client: "Urban Living Developers",
    location: "Downtown District",
    size: "25,000 sq ft",
    duration: "18 months"
  },
  {
    id: 2,
    title: "Commercial Office Tower",
    description: "45-story commercial tower with state-of-the-art facilities and eco-friendly infrastructure",
    category: "Commercial",
    image: "/Gallery/5.jpg",
    images: [
      "/Gallery/5.jpg",
      "/Gallery/6.jpg",
      "/Gallery/7.jpg",
      "/Gallery/25.jpg",
      "/Gallery/14.jpg",
      "/Gallery/26.jpg"
    ],
    technologies: ["Steel Frame", "Curtain Walls", "Smart Systems", "LEED Certified"],
    completionDate: "2024-02-20",
    client: "Corporate Heights Inc.",
    location: "Business District",
    size: "180,000 sq ft",
    duration: "24 months"
  },
  {
    id: 3,
    title: "Hospitality Resort Project",
    description: "Luxury beachfront resort with premium amenities and sustainable tourism features",
    category: "Hospitality",
    image: "/Gallery/8.jpg",
    images: [
      "/Gallery/8.jpg",
      "/Gallery/9.jpg",
      "/Gallery/10.jpg",
      "/Gallery/11.jpg",
      "/Gallery/18.jpg",
      "/Gallery/19.jpg"
    ],
    technologies: ["Reinforced Concrete", "Local Materials", "Solar Power", "Water Recycling"],
    completionDate: "2024-03-10",
    client: "Paradise Resorts Group",
    location: "Coastal Area",
    size: "50,000 sq ft",
    duration: "30 months"
  },
  {
    id: 4,
    title: "Educational Campus",
    description: "Modern educational facility with advanced learning spaces and recreational areas",
    category: "Institutional",
    image: "/Gallery/12.jpg",
    images: [
      "/Gallery/12.jpg",
      "/Gallery/13.jpg",
      "/Gallery/14.jpg",
      "/Gallery/26.jpg",
      "/Gallery/2.jpg",
      "/Gallery/3.jpg",
    ],
    technologies: ["Brick & Mortar", "Acoustic Panels", "Safety Systems", "Accessible Design"],
    completionDate: "2024-01-30",
    client: "Knowledge Foundation",
    location: "Education Zone",
    size: "75,000 sq ft",
    duration: "20 months"
  },
  {
    id: 5,
    title: "Healthcare Facility",
    description: "Advanced medical center with specialized treatment areas and patient-friendly design",
    category: "Healthcare",
    image: "/Gallery/16.jpg",
    images: [
      "/Gallery/16.jpg",
      "/Gallery/17.jpg",
      "/Gallery/18.jpg",
      "/Gallery/19.jpg",
      "/Gallery/2.jpg",
      "/Gallery/3.jpg"
    ],
    technologies: ["Modular Construction", "Medical Gas Systems", "Clean Rooms", "HVAC Specialized"],
    completionDate: "2024-02-15",
    client: "HealthCare Partners",
    location: "Medical District",
    size: "120,000 sq ft",
    duration: "28 months"
  },
  {
    id: 6,
    title: "Infrastructure Bridge",
    description: "Suspension bridge connecting urban areas with innovative engineering solutions",
    category: "Infrastructure",
    image: "/Gallery/20.jpg",
    images: [
      "/Gallery/20.jpg",
      "/Gallery/21.jpg",
      "/Gallery/22.jpg",
      "/Gallery/27.jpg",
      "/Gallery/10.jpg",
      "/Gallery/11.jpg"
    ],
    technologies: ["Pre-stressed Concrete", "Steel Cables", "Foundation Engineering", "Seismic Design"],
    completionDate: "2024-03-05",
    client: "City Development Authority",
    location: "River Crossing",
    size: "2.5 km span",
    duration: "36 months"
  }
];

const Page = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  // Preload images and track loading progress
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = projectsData.flatMap(project => 
        [project.image, ...project.images]
      );
      
      setTotalImages(imageUrls.length);
      
      const loadPromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            setImagesLoaded(prev => prev + 1);
            resolve(url);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(loadPromises);
        setIsLoading(false);
      } catch (error) {
        console.warn('Some images failed to load:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  // Animation variants
  const pageVariants = {
    initial: { 
      opacity: 0,
      scale: 0.98 
    },
    in: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    out: { 
      opacity: 0,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const loadingVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <motion.div 
        className="min-h-screen bg-white pt-20 flex items-center justify-center"
        variants={loadingVariants}
        initial="initial"
        exit="exit"
      >
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-[#001C73] border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p 
            className="text-gray-600 text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Loading Gallery {Math.round((imagesLoaded / totalImages) * 100)}%
          </motion.p>
          <motion.div 
            className="w-64 h-2 bg-gray-200 rounded-full mt-4 mx-auto overflow-hidden"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="h-full bg-[#001C73] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: imagesLoaded / totalImages }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-white pt-20"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      {/* Animated Header */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our <motion.span 
                className="text-[#001C73]"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Gallery
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore our portfolio of successful construction projects showcasing quality craftsmanship and innovative design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                layoutId={`project-card-${project.id}`}
              >
                <GalleryCard 
                  project={project} 
                  onClick={() => setSelectedProject(project)}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <GalleryModal 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;