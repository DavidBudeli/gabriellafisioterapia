import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Physis Therapeia pelo WhatsApp ou Instagram para saber mais sobre o atendimento.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu atendimento?"
        description="Use os canais oficiais para tirar dúvidas e agendar uma avaliação."
      />
      <ContactSection />
      <CTASection />
    </main>
  );
}
