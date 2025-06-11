import ScrollUpButton from "../components/ScrollUpButton";
import BenefitsList from "../components/BenefitsList";
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full theme-bg min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollUpButton />
        <BenefitsList />
      </div>
    </motion.div>
  );
}