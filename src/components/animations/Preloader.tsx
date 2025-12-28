import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoKalasalingam from '@/assets/logo-kalasalingam.png';
import logoEnexus from '@/assets/logo-enexus.png';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 50;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logos */}
            <div className="flex items-center gap-8 md:gap-12">
              <motion.img
                src={logoKalasalingam}
                alt="Kalasalingam University"
                className="h-20 md:h-28 w-auto object-contain"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.img
                src={logoEnexus}
                alt="E-NEXUS"
                className="h-20 md:h-28 w-auto object-contain"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-3xl md:text-5xl font-light tracking-tight text-foreground">
                E-NEXUS
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                KARE's Innovation & Startup Hub
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-border overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-foreground"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="font-mono text-xs text-muted-foreground tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {progress < 100 ? 'Loading...' : 'Ready'}
            </motion.p>

            {/* Decorative corners */}
            <div className="absolute inset-8 pointer-events-none">
              <motion.div
                className="absolute top-0 left-0 w-8 h-8 border-l border-t border-foreground/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              />
              <motion.div
                className="absolute top-0 right-0 w-8 h-8 border-r border-t border-foreground/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-foreground/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-foreground/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;