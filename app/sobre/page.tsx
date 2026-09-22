import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";

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
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.1fr] lg:gap-24">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[510px] overflow-hidden rounded-[10rem_10rem_1.25rem_1.25rem] border border-sand bg-sage/30">
            <Image
              src="/images/about/gabriella.jpg"
              alt="Gabriella, da Physis Therapeia"
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 40vw"
              className="object-cover object-[center_22%]"
            />
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-olive">Gabriella</p>
            <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.96] tracking-[-0.035em] text-forest">
              Um olhar atento ao contexto, não apenas ao sintoma.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              <p>Rotina, histórico, tratamentos anteriores, nível da dor e características individuais ajudam a formar uma visão mais completa do que está acontecendo.</p>
              <p>Durante o atendimento, Gabriella conversa, avalia e explica. A técnica vem depois — escolhida de acordo com o que foi observado e com a necessidade daquele momento.</p>
              <p>Algumas pessoas podem precisar de uma consulta; outras, de acompanhamento. A prioridade é orientar com responsabilidade, sem promessas e sem planos predeterminados.</p>
            </div>
            <blockquote className="mt-9 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-snug text-forest sm:text-3xl">
              “Fisioterapia que te entende.”
            </blockquote>
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
