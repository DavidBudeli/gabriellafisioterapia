import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { MotionSection } from "@/components/motion/motion-section";
import { StaggerReveal } from "@/components/motion/elements";

export function ServicesSection() {
  return (
    <MotionSection id="servicos" className="scroll-mt-24 bg-cream py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Abordagens e tratamentos"
            title="A técnica certa nasce de uma boa avaliação."
            description="Os recursos são escolhidos conforme o que o seu corpo e o seu momento pedem — não como um catálogo de procedimentos."
          />
          <Link
            href="/servicos"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-sm text-sm font-semibold text-forest underline-offset-4 outline-none hover:text-gold-deep hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:self-auto"
          >
            Ver todos os serviços
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <StaggerReveal className="mt-12 grid gap-x-7 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </StaggerReveal>
      </Container>
    </MotionSection>
  );
}
