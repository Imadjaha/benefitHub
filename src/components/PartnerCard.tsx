import { motion } from "framer-motion";
import { FaBuilding, FaGlobe, FaHandshake } from "react-icons/fa6";

interface PartnerCardProps {
  name: string;
  type: string;
  description: string;
  benefitsCount: number;
  logo?: string;
  website: string;
}

export default function PartnerCard({
  name,
  type,
  description,
  benefitsCount,
  logo,
  website,
}: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {logo ? (
            <img src={logo} alt={name} className="w-12 h-12 rounded-full" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <FaBuilding className="w-6 h-6 text-purple-600 dark:text-purple-300" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{type}</p>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
            <FaHandshake className="w-5 h-5" />
            <span className="text-sm">{benefitsCount} active benefits</span>
          </div>
          
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
          >
            <FaGlobe className="w-4 h-4" />
            Visit Website
          </a>
        </div>
      </div>
    </motion.div>
  );
}