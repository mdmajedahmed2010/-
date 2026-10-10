"use client";

/**
 * PULSAR FASHION — Header Component
 * Clean, modern streetwear & wholesale apparel design
 * Showroom: Shop #85 (Ground Floor), Nagor Plaza, Fulbaria, Gulistan, Dhaka
 */

import Link from "next/link";
import Image from "next/image";
import { User, X, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { href: "/collections/polo-shirts", label: "Viral Polos" },
  { href: "/collections/drop-shoulder", label: "Drop Shoulder" },
  { href: "/collections/jerseys", label: "Club Jerseys" },
  { href: "/collections/hoodies", label: "Winter Hoodies" },
  { href: "/collections/wholesale", label: "Wholesale (পাইকারি)" },
  { href: "/shop", label: "Shop All" },
  { href: "/about", label: "About Us" },
];

const megaMenuData: Record<
  string,
  {
    categories: { label: string; href: string }[];
    styles: { label: string; href: string }[];
    featured: { title: string; subtitle: string; image: string; href: string };
  }
> = {
  "Viral Polos": {
    categories: [
      { label: "Shop All Viral Polos", href: "/collections/polo-shirts" },
      { label: "Dual-Tone Givenchy Edition", href: "/collections/polo-shirts" },
      { label: "Luxury Pique Cotton Polos", href: "/collections/polo-shirts" },
      { label: "Wholesale 6 Pcs Polo Bundle", href: "/collections/wholesale" },
    ],
    styles: [
      { label: "Slate Blue & Contrast White", href: "/products/viral-givenchy-dual-tone-polo-slate-blue" },
      { label: "Jet Black Dual-Tone", href: "/products/viral-givenchy-dual-tone-polo-jet-black" },
      { label: "Crimson Maroon Edition", href: "/products/viral-givenchy-dual-tone-polo-crimson-maroon" },
      { label: "Cream Ivory Contrast", href: "/products/viral-givenchy-dual-tone-polo-cream-ivory" },
    ],
    featured: {
      title: "Givenchy Dual-Tone Polo",
      subtitle: "Viral Luxury Pique Edition • 5 Colorways",
      image: "/assets/762629974_122198626190387293_2940269425792302263_n.jpg",
      href: "/collections/polo-shirts",
    },
  },
  "Drop Shoulder": {
    categories: [
      { label: "Shop All Drop Shoulder Tees", href: "/collections/drop-shoulder" },
      { label: "Savage Mode Heavyweight", href: "/collections/drop-shoulder" },
      { label: "Graphic Streetwear Edition", href: "/collections/drop-shoulder" },
      { label: "Wholesale 12 Pcs T-Shirt Lot", href: "/collections/wholesale" },
    ],
    styles: [
      { label: "Jet Black Savage Mode (240 GSM)", href: "/products/savage-mode-drop-shoulder-tshirt-jet-black" },
      { label: "Arctic White Savage Mode", href: "/products/savage-mode-drop-shoulder-tshirt-arctic-white" },
      { label: "Chocolate Mocha Brown", href: "/products/savage-mode-drop-shoulder-tshirt-chocolate-brown" },
    ],
    featured: {
      title: "Savage Mode Oversized Tee",
      subtitle: "240+ GSM Compact Combed Cotton • Bio-Washed",
      image: "/assets/641214084_122183932028387293_6534194091002887335_n.jpg",
      href: "/collections/drop-shoulder",
    },
  },
  "Wholesale (পাইকারি)": {
    categories: [
      { label: "All Wholesale Lots", href: "/collections/wholesale" },
      { label: "Viral Polo 6-Pack Lot", href: "/products/viral-polo-wholesale-lot-6pcs" },
      { label: "Savage Mode 12-Pack Lot", href: "/products/savage-mode-wholesale-lot-12pcs" },
      { label: "Retail Starter Bundle (20 Pcs)", href: "/products/pulsar-streetwear-retail-starter-bundle-20pcs" },
    ],
    styles: [
      { label: "Nagor Plaza Showroom Visit", href: "/about" },
      { label: "Call Hotline: 01600911522", href: "tel:01600911522" },
      { label: "WhatsApp Wholesale Order", href: "https://wa.me/8801600911522" },
    ],
    featured: {
      title: "Factory Direct Wholesale",
      subtitle: "Shop 85, Ground Floor, Nagor Plaza, Gulistan",
      image: "/assets/762944474_122198626388387293_7980106767827400939_n.jpg",
      href: "/collections/wholesale",
    },
  },
};

export function Header({ settings = {} }: { settings?: Record<string, unknown> }) {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem("pulsar_announcement_dismissed");
    if (isDismissed) {
      setTimeout(() => setShowAnnouncement(false), 0);
    }
  }, []);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem("pulsar_announcement_dismissed", "true");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-sm transition-all duration-300">
      {/* Streetwear Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#0a0a0a] text-white border-b border-neutral-800 text-center text-[10px] md:text-xs font-semibold tracking-wider py-2 px-6 relative">
          <div className="container mx-auto flex items-center justify-center gap-2 truncate">
            <span className="inline-block px-1.5 py-0.5 rounded bg-amber-500 text-black text-[9px] font-black uppercase tracking-wider">
              WHOLESALE & RETAIL
            </span>
            <span className="truncate">
              ⚡ PULSAR FASHION — নাগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান • সারা দেশে ক্যাশ অন ডেলিভারি • WhatsApp: 01600911522
            </span>
          </div>
          <button
            onClick={dismissAnnouncement}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors p-1"
            aria-label="Close announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Brand Header — 72px */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 static">
          <div className="flex h-[72px] items-center justify-between">
            {/* Left: Mobile menu + Brand Logo */}
            <div className="flex items-center gap-4">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-11 w-11 rounded-lg overflow-hidden border border-neutral-800 bg-black shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/assets/logo.jpg"
                    alt="Pulsar Fashion Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-lg md:text-xl tracking-tight text-neutral-900 group-hover:text-black transition-colors uppercase leading-tight">
                    Pulsar Fashion
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-neutral-500">
                    Wholesale & Streetwear
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 static" aria-label="Main navigation">
              {navLinks.map((link) => {
                const hasMegaMenu = link.label in megaMenuData;
                const menu = megaMenuData[link.label];

                if (hasMegaMenu && menu) {
                  return (
                    <MegaMenu key={link.href} label={link.label} href={link.href} data={menu} />
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className="text-[12px] font-bold uppercase tracking-[0.12em] text-neutral-800 hover:text-black py-6 block transition-colors relative after:absolute after:bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Hotline Call + Search + Cart + User */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/8801600911522"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 transition-colors"
                title="WhatsApp Order"
              >
                <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                <span>01600911522</span>
              </a>
              <SearchBar />
              <CartButton />
              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-neutral-700 hover:text-black hover:bg-neutral-100 transition-all"
                aria-label="My account"
              >
                <User className="h-5 w-5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
