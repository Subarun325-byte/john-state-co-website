'use client';

import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      <div className="divider-gold mx-auto mb-4" />
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/70' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
