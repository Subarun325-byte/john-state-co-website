'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { properties } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

const featured = properties.filter((p) => p.featured);

function PropertyCard({ property, index }: { property: typeof featured[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="card-luxury group cursor-pointer"
    >
      {/* Image */}
      <div className="relative img-zoom h-64 sm:h-72">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase rounded-sm ${
            property.status === 'Featured'
              ? 'bg-[#D4AF37] text-[#0B0B0B]'
              : property.status === 'For Rent'
              ? 'bg-white/90 text-[#0B0B0B]'
              : 'bg-[#0B0B0B]/80 text-white backdrop-blur-sm'
          }`}>
            {property.status}
          </span>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <div className="text-2xl font-bold text-white">{property.priceFormatted}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-sm text-text-muted">{property.location}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
          {property.title}
        </h3>
        <p className="text-sm text-text-muted line-clamp-2 mb-4">{property.description}</p>

        {/* Details */}
        <div className="flex items-center gap-4 pt-4 border-t border-card-border">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted">
                <path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7" />
                <path d="M2 10h20" />
                <path d="M7 20v-5a2 2 0 012-2h0a2 2 0 012 2v5" />
              </svg>
              <span className="text-xs text-text-muted">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted">
                <path d="M4 12h16a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a1 1 0 011-1z" />
                <path d="M6 12V5a2 2 0 012-2h1a2 2 0 012 2v1" />
              </svg>
              <span className="text-xs text-text-muted">{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <span className="text-xs text-text-muted">{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProperties() {
  return (
    <section id="featured" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Properties"
          subtitle="Handpicked exceptional residences that define luxury living"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="/properties" className="btn-luxury btn-outline-gold">
            View All Properties
          </a>
        </motion.div>
      </div>
    </section>
  );
}
