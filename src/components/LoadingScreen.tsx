'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0B0B0B' }}
        >
          {/* Decorative corner elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37] opacity-30" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#D4AF37] opacity-30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#D4AF37] opacity-30" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#D4AF37] opacity-30" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1
              className="text-4xl md:text-5xl font-bold tracking-[0.3em] text-white"
              style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
            >
              JOHN{' '}
              <span className="text-gold-gradient">STATE</span>
              {' '}CO
            </h1>
            <div className="mt-3 text-xs tracking-[0.5em] text-[#6B7280] uppercase">
              Premium Luxury Real Estate
            </div>
          </motion.div>

          {/* Animated ring */}
          <motion.div
            className="relative w-20 h-20 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div
              className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20"
            />
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#D4AF37]"
              style={{ animation: 'spin-slow 1.5s linear infinite' }}
            />
            <div
              className="absolute inset-2 rounded-full border border-transparent border-b-[#E8C84A]"
              style={{ animation: 'spin-slow 2s linear infinite reverse' }}
            />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '200px' }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="h-[1px] bg-[#333] relative overflow-hidden rounded-full"
            style={{ width: 200 }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #D4AF37, #E8C84A)',
                transition: 'width 0.1s ease',
              }}
            />
          </motion.div>

          {/* Progress text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-xs tracking-[0.3em] text-[#6B7280]"
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
