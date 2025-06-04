import { useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
const SIDEBAR_ITEMS = [
  {
    title: "Home",
    path: "/",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    title: "Benefits",
    path: "/benefits",
    icon: <FaGift />,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      className="relative z-10 transition-all duration-300 ease-in-out  theme-bg border-r-gray-300 dark:border-gray-700 border-r-1"
      animate={{
        width: isOpen ? (window.innerWidth < 768 ? "33.333%" : 180) : 80,
      }}
    >
      <div className="flex flex-col p-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full transition-colors max-w-fit mb-4 bg-theme hover-bg cursor-pointer"
        >
          <Menu size={24} />
        </motion.button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.8,
            height: isOpen ? "auto" : 0,
            marginBottom: isOpen ? 16 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="overflow-hidden"
        >
          <div className="flex justify-center items-center">
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile photo"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
              layoutId="profile-image"
            />
          </div>
        </motion.div>
        <nav className="space-y-2">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onMouseEnter={() => !isOpen && setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center sm:p-3 p-1 py-3 rounded-lg theme-bg cursor-pointer 
                hover:shadow-sm transition-all duration-200 hover-bg"
              >
                <span className="text-xl">{item.icon}</span>
                {isOpen && (
                  <span className="ml-3  text-sm font-medium truncate">
                    {item.title}
                  </span>
                )}
              </motion.div>

              {/* Show hovered item on hover */}
              <AnimatePresence>
                {!isOpen && hoveredItem === item.title && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 70 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-md 
                    bg-gray-400 text-gray-800 text-sm font-medium whitespace-nowrap z-50"
                  >
                    {item.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}