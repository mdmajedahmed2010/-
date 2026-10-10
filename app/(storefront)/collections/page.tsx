import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Collections — Pulsar Fashion",
  description:
    "Explore exclusive Pulsar Fashion streetwear collections — Viral Givenchy Polo Series, Savage Mode Drop Shoulder, Winter Hoodies, Football Jerseys and Wholesale Lots.",
};

export default async function CollectionsPage() {
  const curatedCollections = [
    {
      title: "Viral Givenchy Polo Series",
      image: "/assets/762944474_702046839352723_3350410497500588648_n.jpg",
      href: "/categories/viral-polo-shirts",
      tag: "VIRAL LUXURY POLO",
      desc: "Textured collar dual-tone luxury drop shoulder polo shirts in 5 trending shades",
    },
    {
      title: "Savage Mode Heavyweight Drop Shoulder",
      image: "/assets/641214084_1638290373815340_8050961803738096323_n.jpg",
      href: "/categories/drop-shoulder-t-shirts",
      tag: "240+ GSM COMBED COTTON",
      desc: "Ruthless Ambition high-density puff print boxy drop shoulder tees",
    },
    {
      title: "Represent Owners Club Winter Drop",
      image: "/assets/banner.jpg",
      href: "/categories/hoodies-winter-wear",
      tag: "HEAVYWEIGHT FLEECE HOODIES",
      desc: "380 GSM fleece winter streetwear hoodies in Barcelona Khaki, Brooklyn Navy & Real Madrid",
    },
    {
      title: "Club & Retro Football Jerseys",
      image: "/assets/731105049_928173426372134_1899558913386008985_n.jpg",
      href: "/categories/club-street-jerseys",
      tag: "STREETWEAR KITS",
      desc: "Classic & modern drop shoulder oversized football club jerseys with breathable mesh",
    },
    {
      title: "Nagor Plaza Wholesale Lots (পাইকারি)",
      image: "/assets/764800416_1450257009892015_6168864455209772186_n.jpg",
      href: "/categories/wholesale-lots",
      tag: "WHOLESALE PACKAGES",
      desc: "দোকানের জন্য বিশেষ পাইকারি লট ও প্রিমিয়াম মিক্সড বান্ডেল প্যাকেজ",
    },
    {
      title: "Arctic & Earth Tone Streetwear",
      image: "/assets/641520138_1270275811776950_5581979920153867664_n.jpg",
      href: "/products/savage-mode-drop-shoulder-t-shirt-arctic-white",
      tag: "MINIMALIST STREET EDIT",
      desc: "Pure Arctic White & Chocolate Brown raw streetwear essentials with premium silicone details",
    },
  ];

  // Also fetch DB categories
  let categories: any[] = [];
  try {
    categories = await prisma.category.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    });
  } catch {
    categories = [];
  }

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Collections" }]} />

        {/* Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#c9a96e]/50 bg-[#c9a96e]/10 text-[#0f0e0d] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ PULSAR FASHION STREETWEAR DROPS ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0e0d] font-heading">
            All Collections
          </h1>
          <div className="w-20 h-[2px] bg-[#c9a96e] mx-auto mt-5" />
          <p className="text-neutral-600 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            আমাদের ভাইরাল লাক্সারি পোলো, হেভি ড্রপ শোল্ডার টি-শার্ট, শীতের কালেকশন ও পাইকারি লট এক নজরে ঘুরে দেখুন।
          </p>
        </div>

        {/* Curated Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 mb-24">
          {curatedCollections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden rounded-sm shadow-luxury hover:shadow-gold-glow transition-all duration-500 aspect-[4/5] bg-neutral-900 block border border-[#e8e6e1]/40"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#e8ce9e] mb-2 block">
                  {col.tag}
                </span>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2 font-heading leading-tight group-hover:text-[#e8ce9e] transition-colors">
                  {col.title}
                </h2>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories Section if available */}
        {categories.length > 0 && (
          <div className="border-t border-border/60 pt-16">
            <h2 className="text-2xl font-bold text-center mb-8 font-heading">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((cat: any) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="p-4 rounded-sm border border-border text-center hover:border-foreground transition-colors bg-white"
                >
                  <p className="font-bold text-xs uppercase tracking-wider">{cat.name}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
