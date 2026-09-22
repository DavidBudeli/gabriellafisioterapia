import { ClipboardList, Compass, MessageSquareText, Search } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  {
    title: "Conversa inicial",
    description: "Entender rotina, histórico, tratamentos anteriores e principais queixas.",
    icon: MessageSquareText,
  },
  {
    title: "Avaliação",
    description: "Observar e compreender as características individuais do paciente.",
    icon: Search,
  },
  {
    title: "Definição da abordagem",
    description: "Selecionar os recursos adequados para aquela necessidade.",
    icon: Compass,
  },
  {
    title: "Orientação",
    description: "Explicar o que foi observado e orientar os próximos passos.",
    icon: ClipboardList,
  },
];

export function ProcessSection() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <SectionHeading
            eyebrow="Como funciona"
            title="Cada atendimento começa com uma conversa."
            description="Entender o contexto vem antes de escolher a técnica. Esse cuidado orienta todo o atendimento."
          />
          <ol className="grid gap-px overflow-hidden rounded-xl border border-sand bg-sand sm:grid-cols-2">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <li key={title} className="group relative min-h-[250px] bg-cream/95 p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-sm italic text-olive/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 font-serif text-2xl leading-tight text-forest">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink-muted">{description}</p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

