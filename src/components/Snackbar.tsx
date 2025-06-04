import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

export type Severity = 'success' | 'error' | 'warning' | 'info';

interface SnackbarProps {
  message: string;
  severity?: Severity;
  duration?: number;
  onClose?: () => void;
  show: boolean;
}

const severityConfig = {
  success: {
    icon: CheckCircle,
    className: 'bg-green-500 dark:bg-green-600',
  },
  error: {
    icon: XCircle,
    className: 'bg-red-500 dark:bg-red-600',
  },
  warning: {
    icon: AlertCircle,
    className: 'bg-yellow-500 dark:bg-yellow-600',
  },
  info: {
    icon: Info,
    className: 'bg-blue-500 dark:bg-blue-600',
  },
};

export default function Snackbar({
  message,
  severity = 'info',
  duration = 4000,
  onClose,
  show,
}: SnackbarProps) {
  const [isVisible, setIsVisible] = useState(show);
  const Icon = severityConfig[severity].icon;

  useEffect(() => {
    setIsVisible(show);
    if (show && duration !== Infinity) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed bottom-4 left-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white
            ${severityConfig[severity].className}
            transform transition-all duration-200`}
        >
          <Icon size={20} />
          <p className="text-sm font-medium">{message}</p>
          <button
            onClick={() => {
              setIsVisible(false);
              onClose?.();
            }}
            className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}