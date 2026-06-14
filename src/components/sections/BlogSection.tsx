'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { blogPosts } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="card-luxury group cursor-pointer"
    >
      {/* Image */}
      <div className="relative img-zoom h-52">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase bg-[#D4AF37] text-[#0B0B0B] rounded-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image src={post.authorPhoto} alt={post.author} fill className="object-cover" sizes="32px" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">{post.author}</p>
            <p className="text-[11px] text-text-muted">{post.date}</p>
          </div>
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-text-muted line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-card-border">
          <span className="text-xs text-text-muted">{post.readTime}</span>
          <span className="text-xs font-semibold text-[#D4AF37] group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
            Read More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest Insights"
          subtitle="Expert analysis and market intelligence from our team"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
