"use client";

/**
 * PULSAR FASHION — Mobile Navigation Overlay
 * Showroom: Shop #85 (Ground Floor), Nagor Plaza, Fulbaria, Gulistan, Dhaka
 * WhatsApp & Hotline: 01600911522
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User, ChevronDown, ChevronUp, PhoneCall } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useCartStore } from "@/store/cart-store";
import { BUSINESS } from "@/lib/constants";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleAccordion = (label: string) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  const categoriesWithSubs: Record<string, string[]> = {
    "Viral Polos": [
      "Shop All Viral Polos",
      "Slate Blue Dual-Tone",
      "Jet Black Dual-Tone",
      "Crimson Maroon",
      "Cream Ivory",
      "Mocha Brown",
    ],
    "Drop Shoulder": [
      "All Drop Shoulder Tees",
      "Jet Black Savage Mode (240 GSM)",
      "Arctic White Edition",
      "Chocolate Mocha Brown",
    ],
    "Wholesale (পাইকারি)": [
      "All Wholesale Lots",
      "6 Pcs Viral Polo Bundle",
      "12 Pcs Savage Mode Pack",
      "Retail Starter Bundle (20 Pcs)",
    ],
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center size-10 text-neutral-800 hover:bg-neutral-100 rounded-full transition-all duration-200"
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6" strokeWidth={1.75} />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed top-0 left-0 w-screen h-[100dvh] bg-white z-[9999] flex flex-col overflow-y-auto animate-slide-up">
            {/* Header bar within overlay */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-neutral-200 bg-white">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <div className="relative h-9 w-9 rounded-md overflow-hidden bg-black border border-neutral-800">
                  <Image src="/assets/logo.jpg" alt="Pulsar Fashion" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-base font-extrabold tracking-tight uppercase">
                    Pulsar Fashion
                  </span>
                  <span className="text-[9px] uppercase font-bold text-neutral-500">
                    Nagor Plaza, Dhaka
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center size-10 text-neutral-700 hover:bg-neutral-100 rounded-full transition-all duration-200"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Wholesale & Showroom Banner */}
            <div className="bg-neutral-900 text-white p-4 mx-6 mt-4 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  সরাসরি শোরুম ভিজিট করুন
                </p>
                <p className="text-xs font-semibold mt-0.5">দোকান নং ৮৫, নিচতলা, নাগর প্লাজা, ফুলবাড়িয়া</p>
              </div>
              <a
                href="tel:01600911522"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold shrink-0"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>কল করুন</span>
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-4" aria-label="Mobile navigation">
              <div className="flex flex-col">
                {links.map((link) => {
                  const hasSubCategories = link.label in categoriesWithSubs;
                  const isAccordionActive = activeAccordion === link.label;

                  return (
                    <div key={link.href} className="border-b border-neutral-200">
                      {hasSubCategories ? (
                        <div>
                          <button
                            onClick={() => toggleAccordion(link.label)}
                            className="w-full min-h-[52px] py-3.5 flex justify-between items-center text-[15px] font-bold tracking-wide text-neutral-900 hover:text-black transition-colors"
                            aria-expanded={isAccordionActive}
                          >
                            {link.label}
                            {isAccordionActive ? (
                              <ChevronUp className="h-4 w-4 text-neutral-500" strokeWidth={1.5} />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-neutral-500" strokeWidth={1.5} />
                            )}
                          </button>

                          {isAccordionActive && (
                            <div className="pl-4 pb-4 flex flex-col gap-3 animate-slide-down">
                              {(categoriesWithSubs[link.label] ?? []).map((subLabel) => (
                                <Link
                                  key={subLabel}
                                  href={link.href}
                                  onClick={() => setOpen(false)}
                                  className="text-[14px] text-neutral-600 hover:text-black transition-colors font-medium py-1"
                                >
                                  {subLabel}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="w-full min-h-[52px] py-3.5 flex items-center text-[15px] font-bold tracking-wide text-neutral-900 hover:text-black transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Utility links */}
              <div className="flex flex-col gap-3.5 mt-6 pb-4">
                <Link
                  href="/track-order"
                  onClick={() => setOpen(false)}
                  className="text-xs font-semibold text-neutral-600 hover:text-black transition-colors"
                >
                  Track My Order (অর্ডার ট্র্যাক করুন)
                </Link>
                <Link
                  href="/delivery-info"
                  onClick={() => setOpen(false)}
                  className="text-xs font-semibold text-neutral-600 hover:text-black transition-colors"
                >
                  Delivery & Shipping Information
                </Link>
                <Link
                  href="/refund-policy"
                  onClick={() => setOpen(false)}
                  className="text-xs font-semibold text-neutral-600 hover:text-black transition-colors"
                >
                  Return & Exchange Policy
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-xs font-semibold text-neutral-600 hover:text-black transition-colors"
                >
                  Contact & Showroom Location
                </Link>
              </div>
            </nav>

            {/* Bottom Actions */}
            <div className="px-6 py-5 border-t border-neutral-200 bg-neutral-50 grid grid-cols-2 gap-3 mt-auto">
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 h-11 bg-white border border-neutral-300 text-xs font-bold text-neutral-900 hover:border-black rounded-lg transition-colors shadow-xs"
              >
                <User className="h-4 w-4 text-neutral-600" strokeWidth={1.5} />
                My Account
              </Link>
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 h-11 bg-neutral-950 text-white text-xs font-bold hover:bg-neutral-800 rounded-lg transition-colors shadow-xs"
              >
                <ShoppingBag className="h-4 w-4 text-white" strokeWidth={1.5} />
                Bag ({cartCount})
              </Link>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
