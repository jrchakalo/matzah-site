"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";

type ScrollRevealReturn<T extends HTMLElement> = {
  ref: MutableRefObject<T | null>;
  shouldAnimate: boolean;
};

export function useScrollReveal<T extends HTMLElement>(): ScrollRevealReturn<T> {
  const ref = useRef<T>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setShouldAnimate(false);
      return;
    }

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isAlreadyVisible = rect.top < viewportHeight && rect.bottom > 0;

    if (!isAlreadyVisible) {
      setShouldAnimate(true);
    }
  }, []);

  return { ref, shouldAnimate };
}
