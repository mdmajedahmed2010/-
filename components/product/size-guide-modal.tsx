/**
 * BIBAZ — Size Guide Modal
 * Shows size chart for products
 * SOP §২ — Frontend Plan: "Size Guide: Modal/drawer with size chart"
 */

"use client";

import { useState } from "react";
import { Ruler, X } from "lucide-react";

const sizeChart = [
  { size: "M", chest: "40", length: "28", shoulder: "21", fit: "Regular / Boxy" },
  { size: "L", chest: "42", length: "29", shoulder: "22", fit: "Drop Shoulder" },
  { size: "XL", chest: "44", length: "30", shoulder: "23", fit: "Oversized Streetwear" },
  { size: "XXL", chest: "46", length: "31", shoulder: "24", fit: "Relaxed Heavy Fit" },
];

export function SizeGuideModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
      >
        <Ruler className="h-3 w-3" />
        সাইজ গাইড (Size Chart)
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-background rounded-xl border border-border shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto animate-[fadeInUp_0.3s_ease-out] p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Pulsar Fashion — Streetwear Size Guide</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close size guide"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              সকল পরিমাপ ইঞ্চিতে (Inches) দেওয়া হয়েছে। ড্রপ শোল্ডার ও পোলো শার্টের নিখুঁত ফিটিং পেতে আপনার বুকের মাপ মিলিয়ে অর্ডার করুন:
            </p>

            {/* Size Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-neutral-50 dark:bg-neutral-900">
                    <th className="text-left py-2.5 px-3 font-semibold">Size</th>
                    <th className="text-center py-2.5 px-2 font-semibold">Chest (বুকে)</th>
                    <th className="text-center py-2.5 px-2 font-semibold">Length (লম্বা)</th>
                    <th className="text-center py-2.5 px-2 font-semibold">Shoulder</th>
                    <th className="text-center py-2.5 px-2 font-semibold">Fit Style</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((row) => (
                    <tr key={row.size} className="border-b border-border last:border-0 hover:bg-neutral-50/50">
                      <td className="py-2.5 px-3 font-bold text-foreground">{row.size}</td>
                      <td className="py-2.5 px-2 text-center text-foreground font-medium">
                        {row.chest}&quot;
                      </td>
                      <td className="py-2.5 px-2 text-center text-foreground font-medium">
                        {row.length}&quot;
                      </td>
                      <td className="py-2.5 px-2 text-center text-foreground font-medium">
                        {row.shoulder}&quot;
                      </td>
                      <td className="py-2.5 px-2 text-center text-xs text-muted-foreground">
                        {row.fit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              * ম্যানুয়াল মেজারমেন্টের কারণে ০.৫ ইঞ্চি এদিক-ওদিক হতে পারে। যেকোনো সাইজ বা ফিটিং পরামর্শের জন্য সরাসরি শোরুম হটলাইনে কল বা হোয়াটসঅ্যাপ করুন: <strong>01600911522</strong>.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
