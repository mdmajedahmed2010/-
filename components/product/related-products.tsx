/**
 * PULSAR FASHION — Related Products Section
 * "You May Also Like" — Streetwear recommendations & color variants
 */

import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard, type ProductCardProps } from "./product-card";
import { prisma } from "@/lib/db";
import { ALL_PRODUCTS } from "@/lib/demo-data";

interface RelatedProductsProps {
  categorySlug: string;
  currentProductId?: string;
}

export async function RelatedProducts({ categorySlug, currentProductId }: RelatedProductsProps) {
  let dbProducts: any[] = [];

  try {
    if (process.env.DATABASE_URL) {
      // 1. Same category products
      dbProducts = await prisma.product.findMany({
        where: {
          category: { slug: categorySlug },
          status: "ACTIVE",
          ...(currentProductId ? { id: { not: currentProductId } } : {}),
        },
        include: {
          variants: {
            select: { price: true, images: true },
          },
          category: { select: { name: true } },
        },
        take: 4,
        orderBy: { createdAt: "desc" },
      });

      // 2. Backfill with any other active products if fewer than 4 found
      if (dbProducts.length < 4) {
        const existingIds = [currentProductId, ...dbProducts.map((p) => p.id)].filter(Boolean) as string[];
        const moreProducts = await prisma.product.findMany({
          where: {
            status: "ACTIVE",
            id: { notIn: existingIds },
          },
          include: {
            variants: {
              select: { price: true, images: true },
            },
            category: { select: { name: true } },
          },
          take: 4 - dbProducts.length,
          orderBy: { createdAt: "desc" },
        });
        dbProducts = [...dbProducts, ...moreProducts];
      }
    }
  } catch (err) {
    console.error("[RELATED_PRODUCTS] Database error:", err);
  }

  // 3. Guaranteed Pulsar Fashion fallback products from inventory
  const filteredDemos = ALL_PRODUCTS.filter((p) => p.id !== currentProductId);
  const sameCategoryDemos = filteredDemos.filter(
    (p) => p.category?.toLowerCase().includes(categorySlug.toLowerCase()) || categorySlug.includes("polo")
  );
  const fallbackList = sameCategoryDemos.length >= 4 
    ? sameCategoryDemos.slice(0, 4)
    : [...sameCategoryDemos, ...filteredDemos.filter((p) => !sameCategoryDemos.includes(p))].slice(0, 4);

  const relatedProducts: ProductCardProps[] =
    dbProducts.length > 0
      ? dbProducts.map((p: any, i: number) => {
          const prices = p.variants?.map((v: any) => Number(v.price)) || [];
          const minPrice = prices.length > 0 ? Math.min(...prices) : Number(p.basePrice || 750);

          const firstVariant: any = p.variants?.[0];
          const variantImages = firstVariant?.images;
          const image =
            Array.isArray(variantImages) && variantImages.length > 0
              ? (variantImages[0] as string)
              : (fallbackList[i]?.image || `/assets/asset-${(i % 10) + 1}.jpg`);

          return {
            id: p.id,
            name: p.name,
            slug: p.slug,
            price: minPrice,
            compareAtPrice: Math.round(minPrice * 1.3),
            image,
            category: p.category?.name || "Pulsar Streetwear",
            isNew: false,
          };
        })
      : fallbackList;

  return (
    <section className="mt-16 md:mt-20 border-t border-border/40 pt-12">
      <SectionHeading
        title="You May Also Like"
        subtitle="More from Pulsar Fashion Collection"
        viewAllHref={categorySlug ? `/categories/${categorySlug}` : "/shop"}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
