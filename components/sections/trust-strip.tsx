import { ClipboardCheck, HeartHandshake, MessageSquareText, Waypoints } from "lucide-react";
import { Container } from "@/components/shared/container";

const trustItems = [
  { label: "Atendimento individualizado", icon: HeartHandshake },
  { label: "Escuta e avaliação cuidadosa", icon: MessageSquareText },
  { label: "Abordagem direcionada", icon: Waypoints },
  { label: "Orientação clara ao paciente", icon: ClipboardCheck },
];

export function TrustStrip() {
  return (
    <section aria-label="Diferenciais do atendimento" className="border-y border-sand bg-white">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map(({ label, icon: Icon }, index) => (
          <div
            key={label}
            className="flex min-h-20 items-center gap-3 border-b border-sand py-5 last:border-b-0 sm:min-h-24 sm:px-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            <span className="font-serif text-xs italic text-gold-deep">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Icon aria-hidden="true" className="size-4 text-olive" strokeWidth={1.6} />
            <span className="text-sm font-medium leading-5 text-forest">{label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}

