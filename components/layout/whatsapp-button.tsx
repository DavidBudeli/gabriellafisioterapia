"use client";

import Image from "next/image";
import type { Ref } from "react";
import { gsap } from "@/lib/gsap";
import { motion } from "@/lib/motion-tokens";
import { useGsapScope } from "@/hooks/use-gsap-scope";
import { siteConfig } from "@/data/site";

function animateWhatsApp(root: HTMLElement) {
  if (getComputedStyle(root).display === "none") return;
  gsap.timeline()
    .fromTo(root, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7, delay: 0.7, ease: motion.ease.standard, clearProps: "opacity,transform" })
    .to(root, { scale: 1.05, duration: 0.45, ease: motion.ease.smooth }, "+=4")
    .to(root, { scale: 1, duration: 0.45, ease: motion.ease.smooth, clearProps: "transform" });
}

export function WhatsAppButton() {
  const ref = useGsapScope(animateWhatsApp);
  return (
    <a
      ref={ref as Ref<HTMLAnchorElement>}
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Physis Therapeia pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full border border-forest/10 bg-white shadow-[0_10px_28px_rgba(18,54,35,0.24)] outline-none transition-shadow motion-safe:hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(18,54,35,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:flex"
    >
      <Image
        src="/images/brand/whatsapp-logo-transparent.png"
        alt=""
        aria-hidden="true"
        width={36}
        height={36}
        className="size-9 object-contain"
      />
    </a>
  );
}
