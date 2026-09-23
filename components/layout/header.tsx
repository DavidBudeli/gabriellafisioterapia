"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Header() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = ref.current;
    if (!header) return;
    let frame = 0;
    const update = () => {
      header.toggleAttribute("data-scrolled", window.scrollY > 18);
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header ref={ref} className="site-header fixed inset-x-0 top-0 z-50 border-b border-transparent">
      <Container className="flex h-[78px] items-center justify-between gap-5 sm:h-[88px]">
        <BrandMark compact />
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link rounded-sm text-sm font-medium text-forest/78 outline-none transition-colors hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden h-11 rounded-full bg-forest px-6 text-cream shadow-none hover:bg-forest-soft sm:inline-flex">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Agendar atendimento</a>
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
