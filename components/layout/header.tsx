"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,border-color,box-shadow] duration-300",
        scrolled &&
          "border-sand/80 bg-cream/90 shadow-[0_10px_30px_rgba(18,54,35,0.05)] backdrop-blur-md",
      )}
    >
      <Container className="flex h-[78px] items-center justify-between gap-5 sm:h-[88px]">
        <BrandMark compact />

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-sm text-sm font-medium text-forest/78 underline-offset-8 outline-none transition-colors hover:text-forest hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-11 rounded-full bg-forest px-6 text-cream shadow-none hover:bg-forest-soft sm:inline-flex"
          >
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              Agendar atendimento
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="size-11 rounded-full border-forest/18 bg-cream/70 text-forest shadow-none hover:bg-white lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[min(88vw,390px)] border-sand bg-cream p-0 text-forest"
            >
              <SheetHeader className="flex-row items-center justify-between border-b border-sand px-5 py-5 text-left">
                <div>
                  <SheetTitle className="font-serif text-2xl tracking-[0.08em] text-forest">
                    PHYSIS
                  </SheetTitle>
                  <SheetDescription className="mt-1 text-[0.62rem] font-semibold tracking-[0.25em] text-gold-deep">
                    THERAPEIA
                  </SheetDescription>
                </div>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon-lg"
                    className="size-11 rounded-full hover:bg-forest/5"
                    aria-label="Fechar menu"
                  >
                    <X aria-hidden="true" className="size-5" />
                  </Button>
                </SheetClose>
              </SheetHeader>

              <nav aria-label="Navegação mobile" className="flex flex-col px-5 py-7">
                {navigation.map((item, index) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className="flex min-h-14 items-center justify-between border-b border-sand font-serif text-2xl outline-none transition-colors hover:text-gold-deep focus-visible:bg-white"
                    >
                      {item.label}
                      <span className="font-sans text-xs text-olive/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto p-5">
                <Button
                  asChild
                  className="h-12 w-full rounded-full bg-forest text-cream hover:bg-forest-soft"
                >
                  <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                    Agendar pelo WhatsApp
                  </a>
                </Button>
                <p className="mt-4 text-center text-xs leading-5 text-ink-muted">
                  Atendimento particular e individualizado.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}

