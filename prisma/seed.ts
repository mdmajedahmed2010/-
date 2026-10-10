/**
 * PULSAR FASHION — Database Seed Script
 * Authentic Streetwear, Viral Polo, Drop Shoulder T-Shirts & Wholesale Catalog
 * Grounded on Facebook Page: https://www.facebook.com/profile.php?id=61561618804910
 *
 * Usage: npx tsx prisma/seed.ts
 */

import "dotenv/config";
import { prisma } from "../lib/db";

// 1. Official Categories
const CATEGORIES = [
  {
    name: "Viral Polo Shirts",
    slug: "polo-shirts",
    image: "/assets/762629974_122198626190387293_2940269425792302263_n.jpg",
    sortOrder: 1,
  },
  {
    name: "Drop Shoulder T-Shirts",
    slug: "drop-shoulder",
    image: "/assets/641214084_122183932028387293_6534194091002887335_n.jpg",
    sortOrder: 2,
  },
  {
    name: "Club & Street Jerseys",
    slug: "jerseys",
    image: "/assets/731105049_122194961630387293_348726503253343549_n.jpg",
    sortOrder: 3,
  },
  {
    name: "Hoodies & Winter Wear",
    slug: "hoodies",
    image: "/assets/banner.jpg",
    sortOrder: 4,
  },
  {
    name: "Wholesale Lots (পাইকারি লট)",
    slug: "wholesale",
    image: "/assets/762944474_122198626388387293_7980106767827400939_n.jpg",
    sortOrder: 5,
  },
];

