import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Rocket, Zap } from 'lucide-react';

const ScrollToTop = ({ variant = 'classic' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrolled / maxHeight) * 100;
    
    setScrollProgress(progress);
    
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Render different variants
  const renderClassicVariant = () => (
    <motion.button
      onClick={scrollToTop}
      className="relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Progress Ring Background */}
      <svg className="absolute inset-0 w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="rgba(168, 85, 247, 0.1)"
          strokeWidth="2"
        />
        <motion.circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={163.36} // 2 * π * 26
          initial={{ strokeDashoffset: 163.36 }}
          animate={{ strokeDashoffset: 163.36 - (163.36 * scrollProgress) / 100 }}
          transition={{ duration: 0.1 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Button Content */}
      <div className="relative w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
        {/* Background Gradient on Hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100"
          initial={false}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon */}
        <motion.div
          className="relative z-10 text-gray-600 group-hover:text-white"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Floating Particles Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>
    </motion.button>
  );

  const renderRocketVariant = () => (
    <motion.button
      onClick={scrollToTop}
      className="relative group"
      whileHover={{ scale: 1.1, rotate: -10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-14 h-14 bg-gradient-to-tr from-orange-400 to-red-500 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
        {/* Rocket trail effect */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gradient-to-t from-orange-300 to-transparent rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="text-white z-10"
          animate={{
            y: [-1, 1, -1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Rocket className="w-6 h-6" />
        </motion.div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.button>
  );

  const renderLightningVariant = () => (
    <motion.button
      onClick={scrollToTop}
      className="relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Lightning effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="text-white z-10"
          whileHover={{
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Zap className="w-5 h-5" />
        </motion.div>
        
        {/* Electric particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.button>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'rocket':
        return renderRocketVariant();
      case 'lightning':
        return renderLightningVariant();
      default:
        return renderClassicVariant();
    }
  };

  const getTooltipText = () => {
    switch (variant) {
      case 'rocket':
        return 'Blast off!';
      case 'lightning':
        return 'Lightning fast!';
      default:
        return 'Back to top';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.3
          }}
        >
          {renderVariant()}

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
              {getTooltipText()}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;