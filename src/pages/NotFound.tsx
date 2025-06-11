import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", damping: 20 }}
      className="flex flex-col items-center justify-center min-h-[80vh] theme-bg 
                 px-4 sm:px-6 py-8 sm:py-12 mx-auto max-w-lg text-center"
    >
      <motion.h1 
        className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r 
                   from-purple-600 to-blue-600 text-transparent bg-clip-text
                   break-words"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        404
      </motion.h1>
      
      <motion.h2 
        className="text-xl sm:text-2xl font-semibold mb-4 
                   text-gray-800 dark:text-gray-200 break-words"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Page Not Found
      </motion.h2>
      
      <motion.p 
        className="text-base sm:text-lg text-gray-600 dark:text-gray-400 
                   mb-8 text-center max-w-md break-words"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link 
          to="/" 
          className="inline-flex items-center justify-center
                     min-h-[44px] px-6 py-3 
                     bg-gradient-to-r from-purple-600 to-blue-600 
                     text-white text-base sm:text-lg font-medium
                     rounded-lg hover:from-purple-700 hover:to-blue-700 
                     transition-all duration-300 
                     shadow-lg hover:shadow-xl
                     transform hover:-translate-y-1
                     focus:outline-none focus:ring-2 focus:ring-purple-500
                     active:shadow-md touch-action-manipulation"
        >
          Go Back Home
        </Link>
      </motion.div>
    </motion.div>
  );
}