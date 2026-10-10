/* eslint-disable */
"use client";

/**
 * BIBAZ — Home UI Orchestrator (Refactored v4.0)
 * Lightweight orchestrator using next/dynamic for below-fold lazy loading.
 * Hero is eager-loaded (above-fold), all other sections are code-split.
 */

import dynamic from "next/dynamic";
import { HeroSlider, type HeroSlide } from "@/components/home/hero-slider";
import { TrustBadges } from "@/components/home/trust-badges";
import type { CategoryItem } from "@/components/home/category-grid";
import type { LookbookLook } from "@/components/home/lookbook-section";
import type { CollectionShowcaseItem } from "@/components/home/collections-showcase";
import type { ArrivalsProduct } from "@/components/home/new-arrivals-grid";
import type { Testimonial } from "@/components/home/testimonials-carousel";
import { ALL_PRODUCTS, CATEGORIES } from "@/lib/demo-data";

/* ──────────────── Dynamic Imports with Loading Skeletons ──────────────── */

const CategoryGrid = dynamic(
  () => import("@/components/home/category-grid").then((mod) => mod.CategoryGrid),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="h-6 w-48 skeleton-shimmer mx-auto mb-12 rounded" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[3/4] skeleton-shimmer rounded-sm" />
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

const NewArrivalsGrid = dynamic(
  () => import("@/components/home/new-arrivals-grid").then((mod) => mod.NewArrivalsGrid),
  {
    loading: () => (
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="h-6 w-40 skeleton-shimmer mb-12 rounded" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-14">
            {[...Array(8)].map((_, i) => (
              <div key={i}>
                <div className="aspect-[3/4] skeleton-shimmer mb-3 rounded-sm" />
                <div className="h-3 w-3/4 skeleton-shimmer rounded mb-2" />
                <div className="h-3 w-1/2 skeleton-shimmer rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

const LookbookSection = dynamic(
  () => import("@/components/home/lookbook-section").then((mod) => mod.LookbookSection),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-surface-warm">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-5 space-y-4">
              <div className="h-8 w-48 skeleton-shimmer rounded" />
              <div className="h-12 w-full skeleton-shimmer rounded" />
              <div className="h-12 w-full skeleton-shimmer rounded" />
            </div>
            <div className="col-span-7 aspect-[3/4] skeleton-shimmer rounded-sm" />
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

const CollectionsShowcase = dynamic(
  () => import("@/components/home/collections-showcase").then((mod) => mod.CollectionsShowcase),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="h-6 w-48 skeleton-shimmer mx-auto mb-12 rounded" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[4/5] skeleton-shimmer rounded-sm" />
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

const TestimonialsCarousel = dynamic(
  () => import("@/components/home/testimonials-carousel").then((mod) => mod.TestimonialsCarousel),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-5xl">
          <div className="h-6 w-40 skeleton-shimmer mx-auto mb-10 rounded" />
          <div className="h-48 skeleton-shimmer rounded-sm" />
        </div>
      </section>
    ),
    ssr: false,
  }
);

const EditorialSection = dynamic(
  () => import("@/components/home/editorial-section").then((mod) => mod.EditorialSection),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-[#faf9f6]">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="col-span-5 aspect-[4/5] skeleton-shimmer rounded-sm" />
            <div className="col-span-7 space-y-4">
              <div className="h-6 w-32 skeleton-shimmer rounded" />
              <div className="h-10 w-3/4 skeleton-shimmer rounded" />
              <div className="h-20 w-full skeleton-shimmer rounded" />
            </div>
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

/* ──────────────── Static Fallback Data ──────────────── */

const defaultHeroSlides: HeroSlide[] = [
  {
    image: "/assets/banner.jpg",
    title: "REPRESENT OWNERS CLUB",
    subtitle: "Heavyweight 380 GSM Streetwear Fleece Hoodies in Barcelona Khaki, Brooklyn Navy & Real Madrid.",
    link: "/categories/hoodies",
    overline: "NEW WINTER DROP 2026",
    color: "from-black/75",
  },
  {
    image: "/assets/asset-1.jpg",
    title: "GIVENCHY DUAL-TONE POLO",
    subtitle: "Viral textured collar drop polo with premium silicon detailing. 5 trending shades available.",
    link: "/categories/polo-shirts",
    overline: "VIRAL LUXURY EDIT",
    color: "from-black/70",
  },
  {
    image: "/assets/asset-3.jpg",
    title: "SAVAGE MODE DROP SHOULDER",
    subtitle: "240+ GSM Heavy Combed Cotton with Ruthless Ambition High-Density Puff Print.",
    link: "/categories/drop-shoulder",
    overline: "RAW STREETWEAR AMBITION",
    color: "from-black/70",
  },
];

const defaultCollections: CollectionShowcaseItem[] = [
  {
    title: "Viral Polo Shirts",
    image: "/assets/asset-1.jpg",
    href: "/categories/polo-shirts",
    tag: "TRENDING VIRAL EDIT",
  },
  {
    title: "Heavy Drop Shoulder",
    image: "/assets/asset-3.jpg",
    href: "/categories/drop-shoulder",
    tag: "240 GSM COMBED COTTON",
  },
  {
    title: "Streetwear Hoodies",
    image: "/assets/banner.jpg",
    href: "/categories/hoodies",
    tag: "OWNERS CLUB WINTER DROP",
  },
  {
    title: "Club & Street Jerseys",
    image: "/assets/asset-9.jpg",
    href: "/categories/jerseys",
    tag: "RETRO & MODERN KITS",
  },
  {
    title: "Wholesale Lots (পাইকারি)",
    image: "/assets/asset-5.jpg",
    href: "/categories/wholesale",
    tag: "NAGOR PLAZA WHOLESALE LOTS",
  },
  {
    title: "Savage Mode Collection",
    image: "/assets/asset-6.jpg",
    href: "/products/savage-mode-drop-shoulder-tshirt-arctic-white",
    tag: "HIGH-DENSITY PUFF PRINT",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Pulsar Fashion-এর Givenchy Polo টি হাতে পেয়ে মুগ্ধ হয়েছি। ফেব্রিকের কোয়ালিটি এবং কলারের ডিটেইলিং এক কথায় অসাধারণ। ডেলিভারি ম্যানের সামনে চেক করে নিশ্চিন্তে পেমেন্ট করেছি!",
    author: "তানভীর আহমেদ",
    designation: "Verified Buyer — ধানমন্ডি, ঢাকা",
    stars: 5,
  },
  {
    quote:
      "নগর প্লাজার শোরুম থেকে পাইকারি লট নিয়েছিলাম আমাদের শপের জন্য। ফেব্রিক 240 GSM খাঁটি কম্বড সুতি এবং প্রিন্ট এক নম্বর। কাস্টমারদের কাছ থেকে দারুণ সাড়া পেয়েছি।",
    author: "মো: রফিকুল ইসলাম",
    designation: "Wholesale Retailer — চট্টগ্রাম",
    stars: 5,
  },
  {
    quote:
      "Savage Mode Drop Shoulder টি-শার্টের ফিটিং একদম পারফেক্ট বক্সি কাট। ওয়াশ করার পরও কোনো রঙ বা প্রিন্ট নষ্ট হয়নি। ঢাকার ভেতরে ২৪ ঘণ্টার মধ্যে হোম ডেলিভারি পেয়েছি।",
    author: "ফারহান কবির",
    designation: "Verified Buyer — উত্তরা, ঢাকা",
    stars: 5,
  },
];

/* ──────────────── Main Component ──────────────── */

export function HomeUI({
  dbProducts,
  dbCategories,
  dbBanners = [],
  dbCollections = [],
}: {
  dbProducts: any[];
  dbCategories: any[];
  dbBanners?: any[];
  dbCollections?: any[];
}) {
  /* ── Map categories to UI (always fallback to CATEGORIES if empty) ── */
  const sourceCategories = dbCategories && dbCategories.length > 0 ? dbCategories : CATEGORIES;
  const mappedCategories: CategoryItem[] = sourceCategories.map((c: any, i: number) => ({
    name: c.name,
    slug: c.slug,
    productCount: c._count?.products || c.productCount || 5,
    image: c.image || `/assets/asset-${(i % 10) + 1}.jpg`,
  }));

  /* ── Map products to UI (always fallback to ALL_PRODUCTS if empty) ── */
  const sourceProducts = dbProducts && dbProducts.length > 0 ? dbProducts : ALL_PRODUCTS;
  const mappedProducts: ArrivalsProduct[] = sourceProducts.slice(0, 8).map((p: any, i: number) => {
    const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.price || p.basePrice || 750);
    const variantImages = p.variants?.[0]?.images;
    const prodImg =
      Array.isArray(variantImages) && variantImages.length > 0
        ? variantImages[0]
        : (p.image || `/assets/asset-${(i % 10) + 1}.jpg`);

    return {
      id: p.id || `prod-${i}`,
      name: p.name,
      slug: p.slug,
      price: variantPrice,
      compareAtPrice: p.compareAtPrice || Math.round(variantPrice * 1.3),
      image: prodImg,
      category: p.category?.name || p.category || "Streetwear",
      isNew: p.isNew ?? true,
    };
  });

  /* ── Lookbook looks (guaranteed working asset paths) ── */
  const lookbookLooks: LookbookLook[] = [
    {
      id: "look1",
      image: "/assets/asset-1.jpg",
      title: "Viral Polo Shirts",
      subtitle: "Viral Givenchy Dual-Tone Luxury Polo - Slate Blue",
      slug: "viral-givenchy-dual-tone-polo-slate-blue",
      price: 750,
      tag: "VIRAL HIT",
    },
    {
      id: "look2",
      image: "/assets/asset-3.jpg",
      title: "Drop Shoulder T-Shirts",
      subtitle: "Savage Mode Heavy Cotton Drop Shoulder - Jet Black",
      slug: "savage-mode-drop-shoulder-tshirt-jet-black",
      price: 550,
      tag: "240 GSM HEAVY",
    },
    {
      id: "look3",
      image: "/assets/banner.jpg",
      title: "Hoodies & Winter Wear",
      subtitle: "Represent Owners Club Heavyweight Hoodie",
      slug: "represent-owners-club-barcelona-hoodie-khaki",
      price: 1250,
      tag: "WINTER DROP",
    },
  ];

  /* ── Hero Slides: DB banners first, fallback to defaults ── */
  const heroSlides: HeroSlide[] =
    dbBanners && dbBanners.length > 0
      ? dbBanners.map((banner: any) => ({
          image: banner.content?.image || "/assets/banner.jpg",
          title: banner.title || "",
          subtitle: banner.subtitle || "",
          link: banner.content?.link || "/shop",
          overline: banner.content?.overline || "NEW DROP",
          color: banner.content?.color || "from-black/75",
        }))
      : defaultHeroSlides;

  /* ── Collections: DB collections first, fallback to defaults ── */
  const allCollections: CollectionShowcaseItem[] =
    dbCollections && dbCollections.length > 0
      ? dbCollections.map((c: any, i: number) => ({
          title: c.name,
          image:
            c.image && !c.image.includes("cloudinary")
              ? c.image
              : (defaultCollections[i % defaultCollections.length]?.image || "/assets/asset-1.jpg"),
          href: `/categories/${c.slug}`,
          tag: c.description?.toUpperCase() || c.name.toUpperCase(),
        }))
      : defaultCollections;

  return (
    <div className="flex flex-col bg-[#fdfcfa] overflow-hidden">
      {/* 1. HERO SLIDER */}
      <HeroSlider slides={heroSlides} />

      {/* 2. TRUST BADGES */}
      <TrustBadges />

      {/* 3. CATEGORY GRID */}
      <CategoryGrid categories={mappedCategories} />

      {/* 4. LOOKBOOK / EDITORIAL SHOWCASE */}
      <LookbookSection looks={lookbookLooks} />

      {/* 5. TRENDING STREETWEAR DROPS / PRODUCTS SECTION (Right before collections) */}
      <NewArrivalsGrid products={mappedProducts} />

      {/* 6. ALL COLLECTIONS */}
      <CollectionsShowcase collections={allCollections} />

      {/* 7. TESTIMONIALS */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* 8. SHORT BRAND STORY */}
      <EditorialSection />
    </div>
  );
}
