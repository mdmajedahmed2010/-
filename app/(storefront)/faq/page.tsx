import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ChevronRight, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) — Pulsar Fashion",
  description: "Pulsar Fashion - সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তরসমূহ। পাইকারি, খুচরা, ডেলিভারি ও সাইজ গাইড।",
};

const faqs = [
  {
    q: "Pulsar Fashion-এর কাপড়ের কোয়ালিটি কেমন?",
    a: "আমরা প্রতিটি টি-শার্টে ব্যবহার করি ২৪০+ GSM হেভিওয়েট ১০০% কম্বড কটন ফেব্রিক, দীর্ঘস্থায়ী হাই-ডেনসিটি পাফ ও সিলিকন প্রিন্ট। পোলো শার্টে রয়েছে প্রিমিয়াম টেক্সচার্ড নিট এবং নিপুণ স্টিচিং। কাপড় ধোয়ার পরও সহজে নষ্ট হয় না বা কুঁচকে যায় না।",
  },
  {
    q: "ডেলিভারি চার্জ কত এবং কত দিনের মধ্যে পার্সেল পৌঁছাবে?",
    a: "ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳৮০ (২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডেলিভারি)। ঢাকার বাইরে জেলা ও থানা পর্যায়ে ডেলিভারি চার্জ ৳১৫০ (২ থেকে ৩ কার্যদিবসের মধ্যে নির্ভরযোগ্য কুরিয়ারে হোম ডেলিভারি)।",
  },
  {
    q: "ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা আছে কি?",
    a: "হ্যাঁ, সম্পূর্ণ বাংলাদেশজুড়ে আমাদের ক্যাশ অন ডেলিভারি সুবিধা রয়েছে। পণ্য হাতে পেয়ে ডেলিভারিম্যানকে মূল্য পরিশোধ করতে পারবেন।",
  },
  {
    q: "আমি কি ডেলিভারিম্যানের সামনে পার্সেল চেক করতে পারব?",
    a: "অবশ্যই! আমাদের নীতিমালায় স্পষ্ট বলা আছে—ডেলিভারিম্যানের উপস্থিতিতে পার্সেল খুলে পণ্যের ফেব্রিক, রঙ ও সাইজ যাচাই করে নিশ্চিন্তে পেমেন্ট করুন।",
  },
  {
    q: "দোকানের জন্য পাইকারি (Wholesale) লট কীভাবে অর্ডার করব?",
    a: "পাইকারি লটের জন্য সরাসরি আমাদের গুলিস্তান নগর প্লাজার শোরুমে আসতে পারেন অথবা আমাদের পাইকারি হটলাইনে (01600911522 / 01936581870) সরাসরি কল বা হোয়াটসঅ্যাপ করতে পারেন। ন্যূনতম ১২/২৪ পিসের লটে বিশেষ হোলসেল ডিসকাউন্ট দেওয়া হয়।",
  },
  {
    q: "সাইজে ছোট বা বড় হলে কি এক্সচেঞ্জ করা যাবে?",
    a: "হ্যাঁ, পণ্য হাতে পাওয়ার পর ৭ দিনের মধ্যে সাইজ এক্সচেঞ্জ করার সুযোগ রয়েছে। পণ্যটি অব্যবহৃত এবং অক্ষত ট্যাগসহ থাকতে হবে।",
  },
  {
    q: "আপনাদের সরাসরি শোরুম কোথায় অবস্থিত?",
    a: "আমাদের দুটি ফিজিক্যাল শোরুম রয়েছে ঢাকার ফুলবাড়িয়া, গুলিস্তানের সুবিশাল পাইকারি মার্কেট নগর প্লাজায়:\n• শোরুম ১: দোকান #৮৫ (নিচতলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০\n• শোরুম ২: দোকান #৬৭ (১ম তলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-20 bg-surface-warm/40 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
            Customer Help Center
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-sm text-muted-foreground">
            গ্রাহকদের সচরাচর জিজ্ঞাসিত প্রশ্ন ও প্রয়োজনীয় সকল উত্তর
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-sm bg-neutral-50 dark:bg-neutral-900 border border-border/60 space-y-2 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <h2 className="text-base font-bold text-foreground">
                  {faq.q}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8 whitespace-pre-line">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-8 rounded-sm bg-[#0f0e0d] text-white text-center space-y-4 border border-[#c9a96e]/30">
          <h2 className="text-xl font-bold text-[#e8ce9e]">আরও কোনো প্রশ্ন বা বিশেষ জিজ্ঞাসা আছে?</h2>
          <p className="text-sm text-neutral-300 max-w-md mx-auto">
            আমাদের কাস্টমার সাপোর্ট টিম সপ্তাহের ৭ দিনই প্রস্তুত আপনাকে সহায়তা করার জন্য।
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="tel:01600911522"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a96e] text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              কল করুন: 01600911522
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white hover:text-black transition-colors"
            >
              যোগাযোগ পেজ
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
