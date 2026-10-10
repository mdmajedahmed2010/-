"use client";

/**
 * BIBAZ — Category Grid (Extracted from home-client.tsx)
 * Animated category cards with Framer Motion staggerChildren.
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ──────────────── Types ──────────────── */

export interface CategoryItem {
  name: string;
  slug: string;
  productCount: number;
  image: string;
}

interface CategoryGridProps {
  categories: CategoryItem[];
}

/* ──────────────── Animation Variants ──────────────── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headingVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardVariants: any = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ──────────────── Image With Skeleton ──────────────── */

function ImageWithSkeleton({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="absolute inset-0 skeleton-shimmer z-[1]" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

/* ──────────────── Component ──────────────── */

export function CategoryGrid({ categories }: CategoryGridProps) {
  if (categories.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f0] border-b border-border/40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px 0px" }}
        variants={containerVariants}
        className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl"
      >
        {/* Section heading */}
        <motion.div
          variants={headingVariants}
          className="text-center max-w-lg mx-auto mb-10 md:mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-3">
            SHOP BY CATEGORY
          </p>
          <h2 className="text-2xl md:text-[36px] font-bold tracking-tight text-foreground font-heading">
            All Categories
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] bg-accent mx-auto mt-4"
          />
        </motion.div>

        {/* Category cards with staggered animation — Top 4 categories */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5"
        >
          {categories.slice(0, 4).map((category) => (
            <motion.div key={category.slug} variants={cardVariants}>
              <Link
                href={`/collections/${category.slug}`}
                className="group relative overflow-hidden rounded-sm aspect-[3/4] shadow-luxury hover:shadow-gold-glow bg-neutral-900 block border border-[#e8e6e1]/30 transition-all duration-500"
              >
                <ImageWithSkeleton
                  src={category.image}
                  alt={category.name}
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-110 group-active:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-3.5 border border-[#c9a96e]/25 group-hover:border-[#c9a96e]/70 transition-all duration-500 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#c9a96e]/20 border border-[#c9a96e]/40 text-[#e8ce9e] text-[9px] uppercase tracking-[0.24em] font-bold mb-2">
                    ✦ {category.productCount} Products
                  </span>
                  <h3 className="text-white text-base md:text-xl font-bold tracking-tight mb-2 font-heading">
                    {category.name}
                  </h3>
                  <p className="text-[10.5px] text-[#e8ce9e] uppercase tracking-[0.16em] font-bold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0 transition-all duration-300 font-sans">
                    Explore Category →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Haute-Couture Visit All Categories Button */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-[#0f0e0d] text-[#e8ce9e] text-xs uppercase tracking-[0.24em] font-bold rounded-sm hover:bg-gradient-gold hover:text-[#0f0e0d] transition-all duration-300 shadow-luxury hover:shadow-gold-glow border border-[#c9a96e]/30 active:scale-[0.98]"
          >
            Visit All Categories →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
