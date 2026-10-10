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
    link: "/categories/hoodies-winter-wear",
    overline: "NEW WINTER DROP 2026",
    color: "from-black/75",
  },
  {
    image: "/assets/762944474_702046839352723_3350410497500588648_n.jpg",
    title: "GIVENCHY DUAL-TONE POLO",
    subtitle: "Viral textured collar drop polo with premium silicon detailing. 5 trending shades available.",
    link: "/categories/viral-polo-shirts",
    overline: "VIRAL LUXURY EDIT",
    color: "from-black/70",
  },
  {
    image: "/assets/641214084_1638290373815340_8050961803738096323_n.jpg",
    title: "SAVAGE MODE DROP SHOULDER",
    subtitle: "240+ GSM Heavy Combed Cotton with Ruthless Ambition High-Density Puff Print.",
    link: "/categories/drop-shoulder-t-shirts",
    overline: "RAW STREETWEAR AMBITION",
    color: "from-black/70",
  },
];

const defaultCollections: CollectionShowcaseItem[] = [
  {
    title: "Viral Polo Shirts",
    image: "/assets/762944474_702046839352723_3350410497500588648_n.jpg",
    href: "/categories/viral-polo-shirts",
    tag: "TRENDING VIRAL EDIT",
  },
  {
    title: "Heavy Drop Shoulder",
    image: "/assets/641214084_1638290373815340_8050961803738096323_n.jpg",
    href: "/categories/drop-shoulder-t-shirts",
    tag: "240 GSM COMBED COTTON",
  },
  {
    title: "Streetwear Hoodies",
    image: "/assets/banner.jpg",
    href: "/categories/hoodies-winter-wear",
    tag: "OWNERS CLUB WINTER DROP",
  },
  {
    title: "Club & Street Jerseys",
    image: "/assets/731105049_928173426372134_1899558913386008985_n.jpg",
    href: "/categories/club-street-jerseys",
    tag: "RETRO & MODERN KITS",
  },
  {
    title: "Wholesale Lots (পাইকারি)",
    image: "/assets/764800416_1450257009892015_6168864455209772186_n.jpg",
    href: "/categories/wholesale-lots",
    tag: "NAGOR PLAZA WHOLESALE LOTS",
  },
  {
    title: "Savage Mode Collection",
    image: "/assets/641520138_1270275811776950_5581979920153867664_n.jpg",
    href: "/products/savage-mode-drop-shoulder-t-shirt-arctic-white",
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
  /* ── Map ALL database categories to UI ── */
  const mappedCategories: CategoryItem[] = dbCategories.map((c, i) => {
    const fallbackImages = [
      "/assets/762944474_702046839352723_3350410497500588648_n.jpg",
      "/assets/641214084_1638290373815340_8050961803738096323_n.jpg",
      "/assets/731105049_928173426372134_1899558913386008985_n.jpg",
      "/assets/banner.jpg",
      "/assets/764800416_1450257009892015_6168864455209772186_n.jpg",
    ];
    return {
      name: c.name,
      slug: c.slug,
      productCount: c._count?.products || 0,
      image: c.image || fallbackImages[i % fallbackImages.length],
    };
  });

  /* ── Map database products to UI ── */
  const mappedProducts: ArrivalsProduct[] = dbProducts.slice(0, 8).map((p) => {
    const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.basePrice);
    const variantImages = p.variants?.[0]?.images;
    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: variantPrice,
      compareAtPrice: Math.round(variantPrice * 1.3),
      image:
        Array.isArray(variantImages) && variantImages.length > 0
          ? variantImages[0]
          : "/assets/762944474_702046839352723_3350410497500588648_n.jpg",
      category: p.category?.name || "Streetwear",
      isNew: true,
    };
  });

  /* ── Lookbook looks ── */
  const lookbookLooks: LookbookLook[] =
    dbProducts.length >= 3
      ? dbProducts.slice(0, 3).map((p, i) => {
          const variantPrice = p.variants?.[0]?.price
            ? Number(p.variants[0].price)
            : Number(p.basePrice);
          const variantImages = p.variants?.[0]?.images;
          const tags = ["STREETWEAR LUXE", "HEAVY COTTON", "WINTER EDIT"];
          return {
            id: p.id,
            image:
              Array.isArray(variantImages) && variantImages.length > 0
                ? variantImages[0]
                : "/assets/banner.jpg",
            title: p.category?.name || "Exclusive Drop",
            subtitle: p.name,
            slug: p.slug,
            price: variantPrice,
            tag: tags[i % 3] as string,
          };
        })
      : [
          {
            id: "look1",
            image: "/assets/762944474_702046839352723_3350410497500588648_n.jpg",
            title: "Viral Polo Shirts",
            subtitle: "Viral Givenchy Dual-Tone Luxury Polo - Jet Black",
            slug: "givenchy-dual-tone-luxury-polo-black",
            price: 1150,
            tag: "VIRAL HIT",
          },
          {
            id: "look2",
            image: "/assets/641214084_1638290373815340_8050961803738096323_n.jpg",
            title: "Drop Shoulder T-Shirts",
            subtitle: "Savage Mode Drop Shoulder T-Shirt - Jet Black",
            slug: "savage-mode-drop-shoulder-t-shirt-black",
            price: 750,
            tag: "240 GSM HEAVY",
          },
          {
            id: "look3",
            image: "/assets/banner.jpg",
            title: "Hoodies & Winter Wear",
            subtitle: "Represent Owners Club Heavyweight Hoodie",
            slug: "represent-owners-club-hoodie-barcelona",
            price: 1650,
            tag: "WINTER DROP",
          },
        ];

  /* ── Hero Slides: DB banners first, fallback to defaults if none ── */
  const heroSlides: HeroSlide[] =
    dbBanners.length > 0
      ? dbBanners.map((banner: any) => ({
          image: banner.content?.image || "/assets/banner.jpg",
          title: banner.title || "",
          subtitle: banner.subtitle || "",
          link: banner.content?.link || "/",
          overline: banner.content?.overline || "NEW DROP",
          color: banner.content?.color || "from-black/75",
        }))
      : defaultHeroSlides;

  /* ── Collections: DB collections first, fallback to defaults if none ── */
  const allCollections: CollectionShowcaseItem[] =
    dbCollections.length > 0
      ? dbCollections.map((c: any) => ({
          title: c.name,
          image:
            c.image ||
            "https://res.cloudinary.com/dnbol4pey/image/upload/f_auto,q_auto/v1783961964/bibaz/products/0bcafce4-8d43-4f3e-a1c2-59642e51c611.png",
          href: `/collections/${c.slug}`,
          tag: c.description?.toUpperCase() || c.name.toUpperCase(),
        }))
      : defaultCollections;

  return (
    <div className="flex flex-col bg-[#fdfcfa] overflow-hidden">
      {/* 1. HERO — DB banners (with fallback to defaults) */}
      <HeroSlider slides={heroSlides} />

      {/* 2. TRUST BADGES — Lightweight, eager */}
      <TrustBadges />

      {/* 3. CATEGORY GRID — Lazy loaded */}
      <CategoryGrid categories={mappedCategories} />

      {/* 4. NEW ARRIVALS — Lazy loaded */}
      <NewArrivalsGrid products={mappedProducts} />

      {/* 5. LOOKBOOK — Lazy loaded */}
      <LookbookSection looks={lookbookLooks} />

      {/* 6. ALL COLLECTIONS — Lazy loaded */}
      <CollectionsShowcase collections={allCollections} />

      {/* 7. TESTIMONIALS — Lazy loaded */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* 8. SHORT BRAND STORY — Lazy loaded */}
      <EditorialSection />
    </div>
  );
}
