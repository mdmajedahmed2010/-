import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const cats = await prisma.category.findMany({
    select: { name: true, slug: true, sortOrder: true },
    orderBy: { sortOrder: "asc" },
  });
  console.log("=== CATEGORIES IN DB ===");
  cats.forEach((c) => console.log(`  [${c.sortOrder}] ${c.name} (${c.slug})`));
  console.log("Total categories:", cats.length);

  const prodCount = await prisma.product.count();
  console.log("=== PRODUCT COUNT ===", prodCount);

  const prods = await prisma.product.findMany({
    select: { name: true, status: true, category: { select: { name: true } } },
    take: 5,
    orderBy: { createdAt: "desc" },
  });
  console.log("=== LATEST 5 PRODUCTS ===");
  prods.forEach((p) =>
    console.log(`  ${p.name} | ${p.category?.name} | ${p.status}`)
  );
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
