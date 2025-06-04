import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-2 h-2"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
         initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y : 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full
            bg-gradient-to-r from-violet-600 to-indigo-600 
            dark:from-violet-500 dark:to-indigo-500
            hover:from-violet-500 hover:to-indigo-500 
            dark:hover:from-violet-400 dark:hover:to-indigo-400
            shadow-lg shadow-indigo-500/30 dark:shadow-indigo-600/40
            ring-4 ring-white/30 dark:ring-white/20
            text-white
            transform transition-all duration-300 ease-out
            cursor-pointer z-50
            backdrop-blur-sm
            group
           "
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="scale-250">
            <ScrollUpIcon />
            </div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}