'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const locations = [
  'All Locations',
  'New York',
  'Miami',
  'Los Angeles',
  'Beverly Hills',
  'Malibu',
  'Palm Beach',
  'Aspen',
  'San Francisco',
  'Chicago',
];

const propertyTypes = [
  'All Types',
  'House',
  'Condo',
  'Apartment',
  'Commercial',
  'Land',
  'Luxury Villa',
];

const priceRanges = [
  'Any Price',
  '$100K - $500K',
  '$500K - $1M',
  '$1M - $3M',
  '$3M - $5M',
  '$5M - $10M',
  '$10M+',
];

const bedroomOptions = ['Any', '1', '2', '3', '4', '5+'];
const bathroomOptions = ['Any', '1', '2', '3', '4', '5+'];

interface SelectFieldProps {
  label: string;
  options: string[];
  id: string;
}

function SelectField({ label, options, id }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm text-text-muted font-medium tracking-wide uppercase"
      >
        {label}
      </label>
      <select
        id={id}
        className="w-full appearance-none bg-glass-bg border border-glass-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23D4AF37' viewBox='0 0 16 16'%3E%3Cpath d='M8 11.5l-5-5h10l-5 5z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
        }}
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-charcoal text-foreground">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function SearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-6xl mx-auto glass rounded-lg p-6 md:p-8 border-b-2 border-b-gold/40"
        style={{
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(212, 175, 55, 0.08)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 items-end">
          <SelectField label="Location" options={locations} id="search-location" />
          <SelectField
            label="Property Type"
            options={propertyTypes}
            id="search-property-type"
          />
          <SelectField
            label="Price Range"
            options={priceRanges}
            id="search-price-range"
          />
          <SelectField
            label="Bedrooms"
            options={bedroomOptions}
            id="search-bedrooms"
          />
          <SelectField
            label="Bathrooms"
            options={bathroomOptions}
            id="search-bathrooms"
          />

          {/* Button — spans full width on smaller grids */}
          <div className="flex flex-col justify-end sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <button className="btn-luxury btn-gold w-full py-3.5 rounded text-sm tracking-widest group">
              <span className="flex items-center justify-center gap-2">
                {/* Search icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Find Properties
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
