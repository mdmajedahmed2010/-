import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, CheckCircle2, AlertCircle, PhoneCall, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Return & Refund Policy — Pulsar Fashion",
  description: "Pulsar Fashion - এক্সচেঞ্জ ও রিটার্ন নীতিমালা। সহজ ও নির্ভরযোগ্য কাস্টমার সার্ভিস।",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-surface-warm/40 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
            Customer Guarantee
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Return &amp; Exchange Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            পণ্য পরিবর্তন ও রিটার্ন সংক্রান্ত সহজ ও স্বচ্ছ নীতিমালা
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          {/* Highlight Card */}
          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500 rounded-r space-y-2">
            <h2 className="text-base font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ডেলিভারি ম্যানের উপস্থিতিতে পণ্য চেক করার নিশ্চয়তা
            </h2>
            <p className="text-emerald-800 dark:text-emerald-300">
              পার্সেল রিসিভ করার সময় ডেলিভারি ম্যানের সামনে খুলে দেখে নিন। ফেব্রিকের কোয়ালিটি, সাইজ বা রঙে কোনো ত্রুটি থাকলে ডেলিভারিম্যানের সামনেই রিটার্ন করতে পারবেন।
            </p>
          </div>

          {/* Section 1: 7-Day Exchange */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <RefreshCw className="h-5 w-5 text-accent" />
              <h2>১. সাইজ পরিবর্তন বা এক্সচেঞ্জ সুবিধা (Size Exchange)</h2>
            </div>
            <p>
              পোশাক হাতে পাওয়ার পর যদি সাইজে ছোট বা বড় হয়, তাহলে পার্সেল পৌঁছানোর <strong>৭ দিনের মধ্যে</strong> আপনি সাইজ পরিবর্তনের আবেদন করতে পারবেন।
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>পোশাকটি অব্যবহৃত এবং পরিচ্ছন্ন অবস্থায় থাকতে হবে।</li>
              <li>অরিজিনাল ট্যাগ ও প্যাকেজিং অক্ষত থাকতে হবে।</li>
              <li>সাইজ পরিবর্তনের ক্ষেত্রে কুরিয়ার ডেলিভারি চার্জ প্রযোজ্য হবে।</li>
            </ul>
          </section>

          {/* Section 2: Defective items */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <h2>২. ক্ষতিগ্রস্ত বা ভুল পণ্যের ক্ষেত্রে সম্পূর্ণ ফ্রি রিপ্লেসমেন্ট</h2>
            </div>
            <p>
              যদি ভুলবশত অন্য কোনো পণ্য বা ক্ষতিগ্রস্ত পোশাক আপনার কাছে পৌঁছে যায়, তাহলে কোনো প্রকার অতিরিক্ত ডেলিভারি চার্জ ছাড়াই আমরা সঠিক পণ্যটি রিপ্লেস করে দেব।
            </p>
          </section>

          {/* Section 3: Showroom exchange */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <Store className="h-5 w-5 text-accent" />
              <h2>৩. সরাসরি শোরুমে এক্সচেঞ্জ</h2>
            </div>
            <p>
              অনলাইনে কেনা পোশাক আপনি চাইলে সরাসরি আমাদের শোরুমে এসেও এক্সচেঞ্জ করে নিতে পারেন:
            </p>
            <p className="text-foreground font-medium">
              শোরুম ১: দোকান #৮৫ (নিচতলা) ও শোরুম ২: দোকান #৬৭ (১ম তলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা।
            </p>
          </section>

          {/* Section 4: Contact */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-3">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
              <PhoneCall className="h-5 w-5 text-accent" />
              <h2>৪. রিটার্ন বা এক্সচেঞ্জ করতে যোগাযোগ করুন</h2>
            </div>
            <p>
              রিটার্ন রিকোয়েস্ট করতে আপনার অর্ডার নম্বর ও পণ্যের ছবি সহ আমাদের সাথে যোগাযোগ করুন:
            </p>
            <div className="text-foreground font-semibold pt-1">
              <p>• ফোন / WhatsApp: <strong>01600911522</strong> / <strong>01936581870</strong></p>
              <p>• ফেসবুক মেসেঞ্জার: <a href="https://www.facebook.com/profile.php?id=61561618804910" target="_blank" rel="noopener noreferrer" className="text-accent underline">fb.com/PulsarFashion</a></p>
            </div>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c9a96e] hover:text-black transition-colors"
            >
              প্রোডাক্ট ব্রাউজ করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
