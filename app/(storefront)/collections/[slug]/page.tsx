/**
 * BIBAZ — Collection/Category Page (DATABASE-driven)
 * Fetches products from real database
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/product/product-card";
import { CollectionFilters } from "@/components/product/collection-filters";
import { SortDropdown } from "@/components/product/sort-dropdown";
import { MobileFilterDrawer } from "@/components/product/mobile-filter-drawer";
import { getProducts } from "@/actions/product.actions";
import { getCollectionBySlug } from "@/actions/collection.actions";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ size?: string | string[]; price?: string; sort?: string; q?: string }>;
}

// Special category descriptions
const specialCategories: Record<string, { name: string; description: string }> = {
  "new-arrivals": {
    name: "New Arrivals",
    description: "Latest additions to our collection",
  },
  featured: {
    name: "Featured",
    description: "Handpicked styles curated for you",
  },
  sale: {
    name: "Sale",
    description: "Special offers and discounted items",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Check special categories first
  if (specialCategories[slug]) {
    return {
      title: `${specialCategories[slug].name} Collection`,
      description: specialCategories[slug].description,
    };
  }

  // Otherwise fetch from DB
  const res = await getCollectionBySlug(slug);
  if (!res.success || !res.collection) return { title: "Collection Not Found" };

  return {
    title: `${res.collection.name} Collection`,
    description: res.collection.description || `Browse our ${res.collection.name} collection`,
  };
}

export default async function CollectionPage({ params, searchParams }: CollectionPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  // Determine category info
  let categoryName: string;
  let categoryDescription: string;
  let useFeaturedFilter = false;
  let useNewestSort = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let collectionProducts: any[] = [];

  if (specialCategories[slug]) {
    categoryName = specialCategories[slug].name;
    categoryDescription = specialCategories[slug].description;
    if (slug === "featured") useFeaturedFilter = true;
    if (slug === "new-arrivals") useNewestSort = true;
    
    // Determine sort
    const sort = resolvedSearchParams.sort;
    let sortOrder = "newest";
    if (useNewestSort) sortOrder = "newest";
    if (sort === "price-low-high") sortOrder = "price-asc";
    if (sort === "price-high-low") sortOrder = "price-desc";

    // Fetch products from DB
    const result = await getProducts({
      categorySlug: undefined,
      sort: sortOrder,
      pageSize: 48,
      isFeatured: useFeaturedFilter ? true : undefined,
    });
    collectionProducts = result.products || [];
  } else {
    // Look up COLLECTION from DB
    const res = await getCollectionBySlug(slug);
    if (!res.success || !res.collection) notFound();
    categoryName = res.collection.name;
    categoryDescription = res.collection.description || `Browse our ${res.collection.name} collection — premium quality, elegant designs.`;
    collectionProducts = res.products || [];
    
    // Sort locally for custom collections
    const sort = resolvedSearchParams.sort;
    if (sort === "price-low-high") {
      collectionProducts.sort((a, b) => Number(a.basePrice) - Number(b.basePrice));
    } else if (sort === "price-high-low") {
      collectionProducts.sort((a, b) => Number(b.basePrice) - Number(a.basePrice));
    } else {
      collectionProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }

  let products = collectionProducts;

  // Server-side price filter
  const price = resolvedSearchParams.price;
  if (price && typeof price === "string") {
    const parts = price.split("-");
    const minVal = Number(parts[0]);
    const maxVal = Number(parts[1]);
    if (!isNaN(minVal) && !isNaN(maxVal)) {
      products = products.filter((p) => {
        const productPrice = Number(p.basePrice);
        return productPrice >= minVal && productPrice <= maxVal;
      });
    }
  }

  // Server-side size filter
  const sizeParam = resolvedSearchParams.size;
  if (sizeParam) {
    const selectedSizes = Array.isArray(sizeParam) ? sizeParam : [sizeParam];
    if (selectedSizes.length > 0) {
      products = products.filter((p) =>
        p.variants?.some((v: { size?: string }) => v.size && selectedSizes.includes(v.size))
      );
    }
  }

  // Server-side search query filter
  const searchQuery = resolvedSearchParams.q;
  if (searchQuery && typeof searchQuery === "string" && searchQuery.trim().length > 0) {
    const qLower = searchQuery.trim().toLowerCase();
    products = products.filter(
      (p) =>
        p.name?.toLowerCase().includes(qLower) ||
        p.description?.toLowerCase().includes(qLower)
    );
  }

  // Map DB products to ProductCard format
  const mappedProducts = products.map((p) => {
    const variantImages = p.variants?.[0]?.images;
    const image =
      Array.isArray(variantImages) && variantImages.length > 0
        ? variantImages[0]
        : "/images/products/placeholder.jpg";

    const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.basePrice);

    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: variantPrice,
      compareAtPrice: Math.round(variantPrice * 1.2),
      image,
      category: p.category?.name || categoryName,
      isNew: p.isFeatured,
    };
  });

  return (
    <div className="container mx-auto px-6 md:px-8 py-6 md:py-10 max-w-[1280px]">
      <Breadcrumb
        items={[{ label: "Collections", href: "/collections" }, { label: categoryName }]}
      />

      <div className="mt-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
          {categoryName}
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
          {categoryDescription}
        </p>
      </div>

      <div className="mb-8">
        <CollectionFilters />
      </div>

      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {mappedProducts.length} {mappedProducts.length === 1 ? "Product" : "Products"} Found
        </p>
        <div className="flex items-center gap-4">
          <MobileFilterDrawer />
          <SortDropdown />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {mappedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {mappedProducts.length === 0 && (
        <div className="text-center py-24 border border-dashed border-border/80 rounded-lg max-w-md mx-auto space-y-3 mt-12 bg-neutral-50/50">
          <p className="text-sm font-semibold text-foreground">No matching products found</p>
          <p className="text-xs text-muted-foreground max-w-xs mx-auto">
            Try adjusting your filters to discover other premium fashion edits.
          </p>
        </div>
      )}
    </div>
  );
}
