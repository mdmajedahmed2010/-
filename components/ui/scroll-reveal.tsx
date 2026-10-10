"use client";

/**
 * BIBAZ — Scroll Reveal Animation Trigger
 * Robust client component that registers an IntersectionObserver & MutationObserver
 * to ensure all elements with 'reveal' class smoothly reveal on load and scroll.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 150px 0px", // Generous margin so elements reveal smoothly
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal:not(.visible)");
      elements.forEach((el) => {
        // If element is already above bottom of viewport, show immediately
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight + 150) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });
    };

    // Run immediately and after short timeouts for App Router navigation transitions
    observeElements();
    const timer1 = setTimeout(observeElements, 50);
    const timer2 = setTimeout(observeElements, 250);

    // Watch for dynamically rendered elements
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
