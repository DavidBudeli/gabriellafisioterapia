"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { navigation, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { motion } from "@/lib/motion-tokens";

// Mount inside the portal: its DOM is not available in the parent's layout effect.
function MenuSurface({ children, timeline, onClosed }: { children: ReactNode; timeline: RefObject<gsap.core.Timeline | null>; onClosed: () => void }) {
  const reduced = useReducedMotion();
  const panel = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (reduced || !panel.current || !overlay.current) return;
    const context = gsap.context(() => {
      timeline.current = gsap.timeline({
        defaults: { duration: motion.duration.micro, ease: motion.ease.standard },
        onReverseComplete: onClosed,
      })
        .fromTo(overlay.current, { opacity: 0 }, { opacity: 1 }, 0)
        .fromTo(panel.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0 }, 0)
        .fromTo(panel.current!.querySelectorAll("nav a"), { opacity: 0, y: 8 }, { opacity: 1, y: 0, stagger: 0.025 }, 0.04);
    }, panel);
    return () => { context.revert(); timeline.current = null; };
  }, [onClosed, reduced, timeline]);

  return <>
    <Dialog.Overlay ref={overlay} className="fixed inset-0 z-50 bg-forest-deep/45" />
    <Dialog.Content ref={panel} className="fixed inset-y-0 right-0 z-50 flex h-dvh w-[min(88vw,390px)] flex-col gap-4 overflow-y-auto border-l border-sand bg-cream text-forest shadow-lg" aria-describedby="mobile-menu-description">
      {children}
    </Dialog.Content>
  </>;
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => { if (event.matches) close(); };
    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, [close]);

  const changeOpen = (next: boolean) => {
    if (next) {
      setOpen(true);
      timeline.current?.timeScale(1).play();
    } else if (reduced || !timeline.current || timeline.current.time() === 0) {
      setOpen(false);
    } else {
      // Retain Radix's focus trap and scroll lock through the short exit animation.
      timeline.current.timeScale(1.6).reverse();
    }
  };

  return (
    <Sheet open={open} onOpenChange={changeOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon-lg" className="size-11 rounded-full border-forest/18 bg-cream/70 text-forest shadow-none hover:bg-white lg:hidden" aria-label="Abrir menu">
          <Menu aria-hidden="true" className="size-5" />
        </Button>
      </SheetTrigger>
      <Dialog.Portal>
        <MenuSurface timeline={timeline} onClosed={close}>
          <SheetHeader className="flex-row items-center justify-between border-b border-sand px-5 py-5 text-left">
            <div>
              <SheetTitle className="font-serif text-2xl tracking-[0.08em] text-forest">PHYSIS</SheetTitle>
              <SheetDescription id="mobile-menu-description" className="mt-1 text-[0.62rem] font-semibold tracking-[0.25em] text-gold-deep">THERAPEIA</SheetDescription>
            </div>
            <SheetClose asChild>
              <Button variant="ghost" size="icon-lg" className="size-11 rounded-full hover:bg-forest/5" aria-label="Fechar menu"><X aria-hidden="true" className="size-5" /></Button>
            </SheetClose>
          </SheetHeader>
          <nav aria-label="Navegação mobile" className="flex flex-col px-5 py-7">
            {navigation.map((item, index) => (
              <SheetClose asChild key={item.label}>
                <Link href={item.href} className="flex min-h-14 items-center justify-between border-b border-sand font-serif text-2xl outline-none transition-colors hover:text-gold-deep focus-visible:bg-white">
                  {item.label}<span className="font-sans text-xs text-olive/60">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              </SheetClose>
            ))}
          </nav>
          <div className="mt-auto p-5">
            <Button asChild className="h-12 w-full rounded-full bg-forest text-cream hover:bg-forest-soft">
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
            </Button>
            <p className="mt-4 text-center text-xs leading-5 text-ink-muted">Atendimento particular e individualizado.</p>
          </div>
        </MenuSurface>
      </Dialog.Portal>
    </Sheet>
  );
}
