import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionSection } from "@/components/motion/motion-section";
import { BrandSignature, StaggerReveal } from "@/components/motion/elements";

const flow = ["Conversa", "Avaliação", "Compreensão", "Abordagem", "Orientação"];

export function DifferentialSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-forest-deep py-20 sm:py-28 lg:py-36">
      <div className="dark-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <SectionHeading
            eyebrow="O que orienta o cuidado"
            title="Não se trata de contar sessões."
            theme="dark"
          />
          <p className="max-w-xl text-base leading-7 text-cream/72 sm:text-lg sm:leading-8">
            Cada pessoa responde de uma maneira diferente. Por isso, o atendimento não começa com uma quantidade predeterminada de sessões, mas com a compreensão real da necessidade de cada paciente.
          </p>
        </div>

        <div className="relative mt-14 sm:mt-20">
        <BrandSignature className="absolute left-0 top-0 w-full bg-gold/65" />
        <StaggerReveal as="ol" progress className="grid border-t border-cream/15 sm:grid-cols-2 lg:grid-cols-5">
          {flow.map((step, index) => (
            <li
              key={step}
              className="group relative border-b border-cream/15 py-7 sm:min-h-40 sm:border-r sm:px-6 lg:border-b-0 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="font-serif text-sm italic text-gold-light/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-7 font-serif text-2xl text-cream transition-transform duration-300 group-hover:translate-x-1">
                {step}
              </p>
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
            </li>
          ))}
        </StaggerReveal>
        </div>
      </Container>
    </MotionSection>
  );
}
