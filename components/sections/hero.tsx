import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-14 pt-[7.2rem] sm:pb-20 sm:pt-36 lg:min-h-[800px] lg:pb-24 lg:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-28 size-[420px] rounded-full border border-gold/16 sm:size-[600px] lg:-right-28 lg:top-20 lg:size-[760px]"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.04fr_0.86fr] lg:gap-16 xl:gap-24">
        <div className="relative z-10 max-w-3xl lg:max-w-none">
          <div className="reveal-up inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-olive">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Atendimento particular e individualizado
          </div>
          <h1 className="reveal-up reveal-delay-1 mt-7 max-w-[850px] font-serif text-[clamp(3.3rem,9vw,7.6rem)] leading-[0.86] tracking-[-0.055em] text-forest text-balance lg:text-[clamp(4.6rem,6.8vw,7.2rem)]">
            Fisioterapia que entende <em className="font-normal text-gold-deep">você</em> antes de tratar a sua dor.
          </h1>
          <p className="reveal-up reveal-delay-2 mt-7 max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
            Um atendimento individualizado para compreender seu corpo, sua rotina e a origem do desconforto antes de definir a melhor abordagem.
          </p>
          <div className="reveal-up reveal-delay-3 mt-8 flex flex-col gap-3 min-[430px]:flex-row sm:mt-10">
            <Button
              asChild
              className="h-13 rounded-full bg-forest px-7 text-[0.92rem] text-cream shadow-none hover:bg-forest-soft"
            >
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" className="size-4" />
                Agendar avaliação
              </a>
            </Button>
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
          <p className="reveal-up reveal-delay-3 mt-4 text-xs text-ink-muted/80">
            Atendimento particular. A abordagem é definida após conversa e avaliação.
          </p>
        </div>

        <div className="reveal-up reveal-delay-2 relative mx-auto w-full max-w-[570px] lg:mx-0 lg:justify-self-end">
          <div className="absolute -left-5 top-12 z-10 hidden rounded-full border border-gold/35 bg-cream/92 px-4 py-3 shadow-soft backdrop-blur-sm sm:block lg:-left-10">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-olive">
              Primeiro entender
            </p>
            <p className="mt-1 font-serif text-lg text-forest">Depois tratar.</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[12rem_12rem_1.5rem_1.5rem] border border-gold/25 bg-sage/35 shadow-[0_30px_70px_rgba(18,54,35,0.13)]">
            <Image
              src="/images/about/gabriella.jpg"
              alt="Gabriella, profissional da Physis Therapeia"
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 42vw"
              className="object-cover object-[center_22%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/12 to-transparent px-6 pb-6 pt-24 text-cream sm:px-8 sm:pb-8">
              <p className="font-serif text-2xl">Gabriella</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/70">
                Physis Therapeia
              </p>
            </div>
          </div>
          <div
            className="absolute -bottom-5 -right-4 -z-10 size-32 rounded-full bg-gold/16 sm:-right-8 sm:size-44"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}

