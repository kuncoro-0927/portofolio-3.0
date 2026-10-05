// src/hooks/useReveal.ts
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

type Options = { y?: number; delay?: number; duration?: number };

export function useReveal<T extends HTMLElement>({
  y = 40,
  delay = 0,
  duration = 0.9,
}: Options = {}) {
  const ref = useRef<T>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      });
    });
  });

  return ref;
}
