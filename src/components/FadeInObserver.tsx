"use client";

import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that adds .visible to every .fade-in element,
 * reproducing the scroll-reveal behaviour from the original HTML page.
 */
export default function FadeInObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll<HTMLElement>(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