// 2. Official Products
const PRODUCTS = [
  {
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Slate Blue",
    slug: "viral-givenchy-dual-tone-polo-slate-blue",
    categorySlug: "polo-shirts",
    description:
      "Exclusive viral dual-tone luxury polo shirt in Slate Blue with white contrast raglan sleeves and piped collar. Crafted from premium 220 GSM combed pique cotton with embroidered chest emblem, ribbed cuffs, and custom buttons. Perfect for semi-formal, smart casual, and streetwear styling.",
    basePrice: 750,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 38-40)", color: "Slate Blue", price: 750, stock: 45, images: ["/assets/762629974_122198626190387293_2940269425792302263_n.jpg"] },
      { size: "L (Chest 40-42)", color: "Slate Blue", price: 750, stock: 50, images: ["/assets/762629974_122198626190387293_2940269425792302263_n.jpg"] },
      { size: "XL (Chest 42-44)", color: "Slate Blue", price: 750, stock: 35, images: ["/assets/762629974_122198626190387293_2940269425792302263_n.jpg"] },
      { size: "XXL (Chest 44-46)", color: "Slate Blue", price: 750, stock: 20, images: ["/assets/762629974_122198626190387293_2940269425792302263_n.jpg"] },
    ],
  },
  {
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Jet Black",
    slug: "viral-givenchy-dual-tone-polo-jet-black",
    categorySlug: "polo-shirts",
    description:
      "Viral dual-tone luxury polo shirt in Jet Black with crisp white sleeve panels and piped shoulders. High-grade breathable pique cotton, 3-button placket, and embroidered chest monogram. Designed for elevated street aesthetics.",
    basePrice: 750,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 38-40)", color: "Jet Black", price: 750, stock: 40, images: ["/assets/762944474_122198626388387293_7980106767827400939_n.jpg"] },
      { size: "L (Chest 40-42)", color: "Jet Black", price: 750, stock: 60, images: ["/assets/762944474_122198626388387293_7980106767827400939_n.jpg"] },
      { size: "XL (Chest 42-44)", color: "Jet Black", price: 750, stock: 45, images: ["/assets/762944474_122198626388387293_7980106767827400939_n.jpg"] },
    ],
  },
  {
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Crimson Maroon",
    slug: "viral-givenchy-dual-tone-polo-crimson-maroon",
    categorySlug: "polo-shirts",
    description:
      "Sophisticated Crimson Maroon colorway with contrast white sleeve accents. Premium soft pique texture with durable color fastness.",
    basePrice: 750,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 38-40)", color: "Maroon", price: 750, stock: 30, images: ["/assets/763028595_122198626322387293_3648788280317591134_n.jpg"] },
      { size: "L (Chest 40-42)", color: "Maroon", price: 750, stock: 40, images: ["/assets/763028595_122198626322387293_3648788280317591134_n.jpg"] },
      { size: "XL (Chest 42-44)", color: "Maroon", price: 750, stock: 25, images: ["/assets/763028595_122198626322387293_3648788280317591134_n.jpg"] },
    ],
  },
  {
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Cream Ivory",
    slug: "viral-givenchy-dual-tone-polo-cream-ivory",
    categorySlug: "polo-shirts",
    description:
      "Minimalist and clean Cream Ivory luxury polo with black contrast sleeve accents and black placket buttons. Supreme comfort and versatile styling.",
    basePrice: 750,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 38-40)", color: "Cream", price: 750, stock: 35, images: ["/assets/763103873_122198626208387293_2690028295533679408_n.jpg"] },
      { size: "L (Chest 40-42)", color: "Cream", price: 750, stock: 45, images: ["/assets/763103873_122198626208387293_2690028295533679408_n.jpg"] },
      { size: "XL (Chest 42-44)", color: "Cream", price: 750, stock: 30, images: ["/assets/763103873_122198626208387293_2690028295533679408_n.jpg"] },
    ],
  },
  {
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Mocha Brown",
    slug: "viral-givenchy-dual-tone-polo-mocha-brown",
    categorySlug: "polo-shirts",
    description:
      "Earthy Mocha Brown luxury polo with white contrast sleeves. Premium washed cotton pique with high structural retention.",
    basePrice: 750,
    status: "ACTIVE",
    isFeatured: false,
    variants: [
      { size: "M (Chest 38-40)", color: "Mocha Brown", price: 750, stock: 25, images: ["/assets/764800416_122198626328387293_6555109746919129146_n.jpg"] },
      { size: "L (Chest 40-42)", color: "Mocha Brown", price: 750, stock: 35, images: ["/assets/764800416_122198626328387293_6555109746919129146_n.jpg"] },
      { size: "XL (Chest 42-44)", color: "Mocha Brown", price: 750, stock: 20, images: ["/assets/764800416_122198626328387293_6555109746919129146_n.jpg"] },
    ],
  },
  {
    name: "Savage Mode Heavy Cotton Drop Shoulder T-Shirt - Jet Black",
    slug: "savage-mode-drop-shoulder-tshirt-jet-black",
    categorySlug: "drop-shoulder",
    description:
      "Heavyweight 240+ GSM 100% compact combed cotton oversized drop-shoulder t-shirt. Features 'SAVAGE MODE Always - RUTHLESS AMBITION IN EVERY MOVE' high-density typography back print and chest emblem with Represent tag. Pre-shrunk and bio-washed.",
    basePrice: 550,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 42)", color: "Jet Black", price: 550, stock: 50, images: ["/assets/641214084_122183932028387293_6534194091002887335_n.jpg", "/assets/641334950_122183931998387293_5018513782419341486_n.jpg"] },
      { size: "L (Chest 44)", color: "Jet Black", price: 550, stock: 65, images: ["/assets/641214084_122183932028387293_6534194091002887335_n.jpg", "/assets/641334950_122183931998387293_5018513782419341486_n.jpg"] },
      { size: "XL (Chest 46)", color: "Jet Black", price: 550, stock: 40, images: ["/assets/641214084_122183932028387293_6534194091002887335_n.jpg", "/assets/641334950_122183931998387293_5018513782419341486_n.jpg"] },
    ],
  },
  {
    name: "Savage Mode Heavy Cotton Drop Shoulder T-Shirt - Arctic White",
    slug: "savage-mode-drop-shoulder-tshirt-arctic-white",
    categorySlug: "drop-shoulder",
    description:
      "Crisp Arctic White edition of the Savage Mode drop shoulder t-shirt. High-density black & crimson back graphics, thick ribbed neckline, relaxed oversized streetwear fit.",
    basePrice: 550,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 42)", color: "Arctic White", price: 550, stock: 40, images: ["/assets/641520138_122183932010387293_6559436473966397693_n.jpg"] },
      { size: "L (Chest 44)", color: "Arctic White", price: 550, stock: 55, images: ["/assets/641520138_122183932010387293_6559436473966397693_n.jpg"] },
      { size: "XL (Chest 46)", color: "Arctic White", price: 550, stock: 35, images: ["/assets/641520138_122183932010387293_6559436473966397693_n.jpg"] },
    ],
  },
  {
    name: "Savage Mode Heavy Cotton Drop Shoulder T-Shirt - Chocolate Brown",
    slug: "savage-mode-drop-shoulder-tshirt-chocolate-brown",
    categorySlug: "drop-shoulder",
    description:
      "Rich Chocolate Brown drop-shoulder t-shirt with signature Savage Mode chest graphics and Represent neck branding. 240 GSM heavy jersey cotton.",
    basePrice: 550,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 42)", color: "Chocolate Brown", price: 550, stock: 30, images: ["/assets/641613557_122183932058387293_4473040010923715295_n.jpg"] },
      { size: "L (Chest 44)", color: "Chocolate Brown", price: 550, stock: 45, images: ["/assets/641613557_122183932058387293_4473040010923715295_n.jpg"] },
      { size: "XL (Chest 46)", color: "Chocolate Brown", price: 550, stock: 25, images: ["/assets/641613557_122183932058387293_4473040010923715295_n.jpg"] },
    ],
  },
  {
    name: "Brasil CBF #10 Streetwear Drop Shoulder Jersey - Black Edition",
    slug: "brasil-cbf-10-streetwear-jersey-black",
    categorySlug: "jerseys",
    description:
      "Iconic Brasil #10 drop-shoulder streetwear football jersey. Black edition with white contrast shoulder bands, embroidered 5-star Brasil CBF shield, and bold #10 graphics. Athletic interlock performance blend.",
    basePrice: 650,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 40)", color: "Black", price: 650, stock: 40, images: ["/assets/731105049_122194961630387293_348726503253343549_n.jpg"] },
      { size: "L (Chest 42)", color: "Black", price: 650, stock: 50, images: ["/assets/731105049_122194961630387293_348726503253343549_n.jpg"] },
      { size: "XL (Chest 44)", color: "Black", price: 650, stock: 30, images: ["/assets/731105049_122194961630387293_348726503253343549_n.jpg"] },
    ],
  },
  {
    name: "Represent Owners' Club Barcelona Spotify Streetwear Hoodie - Khaki",
    slug: "represent-owners-club-barcelona-hoodie-khaki",
    categorySlug: "hoodies",
    description:
      "Luxury streetwear fleece hoodie featuring Barcelona crest, Spotify chest logo, and dual white sleeve stripes. Heavyweight brushed cotton fleece with kangaroo pocket, metal tipped drawstrings, and custom relaxed cut.",
    basePrice: 1250,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "M (Chest 42)", color: "Khaki", price: 1250, stock: 25, images: ["/assets/banner.jpg"] },
      { size: "L (Chest 44)", color: "Khaki", price: 1250, stock: 35, images: ["/assets/banner.jpg"] },
      { size: "XL (Chest 46)", color: "Khaki", price: 1250, stock: 20, images: ["/assets/banner.jpg"] },
    ],
  },
  {
    name: "Viral Dual-Tone Polo Wholesale Lot (6 Pcs Assorted Colors)",
    slug: "viral-polo-wholesale-lot-6pcs",
    categorySlug: "wholesale",
    description:
      "Official wholesale lot of 6 viral dual-tone polo shirts in assorted high-demand colorways (Slate Blue, Black, Maroon, Cream, Mocha). Factory wholesale price for retailers and e-commerce stores across Bangladesh.",
    basePrice: 2520,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "Assorted (M, L, XL)", color: "Multi Colorway Lot", price: 2520, stock: 100, images: ["/assets/762944474_122198626388387293_7980106767827400939_n.jpg"] },
    ],
  },
  {
    name: "Savage Mode Drop Shoulder T-Shirt Wholesale Lot (12 Pcs Pack)",
    slug: "savage-mode-wholesale-lot-12pcs",
    categorySlug: "wholesale",
    description:
      "Wholesale master bundle of 12 pcs Savage Mode 240 GSM drop shoulder t-shirts in assorted black, white, and mocha colorways. Complete wholesale margin for shop owners.",
    basePrice: 3840,
    status: "ACTIVE",
    isFeatured: true,
    variants: [
      { size: "Assorted (M, L, XL)", color: "Assorted 12 Pcs", price: 3840, stock: 80, images: ["/assets/641214084_122183932028387293_6534194091002887335_n.jpg"] },
    ],
  },
];

