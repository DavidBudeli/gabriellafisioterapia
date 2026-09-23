import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion/motion-section";
import { BrandSignature, ImageReveal, ParallaxImage, TextReveal } from "@/components/motion/elements";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function Hero() {
  return (
    <MotionSection variant="hero" className="relative overflow-hidden bg-cream pb-14 pt-[7.2rem] sm:pb-20 sm:pt-36 lg:min-h-[800px] lg:pb-24 lg:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
      <div
        data-float
        className="pointer-events-none absolute -right-32 top-28 size-[420px] rounded-full border border-gold/16 sm:size-[600px] lg:-right-28 lg:top-20 lg:size-[760px]"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.04fr_0.86fr] lg:gap-16 xl:gap-24">
        <div className="relative z-10 max-w-3xl lg:max-w-none">
          <div data-hero="eyebrow" className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-olive">
            <BrandSignature />
            Atendimento particular e individualizado
          </div>
          <TextReveal as="h1" data-hero="title" className="mt-7 max-w-[850px] font-serif text-[clamp(3.3rem,9vw,7.6rem)] leading-[0.86] tracking-[-0.055em] text-forest text-balance lg:text-[clamp(4.6rem,6.8vw,7.2rem)]">
            Fisioterapia que entende <em className="font-normal text-gold-deep">você</em> antes de tratar a sua dor.
          </TextReveal>
          <p data-hero="subtitle" className="mt-7 max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
            Um atendimento individualizado para compreender seu corpo, sua rotina e a origem do desconforto antes de definir a melhor abordagem.
          </p>
          <div data-hero="buttons" className="mt-8 flex flex-col gap-3 min-[430px]:flex-row sm:mt-10">
            <MagneticButton>
            <Button
              asChild
              className="h-13 rounded-full bg-forest px-7 text-[0.92rem] text-cream shadow-none hover:bg-forest-soft"
            >
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" className="size-4" />
                Agendar avaliação
              </a>
            </Button>
            </MagneticButton>
            <Button
              asChild
              variant="outline"
              className="h-13 rounded-full border-forest/25 bg-transparent px-7 text-[0.92rem] text-forest shadow-none hover:border-forest hover:bg-white/60"
            >
              <Link href="#servicos">
                Conhecer tratamentos
                <ArrowDownRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-ink-muted/80">
            Atendimento particular. A abordagem é definida após conversa e avaliação.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[570px] lg:mx-0 lg:justify-self-end">
          <div data-hero="decoration" className="absolute -left-5 top-12 z-10 hidden rounded-full border border-gold/35 bg-cream/92 px-4 py-3 shadow-soft backdrop-blur-sm sm:block lg:-left-10">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-olive">
              Primeiro entender
            </p>
            <p className="mt-1 font-serif text-lg text-forest">Depois tratar.</p>
          </div>
          <ImageReveal data-hero="image" className="relative aspect-[4/5] rounded-[12rem_12rem_1.5rem_1.5rem] border border-gold/25 bg-sage/35 shadow-[0_30px_70px_rgba(18,54,35,0.13)]">
            <ParallaxImage>
            <Image
              src="/images/about/gabriella.jpg"
              alt="Gabriella, profissional da Physis Therapeia"
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 42vw"
              className="object-cover object-[center_22%]"
            />
            </ParallaxImage>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/12 to-transparent px-6 pb-6 pt-24 text-cream sm:px-8 sm:pb-8">
              <p className="font-serif text-2xl">Gabriella</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/70">
                Physis Therapeia
              </p>
            </div>
          </ImageReveal>
          <div
            className="absolute -bottom-5 -right-4 -z-10 size-32 rounded-full bg-gold/16 sm:-right-8 sm:size-44"
            aria-hidden="true"
          />
        </div>
      </Container>
      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-olive/70 lg:flex" aria-hidden="true">
        <span data-scroll-line className="h-8 w-px origin-top bg-gold" />
        Scroll
      </div>
    </MotionSection>
  );
}
