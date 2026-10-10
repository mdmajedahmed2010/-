import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/product/product-card";
import { getProducts } from "@/actions/product.actions";
import { CATEGORIES } from "@/lib/demo-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop All Products — Pulsar Fashion | স্ট্রিটওয়্যার ও পাইকারি",
  description:
    "Pulsar Fashion - ভাইরাল লাক্সারি পোলো শার্ট, ড্রপ শোল্ডার টি-শার্ট, ক্লাব জার্সি, হুডি এবং পাইকারি লটের সম্পূর্ণ কালেকশন।",
};

interface ShopPageProps {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
    q?: string;
  }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const currentCategory = params.category || "all";
  const currentSort = params.sort || "newest";
  const searchQuery = params.q || "";

  // Fetch products
  const result = await getProducts({
    categorySlug: currentCategory !== "all" ? currentCategory : undefined,
    sort: currentSort,
    pageSize: 40,
    search: searchQuery,
  });

  const products = result.products || [];

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "Shop All Products" }]} />

        {/* Page Header */}
        <div className="mt-8 mb-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#c9a96e]/50 bg-[#c9a96e]/10 text-[#0f0e0d] text-[10px] uppercase tracking-[0.28em] font-bold mb-3">
            ✦ OFFICIAL STREETWEAR CATALOG ✦
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f0e0d] font-heading">
            Pulsar Fashion Shop
          </h1>
          <div className="w-16 h-[2px] bg-[#c9a96e] mx-auto mt-4" />
          <p className="text-muted-foreground mt-3 text-xs md:text-sm max-w-lg mx-auto">
            খুচরা গ্রাহকদের জন্য ক্যাশ অন ডেলিভারি এবং ব্যবসায়ীদের জন্য পাইকারি লটের সেরা সম্ভার
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
          <Link
            href="/shop"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
              currentCategory === "all"
                ? "bg-[#0f0e0d] text-white shadow-sm"
                : "bg-white border border-border text-foreground hover:border-foreground"
            }`}
          >
            All Products
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                currentCategory === cat.slug
                  ? "bg-[#0f0e0d] text-white shadow-sm"
                  : "bg-white border border-border text-foreground hover:border-foreground"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Product Count & Meta Bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-border/60 text-xs text-muted-foreground font-medium">
          <p>
            Showing <strong className="text-foreground">{products.length}</strong> Products
            {currentCategory !== "all" && ` in ${currentCategory}`}
          </p>
          <div className="flex items-center gap-2">
            <span>সরাসরি ক্যাশ অন ডেলিভারি (COD)</span>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product: any) => {
              const primaryVariant = product.variants?.[0];
              const variantPrice = primaryVariant?.price ? Number(primaryVariant.price) : Number(product.basePrice);
              const variantImages = primaryVariant?.images;
              const imageUrl =
                Array.isArray(variantImages) && variantImages.length > 0
                  ? variantImages[0]
                  : "/assets/banner.jpg";

              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  price={variantPrice}
                  compareAtPrice={Number(product.compareAtPrice) || Math.round(variantPrice * 1.3)}
                  image={imageUrl}
                  category={product.category?.name || "Streetwear"}
                  isNew={true}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <p className="text-muted-foreground text-sm">কোনো প্রোডাক্ট পাওয়া যায়নি।</p>
            <Link
              href="/shop"
              className="inline-flex px-6 py-2.5 bg-foreground text-background text-xs font-bold rounded-sm uppercase tracking-wider"
            >
              সব প্রোডাক্ট দেখুন
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
