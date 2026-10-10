"use client";

import Link from "next/link";
import Image from "next/image";

export function BrandStory() {
  return (
    <section className="bg-surface border-t border-border/40 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Photo Frame */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-sm overflow-hidden shadow-sm group reveal">
            <Image
              src="/assets/banner.jpg"
              alt="Pulsar Fashion Streetwear & Wholesale"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Soft gold accent corner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.1),transparent_50%)]" />
          </div>

          {/* Right Side: Editorial narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold">
              THE ART OF URBAN STREETWEAR
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground font-heading">
              Crafted for Raw Ambition,
              <br />
              <span className="italic font-normal text-foreground/80">Delivering Wholesale Excellence</span>
            </h2>

            <div className="border-l-2 border-accent/40 pl-4 py-1 text-muted-foreground italic text-sm">
              &ldquo;আমরা বিশ্বাস করি স্ট্রিটওয়্যারের আসল শক্তি তার ফেব্রিকের ভার ও নিখুঁত ফিনিশিংয়ে। প্রতিটি ড্রপে নিশ্চিত করি আন্তর্জাতিক মান।&rdquo;
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong>Pulsar Fashion</strong> বাংলাদেশের তরুণদের জন্য নিয়ে এসেছে খাঁটি ২৪০+ GSM কম্বড কটনের ড্রপ শোল্ডার টি-শার্ট, ভাইরাল টেক্সচার্ড কলার পোলো, ক্লাব জার্সি এবং হেভিওয়েট হুডি কালেকশন।
              </p>
              <p>
                ঢাকার গুলিস্তান ফুলবাড়িয়া নগর প্লাজায় (দোকান #৮৫ ও #৬৭) অবস্থিত আমাদের সুবিশাল শোরুম থেকে সারাদেশে পাইকারি লট সরবরাহ করা হয়। পাশাপাশি খুচরা ক্রেতারা সরাসরি হোম ডেলিভারি ও ক্যাশ অন ডেলিভারি (COD) সুবিধায় কেনাকাটা করতে পারেন।
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-11 px-8 bg-foreground text-background text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#c9a96e] hover:text-black transition-all rounded-sm shadow-sm active:scale-[0.98]"
              >
                Our Complete Story
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center h-11 px-6 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.1em] hover:border-foreground transition-all rounded-sm"
              >
                Shop Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
