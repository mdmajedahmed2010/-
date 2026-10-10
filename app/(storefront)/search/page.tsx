import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/product/product-card";
import { getProducts } from "@/actions/product.actions";

export const metadata: Metadata = {
  title: "Search Products — Pulsar Fashion",
  description: "Search Pulsar Fashion streetwear, viral polo shirts, drop shoulder tees, and jerseys.",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string; search?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolved = await searchParams;
  const query = resolved.q || resolved.search || "";

  const result = await getProducts({
    search: query || undefined,
    pageSize: 36,
  });

  const products = result.products || [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedProducts = products.map((p: any) => {
    const variantImages = p.variants?.[0]?.images;
    const image =
      Array.isArray(variantImages) && variantImages.length > 0
        ? variantImages[0]
        : "/assets/banner.jpg";

    const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.basePrice);

    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: variantPrice,
      compareAtPrice: Math.round(variantPrice * 1.3),
      image,
      category: p.category?.name || "Streetwear",
      isNew: p.isFeatured,
    };
  });

  return (
    <div className="container mx-auto px-6 md:px-8 py-6 md:py-10 max-w-[1280px] min-h-[70vh]">
      <Breadcrumb items={[{ label: "Search" }]} />

      <div className="mt-6 mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
          {query ? `Search Results for "${query}"` : "Explore Catalog"}
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-2">
          {query
            ? `Found ${mappedProducts.length} ${mappedProducts.length === 1 ? "item" : "items"} matching your query.`
            : "Use the search bar above to discover our streetwear collections."}
        </p>
      </div>

      {mappedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-8">
          {mappedProducts.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border border-dashed border-border/80 rounded-lg max-w-md mx-auto space-y-3 mt-12 bg-neutral-50/50">
          <p className="text-sm font-semibold text-foreground">No matching products found</p>
          <p className="text-xs text-muted-foreground max-w-xs mx-auto">
            Try searching for another keyword or browse our curated collections.
          </p>
        </div>
      )}
    </div>
  );
}
