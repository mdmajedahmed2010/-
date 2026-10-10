"use client";

/**
 * BIBAZ — Trust Badges (Premium Redesign v3.1)
 * Optimized, mobile-responsive trust strip matching luxury brand identity
 * Features: warm sand ivory borders, gold-monochrome iconography, and micro-hover lifts
 */

import { useEffect, useRef, useState } from "react";
import { Truck, ShieldCheck, CreditCard, CheckCircle2 } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "সারাদেশে হোম ডেলিভারি",
    description: "ঢাকা সিটিতে ৳৮০ | ঢাকার বাইরে ৳১৫০",
  },
  {
    icon: CreditCard,
    title: "ক্যাশ অন ডেলিভারি (COD)",
    description: "পণ্য হাতে পেয়ে দেখে মূল্য পরিশোধ করুন",
  },
  {
    icon: ShieldCheck,
    title: "পাইকারি ও খুচরা বিক্রয়",
    description: "নগর প্লাজা শোরুম #৮৫ ও #৬৭, গুলিস্তান",
  },
  {
    icon: CheckCircle2,
    title: "১০০% প্রিমিয়াম কোয়ালিটি",
    description: "২৪০+ GSM কম্বড কটন ও লাক্সারি ফেব্রিক",
  },
];

export function TrustBadges() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f9f7f2] border-y border-[#c9a96e]/25 py-14 md:py-18 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {badges.map((badge, i) => (
            <div
              key={badge.title}
              className={`group flex flex-col items-center text-center gap-4.5 p-6 md:p-7 rounded-sm bg-white border border-[#e8e6e1] shadow-luxury transition-all duration-500 hover:shadow-gold-glow hover:border-[#c9a96e]/60 hover:-translate-y-1.5 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-[0.98]"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 85}ms` : "0ms",
              }}
            >
              {/* Circular Gold Icon Wrapper */}
              <div className="flex items-center justify-center size-14 md:size-15 rounded-full bg-[#f7f3eb] text-[#c9a96e] transition-all duration-500 group-hover:bg-[#0f0e0d] group-hover:text-[#e8ce9e] shadow-sm scale-100 group-hover:scale-110">
                <badge.icon className="h-6 w-6 md:h-6.5 md:w-6.5 stroke-[1.3]" />
              </div>

              <div className="space-y-1.5">
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-[#0f0e0d] font-sans">
                  {badge.title}
                </p>
                <p className="text-[11px] md:text-xs text-neutral-500 leading-relaxed font-sans font-medium">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
