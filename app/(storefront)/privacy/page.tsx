import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Shield, Eye, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Pulsar Fashion",
  description: "Pulsar Fashion - গ্রাহকের ব্যক্তিগত তথ্য সুরক্ষা ও গোপনীয়তা নীতিমালা।",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-surface-warm/40 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
            Data Protection &amp; Security
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Privacy Policy (গোপনীয়তা নীতিমালা)
          </h1>
          <p className="text-sm text-muted-foreground">
            Pulsar Fashion গ্রাহকদের ব্যক্তিগত তথ্যের সম্পূর্ণ নিরাপত্তা ও গোপনীয়তা বজায় রাখতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <Database className="h-5 w-5 text-accent" />
              <h2>১. আমরা কী কী তথ্য সংগ্রহ করি?</h2>
            </div>
            <p>
              অর্ডার প্রসেসিং ও নির্ভরযোগ্য ডেলিভারি নিশ্চিত করতে আমরা শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ করি:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>গ্রাহকের পূর্ণ নাম</li>
              <li>সক্রিয় মোবাইল ফোন নম্বর (ডেলিভারি ম্যানের যোগাযোগের জন্য)</li>
              <li>ডেলিভারির সম্পূর্ণ ঠিকানা (বাসা/রোড/এলাকা/জেলা)</li>
              <li>অর্ডারের বিস্তারিত পণ্যের বিবরণ এবং বিশেষ নির্দেশনা</li>
            </ul>
          </section>

          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <Shield className="h-5 w-5 text-accent" />
              <h2>২. তথ্যের ব্যবহার ও নিরাপত্তা</h2>
            </div>
            <p>
              আপনার প্রদত্ত তথ্য কঠোরভাবে সুরক্ষিত রাখা হয় এবং শুধুমাত্র নিচের উদ্দেশ্যে ব্যবহৃত হয়:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>আপনার অর্ডারের পণ্য সঠিক ঠিকানায় পৌঁছে দেওয়া</li>
              <li>অর্ডার কনফার্মেশন ও ট্র্যাকিং আপডেট এসএমএস বা কলের মাধ্যমে জানানো</li>
              <li>কাস্টমার সার্ভিস ও আফটার-সেলস সাপোর্ট প্রদান</li>
            </ul>
            <p className="font-semibold text-foreground pt-1">
              * আমরা কোনো অবস্থাতেই গ্রাহকের কোনো তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রয়, শেয়ার বা অননুমোদিতভাবে উন্মুক্ত করি না।
            </p>
          </section>

          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <Lock className="h-5 w-5 text-accent" />
              <h2>৩. পেমেন্ট তথ্যের গোপনীয়তা</h2>
            </div>
            <p>
              আমাদের সিংহভাগ অর্ডারই ক্যাশ অন ডেলিভারি (Cash on Delivery) ভিত্তিক, তাই অনলাইন ট্রানজেকশনে আপনার কোনো ব্যাংক বা কার্ডের তথ্য আমাদের ডাটাবেজে সংরক্ষিত হয় না। ডিজিটাল পেমেন্টের ক্ষেত্রে সরাসরি বাংলাদেশের বিশ্বস্ত পেমেন্ট গেটওয়ের মাধ্যমে লেনদেন পরিচালিত হয়।
            </p>
          </section>

          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <Eye className="h-5 w-5 text-accent" />
              <h2>৪. তথ্যের পরিবর্তন ও কাস্টমার অধিকার</h2>
            </div>
            <p>
              আপনার অ্যাকাউন্ট বা অর্ডারের তথ্যে কোনো পরিবর্তন আনতে চাইলে যেকোনো সময় আমাদের হটলাইনে যোগাযোগ করতে পারেন:
            </p>
            <p className="text-foreground font-medium pt-1">
              হটলাইন: 01600911522 | ইমেইল: info@pulsarfashion.com
            </p>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c9a96e] hover:text-black transition-colors"
            >
              শপিং করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
