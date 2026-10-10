import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { prisma } from "@/lib/db";
import { CATEGORIES } from "@/lib/demo-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Categories — Pulsar Fashion",
  description:
    "Browse all Pulsar Fashion streetwear categories — Viral Polo Shirts, Drop Shoulder T-Shirts, Club & Street Jerseys, Hoodies & Winter Wear, and Wholesale Lots.",
};

type CategoryItem = {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  _count?: {
    products: number;
  };
};

export default async function CategoriesPage() {
  let categories: CategoryItem[] = [];
  try {
    categories = await prisma.category.findMany({
      where: { isActive: true },
      include: {
        _count: { select: { products: true } },
      },
      orderBy: { sortOrder: "asc" },
    });
  } catch (err) {
    console.error("[CATEGORIES] Database error:", err);
  }

  // Fallback to catalog categories if database returns none
  if (categories.length === 0) {
    categories = CATEGORIES.map((c, i) => ({
      id: `cat-${i}`,
      name: c.name,
      slug: c.slug,
      image: c.image,
      _count: { products: c.productCount },
    }));
  }

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Categories" }]} />

        {/* Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#c9a96e]/50 bg-[#c9a96e]/10 text-[#0f0e0d] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ PULSAR FASHION COLLECTIONS ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0e0d] font-heading">
            All Categories
          </h1>
          <div className="w-20 h-[2px] bg-[#c9a96e] mx-auto mt-5" />
          <p className="text-neutral-600 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            আমাদের অফিসিয়াল ক্যাটাগরিগুলো ঘুরে দেখুন—ভাইরাল পোলো, হেভিওয়েট ড্রপ শোল্ডার, স্পোর্টস জার্সি এবং পাইকারি বান্ডেল।
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mb-24">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative overflow-hidden rounded-sm shadow-luxury hover:shadow-gold-glow transition-all duration-500 aspect-[3/4] bg-neutral-900 block border border-[#e8e6e1]/40"
            >
              <Image
                src={cat.image || "/assets/banner.jpg"}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-3.5 border border-[#c9a96e]/25 group-hover:border-[#c9a96e]/70 transition-all duration-500 pointer-events-none z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#c9a96e]/20 border border-[#c9a96e]/40 text-[#e8ce9e] text-[9.5px] uppercase tracking-[0.24em] font-bold mb-2.5">
                  ✦ {cat._count?.products ?? 5} Products
                </span>
                <h2 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-[#e8ce9e] transition-colors leading-tight">
                  {cat.name}
                </h2>
                <span className="text-[11px] text-[#e8ce9e] uppercase tracking-[0.16em] font-bold mt-3 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  Explore Category →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
