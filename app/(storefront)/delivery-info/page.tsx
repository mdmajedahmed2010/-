import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Clock, ShieldCheck, MapPin, CheckCircle, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Delivery Information — Pulsar Fashion",
  description: "Pulsar Fashion - ডেলিভারি ও শিপিং সংক্রান্ত সকল তথ্যাবলী। ঢাকা ও ঢাকার বাইরে হোম ডেলিভারি।",
};

export default function DeliveryInfoPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-surface-warm/40 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
            Shipping &amp; Logistics
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            ডেলিভারি তথ্য (Delivery Information)
          </h1>
          <p className="text-sm text-muted-foreground">
            সারা বাংলাদেশে দ্রুত, নিরাপদ এবং নির্ভরযোগ্য হোম ডেলিভারি সেবা
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          {/* Rate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-accent">ঢাকা সিটির ভেতর</span>
                <span className="text-2xl font-bold text-foreground">৳৮০</span>
              </div>
              <h3 className="text-base font-bold text-foreground">সরাসরি হোম ডেলিভারি</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                অর্ডার কনফার্মেশনের পর <strong>২৪ থেকে ৪৮ ঘণ্টার মধ্যে</strong> আপনার ঠিকানায় পণ্য পৌঁছে দেওয়া হবে।
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle className="h-4 w-4" /> ক্যাশ অন ডেলিভারি প্রযোজ্য
              </div>
            </div>

            <div className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-accent">ঢাকার বাইরে (সারাদেশ)</span>
                <span className="text-2xl font-bold text-foreground">৳১৫০</span>
              </div>
              <h3 className="text-base font-bold text-foreground">জেলা ও থানা পর্যায়ে হোম ডেলিভারি</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                কুরিয়ারের মাধ্যমে <strong>২ থেকে ৩ কার্যদিবসের মধ্যে</strong> আপনার জেলা ও থানা পর্যায়ের ঠিকানায় হোম ডেলিভারি।
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle className="h-4 w-4" /> ক্যাশ অন ডেলিভারি প্রযোজ্য
              </div>
            </div>
          </div>

          {/* Key Delivery Features */}
          <section className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-4">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              আমাদের ডেলিভারি প্রতিশ্রুতির বৈশিষ্ট্য
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <Package className="h-4 w-4 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-xs uppercase">ডেলিভারির সময় চেক করুন</p>
                  <p className="text-xs text-muted-foreground">ডেলিভারি ম্যানের সামনে পার্সেল খুলে কোয়ালিটি দেখে নিশ্চিত হয়ে মূল্য পরিশোধ করুন।</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-xs uppercase">রিয়েল-টাইম ট্র্যাকিং</p>
                  <p className="text-xs text-muted-foreground">অর্ডার প্রেরণের সাথে সাথেই এসএমএসে কুরিয়ার ট্র্যাকিং কোড সরবরাহ করা হয়।</p>
                </div>
              </div>
            </div>
          </section>

          {/* Showroom Pickup */}
          <section className="p-6 rounded-sm bg-surface-warm/40 border border-accent/20 space-y-3">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              শোরুম থেকে সরাসরি পিক-আপ (Showroom Pickup)
            </h2>
            <p>
              অনলাইনে অর্ডার করে কোনো ডেলিভারি চার্জ ছাড়াই সরাসরি আমাদের শোরুম থেকে পণ্য বুঝে নিতে পারেন:
            </p>
            <div className="text-xs text-muted-foreground font-medium space-y-1">
              <p>• শোরুম ১: দোকান #৮৫ (নিচতলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০</p>
              <p>• শোরুম ২: দোকান #৬৭ (১ম তলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০</p>
              <p>• শোরুম সময়: শনিবার - বৃহস্পতিবার (১০:০০ AM - ৯:০০ PM), শুক্রবার (২:৩০ PM - ৯:০০ PM)</p>
            </div>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c9a96e] hover:text-black transition-colors"
            >
              এখনই অর্ডার করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
