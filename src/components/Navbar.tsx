import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHandshake } from "react-icons/fa6";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      path: "/benefits",
      name: "Home",
      icon: <AiOutlineHome className="text-xl" />,
    },
    {
      path: "/partners",
      name: "Partners",
      icon: <FaHandshake className="text-xl" />,
    },
  ];

  return (
    <nav
      className={`absolute top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-90 shadow-lg backdrop-blur-sm" : ""
      } dark:bg-gray-900 bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/benefits" className="flex-shrink-0">
            <div className="flex items-center justify-center w-30 h-10 bg-purple-600 rounded-lg text-white font-bold text-xl hover:bg-purple-700 transition-colors duration-200">
              Benefithub
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${
                      location.pathname === item.path
                        ? "bg-purple-500 text-white"
                        : "text-gray-700 hover:bg-purple-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              ))}
              <DarkModeSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? "bg-purple-500 text-white"
                  : "text-gray-700 hover:bg-purple-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}

          <div className="mt-4 px-3 py-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                Dark Mode
              </span>
              <DarkModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
