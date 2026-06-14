'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_IMAGE } from '@/lib/data';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/40 to-[#0B0B0B]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/60 to-transparent" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-12 left-12 w-24 h-24 border-l border-t border-[#D4AF37]/20 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-r border-b border-[#D4AF37]/20 hidden md:block" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full items-center"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">
                Exclusive Luxury Properties
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white mb-6"
            >
              Where
              <br />
              <span className="text-gold-gradient">Luxury</span>
              <br />
              Meets Home
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
            >
              Curated premium properties for the world&apos;s most discerning buyers.
              Experience unparalleled luxury with John State Co.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#featured" className="btn-luxury btn-gold">
                Explore Properties
              </a>
              <a href="/contact" className="btn-luxury btn-outline-gold">
                Schedule Viewing
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-md"
            >
              {[
                { value: '$2.5B+', label: 'Portfolio Value' },
                { value: '450+', label: 'Properties Sold' },
                { value: '18+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-gold-gradient">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/40 mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#D4AF37]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
