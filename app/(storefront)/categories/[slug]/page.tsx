import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/product/product-card";
import { getProducts } from "@/actions/product.actions";
import { getProductsByCategory, CATEGORIES } from "@/lib/demo-data";

export const dynamic = "force-dynamic";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    sort?: string;
    price?: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  const title = cat ? `${cat.name} — Pulsar Fashion` : "Category — Pulsar Fashion";
  return {
    title,
    description: cat?.description || "Browse Pulsar Fashion collection",
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const search = await searchParams;
  const currentSort = search.sort || "newest";

  // Try DB products first
  const dbResult = await getProducts({
    categorySlug: slug,
    sort: currentSort,
    pageSize: 36,
  });

  let products: any[] = dbResult.products || [];

  // Fallback to demo data if DB has no products
  if (products.length === 0) {
    const demoItems = getProductsByCategory(slug);
    products = demoItems.map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      basePrice: p.price,
      compareAtPrice: p.compareAtPrice,
      category: { name: p.category, slug },
      variants: [
        {
          id: `${p.id}-v`,
          price: p.price,
          images: [p.image],
        },
      ],
    }));
  }

  const categoryMeta = CATEGORIES.find((c) => c.slug === slug) || {
    name: slug.replace(/-/g, " ").toUpperCase(),
    description: "Pulsar Fashion official collection",
  };

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb
          items={[
            { label: "Categories", href: "/categories" },
            { label: categoryMeta.name },
          ]}
        />

        {/* Header */}
        <div className="mt-8 mb-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#c9a96e]/50 bg-[#c9a96e]/10 text-[#0f0e0d] text-[10px] uppercase tracking-[0.28em] font-bold mb-3">
            ✦ PULSAR FASHION CATEGORY ✦
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f0e0d] font-heading capitalize">
            {categoryMeta.name}
          </h1>
          <div className="w-16 h-[2px] bg-[#c9a96e] mx-auto mt-4" />
          <p className="text-muted-foreground mt-3 text-xs md:text-sm max-w-lg mx-auto">
            {categoryMeta.description}
          </p>
        </div>

        {/* Other Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <Link
            href="/shop"
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm bg-white border border-border hover:border-foreground"
          >
            All Products
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                c.slug === slug
                  ? "bg-[#0f0e0d] text-white"
                  : "bg-white border border-border text-foreground hover:border-foreground"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        {/* Product Count Bar */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-border/60 text-xs text-muted-foreground font-medium">
          <p>
            Showing <strong className="text-foreground">{products.length}</strong> items in{" "}
            <strong>{categoryMeta.name}</strong>
          </p>
          <span>সারাদেশে ক্যাশ অন ডেলিভারি (COD)</span>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product: any) => {
              const primaryVariant = product.variants?.[0];
              const variantPrice = primaryVariant?.price
                ? Number(primaryVariant.price)
                : Number(product.basePrice);
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
                  category={product.category?.name || categoryMeta.name}
                  isNew={true}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <p className="text-muted-foreground text-sm">এই ক্যাটাগরিতে বর্তমানে কোনো প্রোডাক্ট নেই।</p>
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
