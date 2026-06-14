'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { investmentData } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-[#161616] border border-[#D4AF37]/30 rounded-lg p-4 shadow-xl">
      <p className="text-xs text-white/50 mb-2">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="text-sm font-semibold" style={{ color: entry.name === 'roi' ? '#D4AF37' : entry.name === 'appreciation' ? '#E8C84A' : '#9CA3AF' }}>
          {entry.name === 'roi' ? 'ROI' : entry.name === 'appreciation' ? 'Appreciation' : 'Rental Yield'}: {entry.value}%
        </p>
      ))}
    </div>
  );
}

export default function InvestmentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const highlights = [
    { value: '17.1%', label: 'Average ROI', change: '+12% YoY' },
    { value: '$2.5M', label: 'Avg. Property Value', change: '+8% YoY' },
    { value: '94%', label: 'Occupancy Rate', change: '+3% YoY' },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/[0.03] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <SectionHeading
          title="Investment Insights"
          subtitle="Real estate performance data and market analytics"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 card-luxury p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Market Performance</h3>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> ROI</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#E8C84A]" /> Appreciation</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#9CA3AF]" /> Rental</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={investmentData}>
                <defs>
                  <linearGradient id="colorRoi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorAppreciation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E8C84A" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#E8C84A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} unit="%" />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="roi" stroke="#D4AF37" strokeWidth={2} fillOpacity={1} fill="url(#colorRoi)" />
                <Area type="monotone" dataKey="appreciation" stroke="#E8C84A" strokeWidth={2} fillOpacity={1} fill="url(#colorAppreciation)" />
                <Area type="monotone" dataKey="rental" stroke="#9CA3AF" strokeWidth={1.5} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((h) => (
              <div key={h.label} className="card-luxury p-6 flex-1">
                <p className="text-sm text-text-muted mb-2">{h.label}</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-gold-gradient">{h.value}</span>
                  <span className="text-xs text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded">{h.change}</span>
                </div>
              </div>
            ))}
            <a href="/services" className="btn-luxury btn-outline-gold w-full mt-auto text-sm">
              View Full Report
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
