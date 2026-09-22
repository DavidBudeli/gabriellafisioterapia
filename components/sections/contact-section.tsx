import { Camera, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const contacts = [
  {
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsappUrl,
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagramUrl,
    icon: Camera,
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeading
          eyebrow="Contato"
          title="Converse diretamente com a Physis."
          description="Se você quer entender melhor como funciona o atendimento, fale com a Gabriella pelos canais oficiais."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-52 flex-col justify-between rounded-xl border border-sand bg-cream p-6 outline-none transition-[border-color,transform] hover:-translate-y-1 hover:border-gold/55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-olive">{label}</span>
                <span className="mt-2 block font-serif text-2xl text-forest group-hover:text-gold-deep">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
