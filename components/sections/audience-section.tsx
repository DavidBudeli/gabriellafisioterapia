import { BriefcaseBusiness, Dumbbell, History, Laptop, PersonStanding, Repeat2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const profiles = [
  { label: "Quem trabalha sentado ou no computador", icon: Laptop },
  { label: "Quem tem uma rotina fisicamente exigente", icon: BriefcaseBusiness },
  { label: "Praticantes de atividade física", icon: Dumbbell },
  { label: "Atletas amadores ou profissionais", icon: PersonStanding },
  { label: "Pessoas com dores recorrentes", icon: Repeat2 },
  { label: "Quem já passou por tratamentos anteriores", icon: History },
];

export function AudienceSection() {
  return (
    <section className="border-y border-sand bg-sage/25 py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Para diferentes rotinas"
          title="Fisioterapia para diferentes momentos da sua vida."
          description="O cuidado não é exclusivo para atletas. Ele considera como você trabalha, se movimenta e convive com o desconforto no dia a dia."
          align="center"
          className="max-w-3xl"
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex min-h-24 items-center gap-4 rounded-lg border border-forest/10 bg-white/70 px-5 py-5 transition-colors hover:border-gold/45 hover:bg-white"
            >
              <Icon aria-hidden="true" className="size-5 shrink-0 text-gold-deep" strokeWidth={1.5} />
              <p className="text-sm font-medium leading-6 text-forest">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

