import { motion } from "framer-motion";
import PartnerCard from "../components/PartnerCard";
import ScrollUpButton from "../components/ScrollUpButton";

const partners = [
  {
    name: "TechCafe",
    type: "Food & Beverage",
    description: "Virtual cafe offering digital coffee and tech-themed snacks.",
    benefitsCount: 2,
    website: "#",
  },
  {
    name: "PixelPlay Arena",
    type: "Entertainment",
    description: "Digital entertainment center with virtual reality experiences.",
    benefitsCount: 3,
    website: "#",
  },
  {
    name: "CloudFit Gym",
    type: "Fitness",
    description: "Virtual fitness center with cloud-based training programs.",
    benefitsCount: 1,
    website: "#",
  },
  {
    name: "ByteBooks",
    type: "Education",
    description: "Digital library with programming and tech resources.",
    benefitsCount: 2,
    website: "#",
  },
  {
    name: "DataDiner",
    type: "Restaurant",
    description: "Virtual restaurant serving binary breakfast and coding cuisine.",
    benefitsCount: 1,
    website: "#",
  }
];

export default function Partners() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full theme-bg min-h-screen py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Partner Network
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our network of fictional partners offering various benefits.
            All companies and offers are for demonstration purposes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </div>
        
        <ScrollUpButton />
      </div>
    </motion.div>
  );
}