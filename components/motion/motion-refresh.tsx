"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/gsap";
import { motion } from "@/lib/motion-tokens";

export function MotionRefresh() {
  const pathname = usePathname();
  useEffect(() => {
    let active = true;
    let timer: ReturnType<typeof setTimeout>;
    const refresh = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (active && !window.matchMedia(motion.media.reduce).matches) ScrollTrigger.refresh();
      }, 120);
    };
    const onLoad = (event: Event) => { if (event.target instanceof HTMLImageElement) refresh(); };
    document.addEventListener("load", onLoad, true);
    document.addEventListener("error", onLoad, true);
    document.fonts.addEventListener("loadingdone", refresh);
    document.fonts.ready.then(() => { if (active) refresh(); });
    return () => {
      active = false;
      clearTimeout(timer);
      document.removeEventListener("load", onLoad, true);
      document.removeEventListener("error", onLoad, true);
      document.fonts.removeEventListener("loadingdone", refresh);
    };
  }, [pathname]);
  return null;
}
