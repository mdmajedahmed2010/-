import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Truck, Store, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Pulsar Fashion | প্রিমিয়াম স্ট্রিটওয়্যার ও পাইকারি পোশাক",
  description:
    "Pulsar Fashion - বাংলাদেশের শীর্ষস্থানীয় প্রিমিয়াম স্ট্রিটওয়্যার ও মেনস ফ্যাশন ব্র্যান্ড। নগর প্লাজা, গুলিস্তান, ঢাকা। পাইকারি ও খুচরা বিক্রয়।",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Section — Immersive Editorial */}
      <section className="relative py-16 md:py-24 bg-surface-warm/40 border-b border-border/40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold animate-[slideDown_0.5s_ease-out]">
              আমাদের পরিচয় • About Pulsar Fashion
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold font-heading tracking-[-0.03em] leading-tight text-foreground animate-[fadeInUp_0.6s_ease-out]">
              PULSAR FASHION <br />
              <span className="italic font-normal text-accent">Urban Streetwear &amp; Wholesale</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto pt-2 animate-[fadeIn_0.8s_ease-out]">
              আধুনিক তরুণ প্রজন্মের জন্য প্রিমিয়াম ড্রপ শোল্ডার, ভাইরাল লাক্সারি পোলো, ক্লাব জার্সি ও হেভিওয়েট হুডির বিশ্বস্ত হাব।
            </p>
          </div>
        </div>
      </section>

      {/* 2. Brand Story split grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Asymmetrical Editorial Image Panel (5 cols) */}
            <div className="lg:col-span-5 reveal">
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-border/40 shadow-sm group">
                <Image
                  src="/assets/banner.jpg"
                  alt="Pulsar Fashion — Streetwear & Wholesale"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-300" />
              </div>
            </div>

            {/* Right Column: Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 reveal [transition-delay:200ms]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-accent" />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold">
                    WHO WE ARE
                  </p>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold font-heading tracking-tight text-foreground leading-tight">
                  নগর প্লাজার প্রাণকেন্দ্রে মানসম্মত পোশাকের নির্ভরতা
                </h2>
                <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed pt-1">
                  <strong>Pulsar Fashion</strong> ঢাকার গুলিস্তান ফুলবাড়িয়ার ঐতিহ্যবাহী পাইকারি পোশাকের মার্কেট <strong>নগর প্লাজা (Nagor Plaza)</strong> থেকে যাত্রা শুরু করে আজ সারাদেশে এক সুপরিচিত নাম।
                </p>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                আমরা সরাসরি নিজস্ব প্রোডাকশন এবং আন্তর্জাতিক মানের প্রিমিয়াম ফেব্রিক নির্বাচন করে ড্রপ শোল্ডার টি-শার্ট, ভাইরাল টেক্সচার্ড কলার পোলো, স্পোর্টস জার্সি ও হুডি প্রস্তুত করি। সারাদেশের জেলা-উপজেলার পোশাক ব্যবসায়ীদের জন্য লাভজনক পাইকারি লট সরবরাহ করার পাশাপাশি অনলাইন স্টোরের মাধ্যমে খুচরা গ্রাহকদের ঘরে পৌঁছে দিচ্ছি নিখুঁত কোয়ালিটির পোশাক।
              </p>

              {/* Physical Showrooms Highlight Box */}
              <div className="p-5 md:p-6 bg-surface-warm/50 border border-border/60 rounded-sm space-y-3">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-accent" />
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-foreground">
                    সরাসরি শোরুম ভিজিট করুন
                  </p>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground space-y-1">
                  <p>• <strong>শোরুম ১:</strong> দোকান #৮৫ (নিচতলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০</p>
                  <p>• <strong>শোরুম ২:</strong> দোকান #৬৭ (১ম তলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০</p>
                  <p className="text-foreground font-semibold pt-1 flex items-center gap-1.5">
                    <PhoneCall className="h-3.5 w-3.5 text-accent" /> হটলাইন: 01600911522 | 01936581870
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1c1815] hover:bg-[#c9a96e] text-white hover:text-[#1c1815] text-xs font-bold uppercase tracking-[0.16em] h-12 px-8 rounded-sm transition-all duration-300 shadow-sm"
                >
                  সব প্রোডাক্ট দেখুন
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground border border-border hover:border-foreground h-12 px-6 rounded-sm transition-all"
                >
                  যোগাযোগ ও লোকেশন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Philosophy Blockquote Section */}
      <section className="relative py-20 md:py-24 bg-surface-warm/30 border-y border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.04),transparent_70%)]" />
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 reveal">
            <span className="inline-flex items-center justify-center size-10 rounded-full bg-accent-light text-accent">
              <Sparkles className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <blockquote className="text-lg md:text-[24px] font-medium font-heading leading-relaxed italic text-foreground px-4 md:px-8">
              &ldquo;আমাদের লক্ষ্য একটাই—সর্বোচ্চ মানের ফেব্রিক ও ট্রেন্ডি কালেকশন এমন মূল্যে দেওয়া, যা খুচরা ক্রেতার বাজেট রক্ষা করে এবং পাইকারি ব্যবসায়ীদের সর্বোচ্চ মুনাফা নিশ্চিত করে।&rdquo;
            </blockquote>
            <div className="w-12 h-[1px] bg-accent/40 mx-auto" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground">
                Pulsar Fashion Management
              </p>
              <p className="text-[10px] text-muted-foreground font-semibold mt-1">
                Nagor Plaza, Fulbaria, Gulistan, Dhaka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Values Section — 3-Column Luxury Cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20 reveal">
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold">
              OUR CORE STRENGTHS
            </p>
            <h2 className="text-2xl md:text-[34px] font-bold font-heading tracking-tight text-foreground">
              কেন Pulsar Fashion সেরা?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Fabric Guarantee */}
            <div className="group border border-border/50 hover:border-foreground p-8 rounded-sm bg-[#fafafa]/50 hover:bg-background transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-sm reveal">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-accent-light text-accent group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  ২৪০+ GSM কম্বড ফেব্রিক
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  আমরা কোনো পাতলা বা নিম্নমানের সুতি ব্যবহার করি না। ভারী ও টেকসই কম্বড কটন, হাই-ডেনসিটি সিলিকন ও পাফ প্রিন্ট যা বহু ওয়াশেও অক্ষুণ্ণ থাকে।
                </p>
              </div>
            </div>

            {/* Card 2: Wholesale Hub */}
            <div className="group border border-border/50 hover:border-foreground p-8 rounded-sm bg-[#fafafa]/50 hover:bg-background transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-sm reveal [transition-delay:150ms]">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-accent-light text-accent group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <Store className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  পাইকারি লটের বিশেষ সুবিধা
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  নগর প্লাজার সরাসরি শোরুম থেকে পাইকারি ক্রেতাদের জন্য সর্বনিম্ন রেট ও প্যাকেজ সুবিধা। জেলা পর্যায়ের ব্যবসায়ীদের জন্য দ্রুত কুরিয়ারে ডেলিভারি।
                </p>
              </div>
            </div>

            {/* Card 3: COD & Delivery */}
            <div className="group border border-border/50 hover:border-foreground p-8 rounded-sm bg-[#fafafa]/50 hover:bg-background transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-sm reveal [transition-delay:300ms]">
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center size-12 rounded-sm bg-accent-light text-accent group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <Truck className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground pt-2">
                  সারাদেশে চেক অন ডেলিভারি
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  ঢাকার ভেতরে ২৪-৪৮ ঘণ্টা (৳৮০) এবং ঢাকার বাইরে ২-৩ দিনে (৳১৫০) ক্যাশ অন ডেলিভারি। ডেলিভারিম্যানের সামনে চেক করে দেখে পেমেন্ট করার পূর্ণ নিশ্চয়তা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
