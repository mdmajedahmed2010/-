/**
 * PULSAR FASHION — Product & Category Data Catalog
 * Authenticated against Facebook Page (https://www.facebook.com/profile.php?id=61561618804910)
 * and High-Resolution Assets in /assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Categories
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Viral Polo Shirts",
    slug: "polo-shirts",
    description: "Viral dual-tone luxury polo shirts with contrast sleeves and pique cotton",
    image: "/assets/762629974_122198626190387293_2940269425792302263_n.jpg",
    productCount: 5,
  },
  {
    name: "Drop Shoulder T-Shirts",
    slug: "drop-shoulder",
    description: "Heavyweight 240+ GSM oversized drop-shoulder tees with Savage Mode graphics",
    image: "/assets/641214084_122183932028387293_6534194091002887335_n.jpg",
    productCount: 3,
  },
  {
    name: "Club & Street Jerseys",
    slug: "jerseys",
    description: "Premium football & streetwear oversized jerseys featuring iconic club editions",
    image: "/assets/731105049_122194961630387293_348726503253343549_n.jpg",
    productCount: 2,
  },
  {
    name: "Hoodies & Winter Wear",
    slug: "hoodies",
    description: "Represent Owners' Club luxury fleece heavyweight street hoodies",
    image: "/assets/banner.jpg",
    productCount: 3,
  },
  {
    name: "Wholesale Lots (পাইকারি লট)",
    slug: "wholesale",
    description: "Factory direct wholesale bundle deals for retailers & resellers across Bangladesh",
    image: "/assets/762944474_122198626388387293_7980106767827400939_n.jpg",
    productCount: 3,
  },
];

// ═══════════════════════════════════════════
// All Products (Pulsar Fashion Official Inventory)
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  // --- VIRAL GIVENCHY DUAL-TONE POLO SHIRTS ---
  {
    id: "p1",
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Slate Blue",
    slug: "viral-givenchy-dual-tone-polo-slate-blue",
    price: 750,
    compareAtPrice: 990,
    image: "/assets/762629974_122198626190387293_2940269425792302263_n.jpg",
    category: "Viral Polo Shirts",
    isNew: true,
  },
  {
    id: "p2",
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Jet Black",
    slug: "viral-givenchy-dual-tone-polo-jet-black",
    price: 750,
    compareAtPrice: 990,
    image: "/assets/762944474_122198626388387293_7980106767827400939_n.jpg",
    category: "Viral Polo Shirts",
    isNew: true,
  },
  {
    id: "p3",
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Crimson Maroon",
    slug: "viral-givenchy-dual-tone-polo-crimson-maroon",
    price: 750,
    compareAtPrice: 990,
    image: "/assets/763028595_122198626322387293_3648788280317591134_n.jpg",
    category: "Viral Polo Shirts",
  },
  {
    id: "p4",
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Cream Ivory",
    slug: "viral-givenchy-dual-tone-polo-cream-ivory",
    price: 750,
    compareAtPrice: 990,
    image: "/assets/763103873_122198626208387293_2690028295533679408_n.jpg",
    category: "Viral Polo Shirts",
    isNew: true,
  },
  {
    id: "p5",
    name: "Viral Givenchy Dual-Tone Luxury Polo Shirt - Mocha Brown",
    slug: "viral-givenchy-dual-tone-polo-mocha-brown",
    price: 750,
    compareAtPrice: 990,
    image: "/assets/764800416_122198626328387293_6555109746919129146_n.jpg",
    category: "Viral Polo Shirts",
  },

  // --- DROP SHOULDER TEES (SAVAGE MODE) ---
  {
    id: "p6",
    name: "Savage Mode Heavy Cotton Drop Shoulder T-Shirt - Jet Black",
    slug: "savage-mode-drop-shoulder-tshirt-jet-black",
    price: 550,
    compareAtPrice: 750,
    image: "/assets/641214084_122183932028387293_6534194091002887335_n.jpg",
    category: "Drop Shoulder T-Shirts",
    isNew: true,
  },
  {
    id: "p7",
    name: "Savage Mode Heavy Cotton Drop Shoulder T-Shirt - Arctic White",
    slug: "savage-mode-drop-shoulder-tshirt-arctic-white",
    price: 550,
    compareAtPrice: 750,
    image: "/assets/641520138_122183932010387293_6559436473966397693_n.jpg",
    category: "Drop Shoulder T-Shirts",
    isNew: true,
  },
  {
    id: "p8",
    name: "Savage Mode Heavy Cotton Drop Shoulder T-Shirt - Chocolate Brown",
    slug: "savage-mode-drop-shoulder-tshirt-chocolate-brown",
    price: 550,
    compareAtPrice: 750,
    image: "/assets/641613557_122183932058387293_4473040010923715295_n.jpg",
    category: "Drop Shoulder T-Shirts",
  },

  // --- CLUB & STREET JERSEYS ---
  {
    id: "p9",
    name: "Brasil CBF #10 Streetwear Drop Shoulder Jersey - Black Edition",
    slug: "brasil-cbf-10-streetwear-jersey-black",
    price: 650,
    compareAtPrice: 850,
    image: "/assets/731105049_122194961630387293_348726503253343549_n.jpg",
    category: "Club & Street Jerseys",
    isNew: true,
  },
  {
    id: "p10",
    name: "Savage Ambition Streetwear Graphic Tee - Front Chest Edition",
    slug: "savage-ambition-streetwear-graphic-tee-front",
    price: 550,
    compareAtPrice: 750,
    image: "/assets/641334950_122183931998387293_5018513782419341486_n.jpg",
    category: "Drop Shoulder T-Shirts",
  },

  // --- HOODIES & WINTER WEAR ---
  {
    id: "p11",
    name: "Represent Owners' Club Barcelona Spotify Streetwear Hoodie - Khaki",
    slug: "represent-owners-club-barcelona-hoodie-khaki",
    price: 1250,
    compareAtPrice: 1650,
    image: "/assets/banner.jpg",
    category: "Hoodies & Winter Wear",
    isNew: true,
  },
  {
    id: "p12",
    name: "Represent Owners' Club Brooklyn Nets Trefoil Hoodie - Deep Navy",
    slug: "represent-owners-club-brooklyn-hoodie-navy",
    price: 1250,
    compareAtPrice: 1650,
    image: "/assets/banner.jpg",
    category: "Hoodies & Winter Wear",
  },
  {
    id: "p13",
    name: "Represent Owners' Club Real Madrid Emirates Hoodie - Maroon",
    slug: "represent-owners-club-real-madrid-hoodie-maroon",
    price: 1250,
    compareAtPrice: 1650,
    image: "/assets/banner.jpg",
    category: "Hoodies & Winter Wear",
    isNew: true,
  },

  // --- WHOLESALE BUNDLES ---
  {
    id: "p14",
    name: "Viral Dual-Tone Polo Wholesale Lot (6 Pcs Assorted Colors)",
    slug: "viral-polo-wholesale-lot-6pcs",
    price: 2520,
    compareAtPrice: 3600,
    image: "/assets/762944474_122198626388387293_7980106767827400939_n.jpg",
    category: "Wholesale Lots (পাইকারি লট)",
    isNew: true,
  },
  {
    id: "p15",
    name: "Savage Mode Drop Shoulder T-Shirt Wholesale Lot (12 Pcs Pack)",
    slug: "savage-mode-wholesale-lot-12pcs",
    price: 3840,
    compareAtPrice: 5400,
    image: "/assets/641214084_122183932028387293_6534194091002887335_n.jpg",
    category: "Wholesale Lots (পাইকারি লট)",
  },
  {
    id: "p16",
    name: "Pulsar Streetwear Retail Starter Bundle (20 Pcs Mix Lot)",
    slug: "pulsar-streetwear-retail-starter-bundle-20pcs",
    price: 7500,
    compareAtPrice: 11000,
    image: "/assets/762629974_122198626190387293_2940269425792302263_n.jpg",
    category: "Wholesale Lots (পাইকারি লট)",
    isNew: true,
  },
];

// ═══════════════════════════════════════════
// Filtered Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 6);
export const POLO_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Viral Polo Shirts");
export const DROP_SHOULDER_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Drop Shoulder T-Shirts");
export const JERSEY_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Club & Street Jerseys");
export const HOODIE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Hoodies & Winter Wear");
export const WHOLESALE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Wholesale Lots (পাইকারি লট)");

// Get products by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "viral-polo-shirts":
    case "polo-shirts":
    case "polo":
      return POLO_PRODUCTS;
    case "drop-shoulder-t-shirts":
    case "drop-shoulder":
    case "t-shirt":
    case "t-shirts":
      return DROP_SHOULDER_PRODUCTS;
    case "club-street-jerseys":
    case "jerseys":
    case "jersey":
      return JERSEY_PRODUCTS;
    case "hoodies-winter-wear":
    case "hoodies":
    case "winter":
      return HOODIE_PRODUCTS;
    case "wholesale-lots":
    case "wholesale":
      return WHOLESALE_PRODUCTS;
    case "new-arrivals":
      return NEW_ARRIVALS;
    case "featured":
      return FEATURED_PRODUCTS;
    default:
      return ALL_PRODUCTS;
  }
}
