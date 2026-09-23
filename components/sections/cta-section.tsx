import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion/motion-section";
import { MotionSequence, Reveal, TextReveal } from "@/components/motion/elements";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function CTASection() {
  return (
    <MotionSection variant="cta" className="relative overflow-hidden bg-gold py-16 sm:py-20 lg:py-24">
      <div data-float className="pointer-events-none absolute -bottom-48 -right-20 size-[440px] rounded-full border border-forest/14" aria-hidden="true" />
      <Container className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
        <MotionSequence className="max-w-4xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.23em] text-forest/70">
            Sua saúde também é um investimento
          </p>
          <TextReveal className="mt-5 font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[0.92] tracking-[-0.04em] text-forest text-balance">
            Seu atendimento começa entendendo o que seu corpo precisa.
          </TextReveal>
          <Reveal as="p" className="mt-6 max-w-2xl text-base leading-7 text-forest/75 sm:text-lg">
            Converse diretamente com a Physis Therapeia e agende sua avaliação.
          </Reveal>
        </MotionSequence>
        <Reveal data-cta-button className="shrink-0 self-start lg:self-auto">
        <MagneticButton>
        <Button
          asChild
          className="h-13 shrink-0 self-start rounded-full bg-forest px-7 text-cream shadow-none hover:bg-forest-deep lg:self-auto"
        >
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" className="size-4" />
            Agendar pelo WhatsApp
          </a>
        </Button>
        </MagneticButton>
        </Reveal>
      </Container>
    </MotionSection>
  );
}
