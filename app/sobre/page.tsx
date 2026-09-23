import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/data/site";
import { MotionSection } from "@/components/motion/motion-section";
import { ImageReveal, ParallaxImage, Reveal, StaggerReveal, TextReveal } from "@/components/motion/elements";

const complementaryTraining = [
  { name: "Liberação miofascial", year: "2023" },
  { name: "Bandagem funcional — Kinesiotape", year: "2021" },
  { name: "Massagem pontual Sniper", year: "2026" },
] as const;

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a abordagem de atendimento individualizado da Physis Therapeia e a forma como Gabriella conduz cada avaliação.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sobre a Physis Therapeia"
        title="Escutar o corpo é parte do tratamento."
        description="A Physis Therapeia nasceu de uma ideia simples e essencial: antes de escolher uma técnica, é preciso compreender a pessoa."
      />
      <MotionSection className="bg-white py-16 sm:py-24 lg:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.1fr] lg:gap-24">
          <ImageReveal className="relative mx-auto aspect-[4/5] w-full max-w-[510px] overflow-hidden rounded-[10rem_10rem_1.25rem_1.25rem] border border-sand bg-sage/30">
            <ParallaxImage>
            <Image
              src="/images/about/gabriella.jpg"
              alt="Gabriella, da Physis Therapeia"
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 40vw"
              className="object-cover object-[center_22%]"
            />
            </ParallaxImage>
          </ImageReveal>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-olive">
              {siteConfig.professional}
            </p>
            <p className="mt-3 text-sm font-medium tracking-[0.08em] text-gold-deep">
              Fisioterapeuta · {siteConfig.professionalRegistry}
            </p>
            <TextReveal className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.96] tracking-[-0.035em] text-forest">
              Um olhar atento ao contexto, não apenas ao sintoma.
            </TextReveal>
            <Reveal className="mt-7 space-y-5 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              <p>Rotina, histórico, tratamentos anteriores, nível da dor e características individuais ajudam a formar uma visão mais completa do que está acontecendo.</p>
              <p>Durante o atendimento, Gabriella conversa, avalia e explica. A técnica vem depois — escolhida de acordo com o que foi observado e com a necessidade daquele momento.</p>
              <p>Algumas pessoas podem precisar de uma consulta; outras, de acompanhamento. A prioridade é orientar com responsabilidade, sem promessas e sem planos predeterminados.</p>
            </Reveal>
            <Reveal as="blockquote" className="mt-9 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-snug text-forest sm:text-3xl">
              “Fisioterapia que te entende.”
            </Reveal>

            <div className="mt-10 border-t border-sand pt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                Formações complementares
              </h3>
              <StaggerReveal as="ul" className="mt-5 grid gap-3 sm:grid-cols-3">
                {complementaryTraining.map(({ name, year }) => (
                  <li key={name} className="rounded-xl border border-sand bg-cream p-4">
                    <span className="block text-sm font-semibold leading-5 text-forest">{name}</span>
                    <span className="mt-2 block text-xs font-semibold tracking-[0.16em] text-gold-deep">{year}</span>
                  </li>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </Container>
      </MotionSection>
      <CTASection />
    </main>
  );
}
