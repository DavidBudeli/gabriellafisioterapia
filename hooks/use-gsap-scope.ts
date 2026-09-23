"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, registerMotion } from "@/lib/gsap";
import { motion } from "@/lib/motion-tokens";

export type MotionSetup = (root: HTMLElement, desktop: boolean) => void | (() => void);

export function useGsapScope(setup: MotionSetup) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    registerMotion();

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add(motion.media, ({ conditions }) => {
        // matchMedia first reverts the old animations, restoring the original DOM.
        // Reduced motion therefore never needs hidden CSS or a second render.
        if (conditions?.reduce) return;
        return setup(root, Boolean(conditions?.desktop));
      }, root);
    }, root);

    return () => context.revert();
  }, [pathname, setup]);

  return ref;
}
