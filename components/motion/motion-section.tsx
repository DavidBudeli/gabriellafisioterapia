"use client";

import { useCallback, type HTMLAttributes, type Ref } from "react";
import { useGsapScope } from "@/hooks/use-gsap-scope";
import { animateSection } from "@/lib/motion-animations";

export function MotionSection({ variant = "section", as: Tag = "section", ...props }: HTMLAttributes<HTMLElement> & { variant?: "section" | "hero" | "cta"; as?: "section" | "div" }) {
  const setup = useCallback((root: HTMLElement, desktop: boolean) => animateSection(root, desktop, variant), [variant]);
  const ref = useGsapScope(setup);
  return <Tag ref={ref as Ref<HTMLDivElement>} data-motion-scope={variant} {...props} />;
}
