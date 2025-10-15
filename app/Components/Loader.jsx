"use client"
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-[#001C73] border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p 
          className="text-[#001C73] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;