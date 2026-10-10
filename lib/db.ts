/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * BIBAZ — Prisma Client Singleton
 */

import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

import { ALL_PRODUCTS, CATEGORIES } from "@/lib/demo-data";

function createDummyPrisma() {
  const dummy: any = new Proxy({} as any, {
    get(target, prop) {
      if (typeof prop === "symbol") return undefined;

      // Prisma special methods
      if (
        prop === "$connect" ||
        prop === "$disconnect" ||
        prop === "$use" ||
        prop === "$transaction"
      ) {
        return async (args?: any) => {
          if (typeof args === "function") {
            return await args(dummy);
          }
          return args;
        };
      }
      if (prop === "$on") {
        return () => {};
      }
      if (prop.startsWith("$")) {
        return async () => null;
      }

      // Return a nested proxy for model operations (e.g. prisma.user.findMany)
      return new Proxy({} as any, {
        get(modelTarget, modelProp) {
          if (typeof modelProp === "symbol") return undefined;

          // Return an async function for any model method
          return async (...args: any[]) => {
            const model = String(prop).toLowerCase();
            const method = String(modelProp);

            if (model === "product") {
              if (method === "findMany") return ALL_PRODUCTS;
              if (method === "findUnique" || method === "findFirst") {
                const slug = args[0]?.where?.slug;
                const id = args[0]?.where?.id;
                return ALL_PRODUCTS.find((p) => (slug && p.slug === slug) || (id && p.id === id)) || ALL_PRODUCTS[0];
              }
              if (method === "count") return ALL_PRODUCTS.length;
            }

            if (model === "category") {
              if (method === "findMany") return CATEGORIES;
              if (method === "findUnique" || method === "findFirst") {
                const slug = args[0]?.where?.slug;
                return CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];
              }
              if (method === "count") return CATEGORIES.length;
            }

            if (model === "sitesetting") {
              if (method === "findUnique") {
                const key = args[0]?.where?.key;
                if (key === "store_name") return { key: "store_name", value: "Pulsar Fashion" };
                if (key === "favicon_url") return { key: "favicon_url", value: "/favicon.ico" };
                return null;
              }
              if (method === "findMany") return [
                { key: "store_name", value: "Pulsar Fashion" },
                { key: "store_tagline", value: "Premium Streetwear & Wholesale Hub" },
              ];
            }

            if (method === "findMany") {
              return [];
            }
            if (method === "count") {
              return 0;
            }

            return null;
          };
        },
      });
    },
  });
  return dummy;
}

function createPrismaClient(): PrismaClient {
  // If no DATABASE_URL or during Next.js build, return the dummy client immediately with ZERO network latency
  if (!process.env.DATABASE_URL || process.env.NEXT_PHASE === "phase-production-build") {
    return createDummyPrisma() as unknown as PrismaClient;
  }

  let host = process.env.DB_HOST || "127.0.0.1";
  let port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306;
  let user = process.env.DB_USER || "root";
  let password = process.env.DB_PASSWORD || "";
  let database = process.env.DB_NAME || "bibaz";
  let connectionLimit = 10;
  let useSsl = false;

  const dbUrl = process.env.DATABASE_URL;
  if (dbUrl) {
    try {
      const url = new URL(dbUrl);
      host = url.hostname;

      if (host.includes("tidbcloud") || dbUrl.includes("sslaccept=strict")) {
        useSsl = true;
      }

      if (
        process.env.NODE_ENV === "production" &&
        !process.env.VERCEL &&
        host !== "127.0.0.1" &&
        host !== "localhost"
      ) {
        host = "127.0.0.1";
      }

      port = url.port ? parseInt(url.port) : 3306;
      user = url.username;
      password = url.password;
      database = url.pathname.replace("/", "");

      const limitParam = url.searchParams.get("connection_limit");
      if (limitParam) {
        connectionLimit = parseInt(limitParam, 10);
      }
    } catch {
      console.error("Failed to parse DATABASE_URL");
    }
  }

  if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
    connectionLimit = Math.min(connectionLimit, 3);
  }

  const adapterOptions: any = {
    host,
    port,
    user,
    password,
    database,
    connectionLimit,
    connectTimeout: 3000,
    acquireTimeout: 3000,
    idleTimeout: 10000,
    allowPublicKeyRetrieval: true,
  };

  if (useSsl) {
    adapterOptions.ssl = { rejectUnauthorized: true };
  }

  const adapter = new PrismaMariaDb(adapterOptions);

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Always store prisma in globalThis in all environments to prevent connection leaks in Next.js Server Actions
globalForPrisma.prisma = prisma;

/**
 * Recursively converts Prisma Decimal values to standard JavaScript numbers.
 * This is crucial for Next.js Server Actions which crash with 500 error when returning non-serializable Decimal types.
 */
export function serializeDecimals<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === "object") {
    if (
      obj !== null &&
      typeof obj === "object" &&
      "toNumber" in obj &&
      typeof (obj as any).toNumber === "function"
    ) {
      return (obj as any).toNumber() as unknown as T;
    }
    if (obj instanceof Date) {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map((item) => serializeDecimals(item)) as unknown as T;
    }
    const serialized: any = {};
    for (const key of Object.keys(obj)) {
      serialized[key] = serializeDecimals((obj as any)[key]);
    }
    return serialized as T;
  }

  return obj;
}
