"use client";

/**
 * PULSAR FASHION — Footer Component
 * Streetwear & Wholesale Hub
 * Showroom: Shop #85 (Ground Floor), Nagor Plaza, Fulbaria, Gulistan, Dhaka
 */

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, MessageCircle, Clock, ShieldCheck, Truck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const shopLinks = [
  { href: "/collections/polo-shirts", label: "Viral Polo Shirts (পলো শার্ট)" },
  { href: "/collections/drop-shoulder", label: "Drop Shoulder T-Shirts (ড্রপ শোল্ডার)" },
  { href: "/collections/jerseys", label: "Club & Street Jerseys (জার্সি)" },
  { href: "/collections/hoodies", label: "Winter Hoodies (হুডি)" },
  { href: "/collections/wholesale", label: "Wholesale Lots (পাইকারি ডিল)" },
  { href: "/shop", label: "Browse All Products" },
];

const customerLinks = [
  { href: "/track-order", label: "Track Your Order" },
  { href: "/delivery-info", label: "Delivery Information" },
  { href: "/refund-policy", label: "Return & Refund Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/about", label: "About Pulsar Fashion" },
  { href: "/contact", label: "Contact Us & Showroom" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      {/* 1. High-Impact Newsletter / Wholesale VIP Notification Bar */}
      <div className="bg-neutral-900 border-b border-neutral-800 py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left max-w-lg">
              <span className="inline-block px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] uppercase tracking-[0.25em] font-extrabold">
                WHOLESALE & STREETWEAR DROPS
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-heading">
                নতুন কালেকশন ও পাইকারি আপডেটের জন্য যুক্ত হোন
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                ভাইরাল পলো শার্ট, ড্রপ শোল্ডার টি-শার্টের নতুন স্টক এবং বিশেষ পাইকারি অফার জানতে ইমেইল দিন।
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("ধন্যবাদ! আপনি পালসার ফ্যাশনের ভিআইপি আপডেট লিস্টে যুক্ত হয়েছেন।");
              }}
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3 items-stretch max-w-md shrink-0"
            >
              <input
                type="email"
                required
                placeholder="আপনার ইমেইল অ্যাড্রেস লিখুন"
                className="h-12 px-5 bg-neutral-950 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 rounded-md focus:outline-none focus:border-white w-full sm:w-72 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-7 bg-white hover:bg-neutral-200 text-black text-xs font-black uppercase tracking-wider rounded-md transition-all active:scale-[0.98] cursor-pointer"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links Columns */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Showroom Location */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-lg overflow-hidden border border-neutral-700 bg-black">
                <Image src="/assets/logo.jpg" alt="Pulsar Fashion" fill className="object-cover" />
              </div>
              <span className="font-heading font-black text-xl tracking-tight text-white uppercase">
                Pulsar Fashion
              </span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              দেশের শীর্ষস্থানীয় পাইকারি ও খুচরা পোশাকের ব্র্যান্ড। প্রিমিয়াম ভাইরাল পলো, ড্রপ শোল্ডার টি-শার্ট, ক্লাব জার্সি ও উইন্টার হুডির নির্ভরযোগ্য প্রতিষ্ঠান।
            </p>
            <div className="pt-2 space-y-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>দোকান নং ৮৫ (নিচতলা), নাগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="tel:01600911522" className="hover:text-white font-semibold">
                  01600911522, 01936581870
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/8801600911522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: 01600911522
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span>pulsarfashionbd@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white font-heading">
              কালেকশন সমূহ
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service & Policies */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white font-heading">
              গ্রাহক সেবা ও পলিসি
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {customerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wholesale & Delivery Trust */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white font-heading">
              পাইকারি ও ডেলিভারি সেবা
            </h4>
            <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 space-y-3 text-xs text-neutral-300">
              <div className="flex items-center gap-2 text-white font-bold">
                <Truck className="h-4 w-4 text-amber-400" />
                <span>সারা বাংলাদেশে হোম ডেলিভারি</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                • ঢাকা সিটিতে ডেলিভারি চার্জ ৳৮০ (২৪-৪৮ ঘণ্টা)<br />
                • ঢাকার বাইরে ডেলিভারি চার্জ ৳১৫০ (২-৩ দিন)<br />
                • পণ্য হাতে পেয়ে চেক করে ক্যাশ অন ডেলিভারি
              </p>
              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-neutral-400">পাইকারি বুকিং:</span>
                <a
                  href="https://wa.me/8801600911522"
                  className="text-xs font-bold text-emerald-400 hover:underline"
                >
                  ইনবক্স / কল করুন →
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61561618804910"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded bg-neutral-900 hover:bg-neutral-800 text-xs text-neutral-200 border border-neutral-800 flex items-center gap-2 transition-colors"
              >
                <span>Facebook Page</span>
                <span className="text-[10px] text-neutral-400 font-mono">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} PULSAR FASHION. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-3">
            <span>দোকান নং ৮৫, নাগর প্লাজা, ফুলবাড়িয়া, ঢাকা</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">100% Original Products Guaranteed</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
