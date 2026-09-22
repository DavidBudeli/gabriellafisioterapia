import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gold py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -bottom-48 -right-20 size-[440px] rounded-full border border-forest/14" aria-hidden="true" />
      <Container className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.23em] text-forest/70">
            Sua saúde também é um investimento
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[0.92] tracking-[-0.04em] text-forest text-balance">
            Seu atendimento começa entendendo o que seu corpo precisa.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-forest/75 sm:text-lg">
            Converse diretamente com a Physis Therapeia e agende sua avaliação.
          </p>
        </div>
        <Button
          asChild
          className="h-13 shrink-0 self-start rounded-full bg-forest px-7 text-cream shadow-none hover:bg-forest-deep lg:self-auto"
        >
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" className="size-4" />
            Agendar pelo WhatsApp
          </a>
        </Button>
      </Container>
    </section>
  );
}

