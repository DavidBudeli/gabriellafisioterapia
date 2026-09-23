"use client";

import { useCallback, type HTMLAttributes, type Ref } from "react";
import { useGsapScope } from "@/hooks/use-gsap-scope";
import { gsap } from "@/lib/gsap";
import { motion } from "@/lib/motion-tokens";
import { cn } from "@/lib/utils";

export function MagneticButton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const setup = useCallback((root: HTMLElement, desktop: boolean) => {
    if (!desktop) return;
    const button = root.querySelector<HTMLElement>("a, button");
    if (!button) return;
    // Two reusable tweens: no new allocations or React updates on pointermove.
    const x = gsap.quickTo(button, "x", { duration: motion.duration.fast, ease: motion.ease.standard });
    const y = gsap.quickTo(button, "y", { duration: motion.duration.fast, ease: motion.ease.standard });
    let bounds: DOMRect;
    const enter = () => { bounds = root.getBoundingClientRect(); };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !bounds) return;
      x(gsap.utils.clamp(-3, 3, ((event.clientX - bounds.left) / bounds.width - 0.5) * 6));
      y(gsap.utils.clamp(-3, 3, ((event.clientY - bounds.top) / bounds.height - 0.5) * 6));
    };
    const reset = () => { x(0); y(0); };
    root.addEventListener("pointerenter", enter);
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", reset);
    root.addEventListener("focusin", reset);
    return () => {
      root.removeEventListener("pointerenter", enter);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", reset);
      root.removeEventListener("focusin", reset);
    };
  }, []);
  const ref = useGsapScope(setup);
  return <div ref={ref as Ref<HTMLDivElement>} data-magnetic className={cn("inline-flex [&>a]:w-full", className)} {...props} />;
}
