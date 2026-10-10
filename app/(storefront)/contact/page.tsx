import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Store, Truck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { getStorefrontSettings } from "@/actions/settings.actions";

export const metadata: Metadata = {
  title: "Contact Us — Pulsar Fashion | শোরুম ও যোগাযোগ",
  description: "Pulsar Fashion - নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা। পাইকারি ও খুচরা অর্ডারের জন্য যোগাযোগ করুন।",
};

export default async function ContactPage() {
  const { settings } = await getStorefrontSettings();
  const phone = settings?.store_phone || BUSINESS.PHONE;
  const email = settings?.store_email || BUSINESS.EMAIL;
  const address = settings?.store_address || BUSINESS.ADDRESS;
  const facebook = settings?.social_facebook || BUSINESS.FACEBOOK;
  const whatsapp = BUSINESS.WHATSAPP;

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Section */}
      <section className="relative py-16 md:py-24 bg-surface-warm/40 border-b border-border/40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold animate-[slideDown_0.5s_ease-out]">
              Connect with us • যোগাযোগ
            </p>
            <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-[-0.03em] leading-tight text-foreground animate-[fadeInUp_0.6s_ease-out]">
              PULSAR FASHION <br />
              <span className="italic font-normal text-accent">হটলাইন ও শোরুম লোকেশন</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto pt-2 animate-[fadeIn_0.8s_ease-out]">
              খুচরা অর্ডার, সাইজিং পরামর্শ, কিংবা দোকানের জন্য পাইকারি লট সম্পর্কিত যেকোনো তথ্যে আমাদের সাথে সরাসরি যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Dashboard — 2-Column Split */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Form Panel (7 cols) */}
              <div className="lg:col-span-7 space-y-8 reveal">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-foreground font-heading">
                    আমাদের মেসেজ পাঠান
                  </h2>
                  <div className="w-10 h-[1.5px] bg-accent/60" />
                </div>

                <form className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-[11px] font-bold uppercase tracking-wider text-foreground"
                    >
                      আপনার নাম (Full Name) *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="আপনার সম্পূর্ণ নাম"
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground focus:ring-0 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-phone"
                      className="text-[11px] font-bold uppercase tracking-wider text-foreground"
                    >
                      মোবাইল নম্বর (Phone Number) *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground focus:ring-0 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-subject"
                      className="text-[11px] font-bold uppercase tracking-wider text-foreground"
                    >
                      বিষয় (Subject) *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="খুচরা অর্ডার / পাইকারি লটের দরদাম / অন্যান্য..."
                      className="w-full h-11 px-4 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground focus:ring-0 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="text-[11px] font-bold uppercase tracking-wider text-foreground"
                    >
                      আপনার বার্তা (Message) *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="আপনার প্রয়োজনীয় তথ্য বিস্তারিত লিখুন..."
                      className="w-full px-4 py-3 border border-border/80 bg-background text-sm rounded-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground focus:ring-0 resize-none transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-11 bg-foreground text-background text-xs font-semibold uppercase tracking-widest hover:bg-[#c9a96e] hover:text-black transition-all active:scale-[0.98] rounded-sm cursor-pointer"
                  >
                    বার্তা পাঠান (Send Message)
                  </button>
                </form>

                {/* Direct WhatsApp Callout */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-emerald-950 dark:text-emerald-100">সরাসরি হোয়াটসঅ্যাপে চ্যাট করুন</p>
                      <p className="text-[11px] text-emerald-700 dark:text-emerald-300">যেকোনো প্রশ্ন ও ছবির জন্য ইনস্ট্যান্ট রিপ্লাই</p>
                    </div>
                  </div>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-sm transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Right Column: Business Info Card (5 cols) */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 reveal [transition-delay:200ms]">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-foreground font-heading">
                    শোরুম ও হটলাইন তথ্য
                  </h2>
                  <div className="w-10 h-[1.5px] bg-accent/60" />
                </div>

                {/* Info Card */}
                <div className="p-8 rounded-sm bg-surface-warm/40 border border-accent/20 space-y-6 shadow-sm">
                  <div className="space-y-5">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          হটলাইন ও অর্ডার সহায়তা
                        </p>
                        <div className="text-xs text-muted-foreground font-medium mt-1 space-y-0.5">
                          <p><a href={`tel:${phone}`} className="hover:text-foreground font-semibold">{phone}</a> (Call &amp; WhatsApp)</p>
                          <p><a href="tel:01936581870" className="hover:text-foreground font-semibold">01936581870</a> (Support)</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          ইমেইল সহায়তা
                        </p>
                        <a
                          href={`mailto:${email}`}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium mt-1 inline-block"
                        >
                          {email}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <Store className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          শোরুম ঠিকানা (Nagor Plaza)
                        </p>
                        <div className="text-xs text-muted-foreground leading-relaxed font-medium mt-1 space-y-1">
                          <p>• <strong>শোরুম ১:</strong> দোকান #৮৫ (নিচতলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০</p>
                          <p>• <strong>শোরুম ২:</strong> দোকান #৬৭ (১ম তলা), নগর প্লাজা, ফুলবাড়িয়া, গুলিস্তান, ঢাকা-১০০০</p>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          শোরুমের সময়সূচি
                        </p>
                        <div className="text-xs text-muted-foreground leading-relaxed font-medium mt-1 space-y-0.5">
                          <p>শনিবার - বৃহস্পতিবার: সকাল ১০:০০ - রাত ৯:০০</p>
                          <p>শুক্রবার: দুপুর ২:৩০ - রাত ৯:০০</p>
                        </div>
                      </div>
                    </div>

                    {/* Delivery & Wholesale Guidelines */}
                    <div className="p-4 rounded-sm bg-[#0f0e0d] text-white border border-[#c9a96e]/30 space-y-2 text-xs">
                      <p className="font-bold uppercase tracking-wider text-[#e8ce9e] text-[10px]">
                        ডেলিভারি ও পাইকারি নিয়মাবলী
                      </p>
                      <p>• সারাদেশে ক্যাশ অন ডেলিভারি (COD) প্রযোজ্য।</p>
                      <p>• ঢাকা সিটিতে ৳৮০ (২৪-৪৮ ঘণ্টা) | ঢাকার বাইরে ৳১৫০ (২-৩ দিন)।</p>
                      <p className="text-[#e8ce9e] font-semibold">• ডেলিভারি ম্যানের সামনে পণ্য চেক করে পেমেন্ট করার সুবিধা।</p>
                      <p>• পাইকারি লটের জন্য বিশেষ ডিসকাউন্ট—ন্যূনতম অর্ডার ১২/২৪ পিস।</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="border-t border-accent/15 pt-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-3">
                      আমাদের অফিসিয়াল পেজ
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
                      >
                        <svg className="h-3.5 w-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
