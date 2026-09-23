import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/data/services";
import { MotionSection } from "@/components/motion/motion-section";
import { Reveal, StaggerReveal } from "@/components/motion/elements";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça as abordagens disponíveis na Physis Therapeia. Cada técnica é indicada a partir da conversa e da avaliação individual.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Abordagens escolhidas para cada necessidade."
        description="A Physis Therapeia não trabalha com técnicas automáticas. A escolha de cada recurso começa pela compreensão do seu contexto, da sua rotina e do que o corpo apresenta."
      />
      <MotionSection className="bg-white py-16 sm:py-24 lg:py-28">
        <Container>
          <StaggerReveal className="grid gap-x-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </StaggerReveal>
          <Reveal className="mt-16 max-w-3xl border-l-2 border-gold pl-6 sm:mt-20 sm:pl-8">
            <p className="font-serif text-2xl leading-snug text-forest sm:text-3xl">
              A lista de serviços não substitui a avaliação. Em alguns casos, a melhor orientação pode ser diferente da técnica inicialmente imaginada.
            </p>
          </Reveal>
        </Container>
      </MotionSection>
      <CTASection />
    </main>
  );
}
