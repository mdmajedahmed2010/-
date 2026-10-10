/**
 * BIBAZ — Related Products Section
 * "You may also like" — same category products
 * SOP §২ — Frontend Plan F3.12
 *
 * TODO: Replace with server action query (Phase 3)
 */

import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard, type ProductCardProps } from "./product-card";
import { prisma } from "@/lib/db";

interface RelatedProductsProps {
  categorySlug: string;
  currentProductId?: string;
}

export async function RelatedProducts({ categorySlug, currentProductId }: RelatedProductsProps) {
  let dbProducts: any[] = [];

  try {
    // 1. First attempt: Same category products
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

    // 2. Second attempt: Backfill with any other active products if fewer than 4 found
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
  } catch (err) {
    console.error("[RELATED_PRODUCTS] Database error:", err);
  }

  // 3. Fallback products if DB is unreachable or empty
  const fallbackProducts: ProductCardProps[] = [
    {
      id: "related-1",
      name: "Self Print Shimmery Velvet Kaftan",
      slug: "self-print-shimmery-velvet-kaftan",
      price: 7550,
      image: "/images/products/placeholder.svg",
      category: "Kaftan",
    },
    {
      id: "related-2",
      name: "Mid Length Tye Dye Crape Kaftan",
      slug: "mid-length-tye-dye-crape-kaftan",
      price: 5550,
      image: "/images/products/placeholder.svg",
      category: "Kaftan",
    },
    {
      id: "related-3",
      name: "Royal Zari Embroidered Silk Kaftan",
      slug: "royal-zari-embroidered-silk-kaftan",
      price: 8900,
      image: "/images/products/placeholder.svg",
      category: "Kaftan",
    },
    {
      id: "related-4",
      name: "Casual Tye Dye Crape Kaftan",
      slug: "casual-tye-dye-crape-kaftan",
      price: 4850,
      image: "/images/products/placeholder.svg",
      category: "Kaftan",
    },
  ];

  const relatedProducts: ProductCardProps[] =
    dbProducts.length > 0
      ? dbProducts.map((p: any) => {
          const prices = p.variants?.map((v: any) => Number(v.price)) || [];
          const minPrice = prices.length > 0 ? Math.min(...prices) : Number(p.basePrice || 2500);

          const firstVariant: any = p.variants?.[0];
          const variantImages = firstVariant?.images;
          const image =
            Array.isArray(variantImages) && variantImages.length > 0
              ? (variantImages[0] as string)
              : "/images/products/placeholder.svg";

          return {
            id: p.id,
            name: p.name,
            slug: p.slug,
            price: minPrice,
            image,
            category: p.category?.name || "Uncategorized",
            isNew: false,
          };
        })
      : fallbackProducts;

  return (
    <section className="mt-16 md:mt-20 border-t border-[#c9a96e]/20 pt-12">
      <SectionHeading
        title="You May Also Like"
        subtitle="More from this collection"
        viewAllHref={categorySlug ? `/collections/${categorySlug}` : "/collections"}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
