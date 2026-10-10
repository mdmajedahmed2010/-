import { prisma, serializeDecimals } from "@/lib/db";
import { HomeUI } from "./home-client";

export const dynamic = "force-dynamic"; // Always fresh - no cache

async function getCategories() {
  try {
    return await prisma.category.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: { products: true },
        },
      },
      orderBy: { sortOrder: "asc" },
      take: 12,
    });
  } catch (err) {
    console.error("[HOME] Database error fetching categories:", err);
    return [];
  }
}

async function getProducts() {
  try {
    return await prisma.product.findMany({
      where: { status: "ACTIVE", deletedAt: null },
      take: 8,
      select: {
        id: true,
        name: true,
        slug: true,
        basePrice: true,
        createdAt: true,
        category: {
          select: { name: true, slug: true },
        },
        variants: {
          where: { isActive: true },
          take: 1,
          select: {
            price: true,
            images: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.error("[HOME] Database error fetching products:", err);
    return [];
  }
}

async function getBanners() {
  try {
    return await prisma.homepageSection.findMany({
      where: { isActive: true, type: "hero_banner" },
      orderBy: { sortOrder: "asc" },
    });
  } catch (err) {
    console.error("[HOME] Database error fetching banners:", err);
    return [];
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getCollections(): Promise<any[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = prisma as any;
    return await db.collection.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
      take: 6,
    });
  } catch (err) {
    console.error("[HOME] Database error fetching collections:", err);
    return [];
  }
}

export default async function HomePage() {
  const [categories, products, banners, collections] = await Promise.all([
    getCategories(),
    getProducts(),
    getBanners(),
    getCollections(),
  ]);

  return (
    <HomeUI
      dbCategories={serializeDecimals(categories)}
      dbProducts={serializeDecimals(products)}
      dbBanners={serializeDecimals(banners)}
      dbCollections={serializeDecimals(collections)}
    />
  );
}
