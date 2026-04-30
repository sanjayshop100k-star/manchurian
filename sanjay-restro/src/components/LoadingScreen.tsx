import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void, key?: React.Key }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay after 100%
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Fast enough to reach 100 in ~2 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <div className="text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-4 text-4xl font-bold tracking-tighter text-black"
        >
          {progress}%
        </motion.div>
        <div className="text-lg font-medium text-gray-500">
          Sanjay Restro is cooking...
        </div>
      </div>
      
      {/* Progress bar background */}
      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-gray-100">
        <motion.div 
          className="h-full bg-red-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}
