/**
 * PULSAR FASHION — Application Constants
 * Streetwear & Premium Men's Apparel (Wholesale & Retail Hub)
 * Showroom: Shop #85 (Ground Floor), Nagor Plaza, Fulbaria, Gulistan, Dhaka
 */

// Delivery Charges (BDT)
export const DELIVERY_CHARGE = {
  DHAKA_INSIDE: 80,
  OUTSIDE_DHAKA: 150,
} as const;

// Order Number Prefix
export const ORDER_PREFIX = "PLS";

// Product Status
export const PRODUCT_STATUS = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  ARCHIVED: "ARCHIVED",
} as const;

// Order Status
export const ORDER_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
  RETURNED: "RETURNED",
  REFUNDED: "REFUNDED",
} as const;

// Payment Methods
export const PAYMENT_METHOD = {
  COD: "COD",
  BKASH: "BKASH",
  NAGAD: "NAGAD",
  SSLCOMMERZ: "SSLCOMMERZ",
} as const;

// Rate Limiting
export const RATE_LIMITS = {
  LOGIN: { requests: 5, window: "15m" },
  REGISTER: { requests: 3, window: "1h" },
  PASSWORD_RESET: { requests: 3, window: "1h" },
  CHECKOUT: { requests: 10, window: "1m" },
  API: { requests: 100, window: "1m" },
  ADMIN: { requests: 50, window: "1m" },
} as const;

// Image Upload Limits
export const UPLOAD_LIMITS = {
  MAX_SIZE_MB: 5,
  MAX_SIZE_BYTES: 5 * 1024 * 1024,
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
  MAX_DIMENSION: 4000,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 48,
} as const;

// Session & Auth
export const AUTH = {
  ACCESS_TOKEN_EXPIRY: 15 * 60, // 15 minutes in seconds
  REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60, // 7 days in seconds
  ADMIN_SESSION_TIMEOUT: 30 * 60, // 30 minutes in seconds
  BCRYPT_SALT_ROUNDS: 12,
  PASSWORD_RESET_EXPIRY: 60 * 60, // 1 hour in seconds
} as const;

// Business Info — Pulsar Fashion
export const BUSINESS = {
  NAME: "Pulsar Fashion",
  TAGLINE: "Elevate Your Streetwear | Premium Wholesale & Retail Fashion Hub",
  PHONE: "01600911522",
  HOTLINE_DISPLAY: "01600911522, 01936581870",
  WHATSAPP: "01600911522",
  WHATSAPP_LINK: "https://wa.me/8801600911522",
  EMAIL: "pulsarfashionbd@gmail.com",
  ADDRESS: "Shop no: 85, Ground Floor, Nagor Plaza, Fulbaria, Gulistan, Dhaka",
  BRANCH_ADDRESS: "Shop no: 67 (1st Floor) & Shop 85 (Ground Floor), Nagor Plaza, Fulbaria, Gulistan, Dhaka",
  MARKET: "Nagor Plaza, Fulbaria, Gulistan, Dhaka-1000",
  FACEBOOK: "https://www.facebook.com/profile.php?id=61561618804910",
  TIKTOK: "https://www.tiktok.com",
  INSTAGRAM: "https://www.instagram.com",
} as const;

// Currency
export const CURRENCY = {
  CODE: "BDT",
  SYMBOL: "৳",
  LOCALE: "en-BD",
} as const;

// Coupon Codes
export const COUPON_CODES: Record<
  string,
  { type: "percent" | "flat"; value: number; label: string }
> = {
  PULSAR10: { type: "percent", value: 10, label: "10% off your order" },
  PULSAR20: { type: "percent", value: 20, label: "20% special discount" },
  STREETWEAR15: { type: "percent", value: 15, label: "15% Streetwear Drop Discount" },
  WELCOME: { type: "flat", value: 100, label: "৳100 Welcome Discount" },
  WHOLESALE500: { type: "flat", value: 500, label: "৳500 Bulk Lot Discount" },
  FLAT200: { type: "flat", value: 200, label: "৳200 flat discount" },
} as const;