// 3. Official Coupons
const COUPONS = [
  { code: "PULSAR10", type: "PERCENTAGE", value: 10, minOrder: 1000 },
  { code: "PULSAR20", type: "PERCENTAGE", value: 20, minOrder: 3000 },
  { code: "STREETWEAR15", type: "PERCENTAGE", value: 15, minOrder: 1500 },
  { code: "WELCOME", type: "FIXED", value: 100, minOrder: 700 },
  { code: "WHOLESALE500", type: "FIXED", value: 500, minOrder: 5000 },
];

async function main() {
  console.log("🚀 Starting Pulsar Fashion Production Database Seeding...");

  // 1. Clean old data safely
  console.log("🧹 Cleaning old demo data...");
  try {
    await prisma.orderItem.deleteMany({});
    await prisma.productVariant.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.category.deleteMany({});
    console.log("  ✓ Old data cleared successfully");
  } catch (err) {
    console.log("  → Skip cleaning or table empty");
  }

  // 2. Seed Categories
  console.log("\n📁 Seeding Pulsar Fashion categories...");
  const categoryMap = new Map<string, string>();

  for (const cat of CATEGORIES) {
    const category = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, image: cat.image, sortOrder: cat.sortOrder },
      create: {
        name: cat.name,
        slug: cat.slug,
        image: cat.image,
        sortOrder: cat.sortOrder,
        isActive: true,
      },
    });
    categoryMap.set(cat.slug, category.id);
    console.log(`  ✓ ${cat.name}`);
  }

  // 3. Seed Products with Variants
  console.log("\n📦 Seeding Pulsar Fashion authentic products...");
  let productCount = 0;
  let variantCount = 0;

  for (const prod of PRODUCTS) {
    const categoryId = categoryMap.get(prod.categorySlug);
    if (!categoryId) {
      console.error(`  ✗ Category not found: ${prod.categorySlug}`);
      continue;
    }

    const product = await prisma.product.create({
      data: {
        name: prod.name,
        slug: prod.slug,
        description: prod.description,
        basePrice: prod.basePrice,
        categoryId,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        status: prod.status as any,
        isFeatured: prod.isFeatured || false,
      },
    });

    for (const variant of prod.variants) {
      const skuBase = prod.slug.substring(0, 8).toUpperCase().replace(/-/g, "");
      const skuSuffix = `${(variantCount + 1).toString().padStart(3, "0")}`;
      const sku = `PLS-${skuBase}-${skuSuffix}`;

      await prisma.productVariant.create({
        data: {
          productId: product.id,
          sku,
          size: variant.size,
          color: variant.color,
          price: variant.price,
          stock: variant.stock,
          images: variant.images,
          isActive: true,
        },
      });
      variantCount++;
    }

    productCount++;
    console.log(`  ✓ ${prod.name}`);
  }

  // 4. Seed Coupons
  console.log("\n🎟️ Seeding Pulsar Fashion coupons...");
  for (const coupon of COUPONS) {
    await prisma.coupon.upsert({
      where: { code: coupon.code },
      update: { value: coupon.value, minOrder: coupon.minOrder },
      create: {
        code: coupon.code,
        type: coupon.type as any,
        value: coupon.value,
        minOrder: coupon.minOrder,
        isActive: true,
      },
    });
    console.log(`  ✓ ${coupon.code}`);
  }

  // 5. Site Settings
  console.log("\n⚙️ Seeding Site Settings for Pulsar Fashion...");
  const settings = [
    { key: "store_name", value: "Pulsar Fashion" },
    { key: "store_tagline", value: "Elevate Your Streetwear | Premium Wholesale & Retail Fashion Hub" },
    { key: "store_logo", value: "/assets/logo.jpg" },
    { key: "store_favicon", value: "/assets/logo.jpg" },
    { key: "store_phone", value: "01600911522" },
    { key: "store_email", value: "pulsarfashionbd@gmail.com" },
    { key: "store_address", value: "Shop no: 85, Ground Floor, Nagor Plaza, Fulbaria, Gulistan, Dhaka" },
    { key: "shipping_dhaka", value: "80" },
    { key: "shipping_outside", value: "150" },
    { key: "social_facebook", value: "https://www.facebook.com/profile.php?id=61561618804910" },
  ];

  for (const s of settings) {
    try {
      await prisma.siteSetting.upsert({
        where: { key: s.key },
        update: { value: s.value },
        create: { key: s.key, value: s.value },
      });
    } catch {}
  }

  // 6. Ensure Admin User
  console.log("\n👤 Verifying admin account...");
  const bcrypt = await import("bcryptjs");
  const adminEmail = "admin@pulsarfashionbd.com";
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("Admin@2026", 12);
    await prisma.user.create({
      data: {
        name: "Pulsar Fashion Admin",
        email: adminEmail,
        passwordHash: hashedPassword,
        role: "SUPER_ADMIN",
      },
    });
    console.log(`  ✓ Admin account ready (${adminEmail})`);
  }

  console.log(`\n✅ Pulsar Fashion Seed Completed Successfully!`);
  console.log(`   Categories: ${CATEGORIES.length}`);
  console.log(`   Products: ${productCount}`);
  console.log(`   Variants: ${variantCount}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
