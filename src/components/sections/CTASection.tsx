'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { CTA_BG_IMAGE } from '@/lib/data';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={CTA_BG_IMAGE} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0B0B0B]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 to-[#0B0B0B]/60" />
      </div>

      {/* Decorative borders */}
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-[#D4AF37]/10 pointer-events-none hidden md:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase mb-4 block">
              Start Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Find Your
              <br />
              <span className="text-gold-gradient">Dream Property?</span>
            </h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Schedule a private consultation with our luxury property specialists.
              Your perfect home awaits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact" className="btn-luxury btn-gold">
              Schedule Consultation
            </a>
            <a href="tel:+12125550100" className="btn-luxury btn-outline-gold">
              Call +1 (212) 555-0100
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
