import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Truck, Store, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Pulsar Fashion",
  description: "Pulsar Fashion - পাইকারি ও খুচরা বিক্রয়ের নিয়মাবলী এবং শর্তসমূহ।",
};

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-surface-warm/40 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
            Policy &amp; Guidelines
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Terms &amp; Conditions (শর্তাবলী)
          </h1>
          <p className="text-sm text-muted-foreground">
            Pulsar Fashion — নগর প্লাজা, গুলিস্তান, ঢাকা। পাইকারি ও খুচরা ক্রয়ের সাধারণ নীতিমালা।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          {/* Section 1 */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <Store className="h-5 w-5 text-accent" />
              <h2>১. ব্যবসায়িক পরিচিতি ও অর্ডার প্রক্রিয়া</h2>
            </div>
            <p>
              <strong>Pulsar Fashion</strong> হলো বাংলাদেশের বিশ্বস্ত মেগা মেনসওয়্যার ও স্ট্রিটওয়্যার ব্র্যান্ড। আমাদের নিজস্ব শোরুম রয়েছে ঢাকার গুলিস্তান ফুলবাড়িয়ার নগর প্লাজায় (দোকান #৮৫ নিচতলা ও দোকান #৬৭ ১ম তলা)। আমরা সরাসরি পাইকারি ও অনলাইন স্টোরের মাধ্যমে খুচরা উভয় মাধ্যমেই পোশাক সরবরাহ করি।
            </p>
            <p>
              ওয়েবসাইটে যেকোনো অর্ডারের ক্ষেত্রে সঠিক নাম, সক্রিয় মোবাইল নম্বর এবং পূর্ণ ডেলিভারি ঠিকানা প্রদান করা বাধ্যতামূলক।
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <Truck className="h-5 w-5 text-accent" />
              <h2>২. ডেলিভারি ও পেমেন্ট নীতিমালা</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>ক্যাশ অন ডেলিভারি (Cash on Delivery):</strong> ঢাকা শহরসহ সারাদেশে খুচরা অর্ডারের জন্য ক্যাশ অন ডেলিভারি সুবিধা প্রযোজ্য।</li>
              <li><strong>ডেলিভারি চার্জ:</strong> ঢাকা সিটির ভেতরে মাত্র ৳৮০ এবং ঢাকার বাইরে জেলা/উপজেলা পর্যায়ে ৳১৫০।</li>
              <li><strong>ডেলিভারির সময়সীমা:</strong> ঢাকার ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে ২ থেকে ৩ কার্যদিবসের মধ্যে ডেলিভারি সম্পন্ন হয়।</li>
              <li><strong>পণ্য যাচাইয়ের সুযোগ:</strong> ডেলিভারিম্যানের সামনে পার্সেল খুলে কোয়ালিটি ও সাইজ মিলিয়ে দেখার সম্পূর্ণ সুযোগ রয়েছে।</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <h2>৩. পাইকারি ক্রয়ের শর্তাবলী (Wholesale Orders)</h2>
            </div>
            <p>
              পোশাক ব্যবসায়ী ও শপ ওনারদের জন্য আমাদের পাইকারি লটের বিশেষ রেট প্রদান করা হয়। পাইকারি অর্ডারের ক্ষেত্রে ন্যূনতম অর্ডার পরিমাণ (MOQ) সাধারণত ১২ বা ২৪ পিস।
            </p>
            <p>
              পাইকারি অর্ডার নিশ্চিত করতে কুরিয়ার বুকিং চার্জ বা আংশিক অগ্রিম প্রয়োজন হতে পারে। বিস্তারিত আলোচনার জন্য সরাসরি শোরুম বা হটলাইনে যোগাযোগ করার অনুরোধ করা যাচ্ছে।
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <PhoneCall className="h-5 w-5 text-accent" />
              <h2>৪. যোগাযোগ ও কাস্টমার কেয়ার</h2>
            </div>
            <p>
              যেকোনো জিজ্ঞাসা, অর্ডার ট্র্যাকিং বা অভিযোগের জন্য আমাদের হটলাইনে যোগাযোগ করুন:
            </p>
            <div className="pt-1 text-foreground font-medium">
              <p>• ফোন ও হোয়াটসঅ্যাপ: <strong>01600911522</strong> / <strong>01936581870</strong></p>
              <p>• শোরুম: দোকান #৮৫ (নিচতলা) ও দোকান #৬৭ (১ম তলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০</p>
              <p>• ফেসবুক পেজ: <a href="https://www.facebook.com/profile.php?id=61561618804910" target="_blank" rel="noopener noreferrer" className="text-accent underline">Pulsar Fashion Official</a></p>
            </div>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c9a96e] hover:text-black transition-colors"
            >
              শপিং চালিয়ে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
