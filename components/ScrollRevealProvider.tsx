"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback: reveal everything immediately if IntersectionObserver is not supported
      document.querySelectorAll(".reveal-on-scroll, .reveal-stagger-item").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            // If it's a staggered container, reveal its children with delay
            if (target.hasAttribute("data-reveal-group")) {
              target.classList.add("is-visible");
              const items = target.querySelectorAll(".reveal-stagger-item");
              items.forEach((item, index) => {
                const el = item as HTMLElement;
                el.style.setProperty("--reveal-delay", `${index}`);
                requestAnimationFrame(() => {
                  el.classList.add("is-visible");
                });
              });
              setTimeout(() => {
                items.forEach((item) => {
                  (item as HTMLElement).style.removeProperty("--reveal-delay");
                });
              }, 800);
              observer.unobserve(target);
            } else {
              target.classList.add("is-visible");
              observer.unobserve(target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observe elements
    const elementsToObserve = document.querySelectorAll(
      ".reveal-on-scroll, [data-reveal-group], .reveal-stagger-item:not([data-reveal-group] .reveal-stagger-item)"
    );

    elementsToObserve.forEach((el) => observer.observe(el));

    // Handle any elements that are already above fold
    setTimeout(() => {
      document.querySelectorAll(".reveal-on-scroll, [data-reveal-group]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
          if (el.hasAttribute("data-reveal-group")) {
            el.querySelectorAll(".reveal-stagger-item").forEach((item, idx) => {
              (item as HTMLElement).style.setProperty("--reveal-delay", `${idx}`);
              item.classList.add("is-visible");
            });
          }
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return null;
}
