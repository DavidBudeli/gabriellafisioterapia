import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection } from "@/components/motion/motion-section";
import { ImageReveal, ParallaxImage, Reveal } from "@/components/motion/elements";

export function AboutSection() {
  return (
    <MotionSection id="sobre" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-36">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
          <ImageReveal className="relative aspect-[5/6] rounded-[1.25rem] bg-forest-deep shadow-soft">
            <ParallaxImage>
            <Image
              src="/images/brand/physis-symbol.jpg"
              alt="Ilustração anatômica da identidade Physis Therapeia"
              fill
              sizes="(max-width: 1023px) 92vw, 40vw"
              className="object-cover"
            />
            </ParallaxImage>
          </ImageReveal>
          <Reveal as="blockquote" delay={0.2} className="absolute -bottom-7 right-0 max-w-[82%] rounded-l-xl border-l-4 border-gold bg-cream px-6 py-5 font-serif text-xl leading-tight text-forest shadow-soft sm:-right-7 sm:max-w-[76%] sm:text-2xl">
            “Tratar começa por entender.”
          </Reveal>
        </div>

        <div className="pt-6 lg:pt-0">
          <SectionHeading
            eyebrow="Sobre a abordagem"
            title="Seu corpo conta uma história."
            description="Uma dor não existe isoladamente. Rotina, histórico, hábitos, tratamentos anteriores e características individuais podem ajudar a compreender o que está acontecendo."
          />
          <div className="mt-7 space-y-5 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
            <p>
              Na Physis Therapeia, o atendimento começa pela escuta. A partir dela, Gabriella observa a necessidade de cada pessoa e define uma abordagem adequada para aquele momento.
            </p>
            <p>
              O objetivo não é aplicar uma técnica automaticamente, mas compreender o contexto antes de decidir como cuidar.
            </p>
          </div>
          <Link
            href="/sobre"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-forest underline-offset-4 outline-none hover:text-gold-deep hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Conheça a Physis Therapeia
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </MotionSection>
  );
}
