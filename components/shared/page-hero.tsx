import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/motion/motion-section";
import { TextReveal } from "@/components/motion/elements";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <MotionSection variant="hero" className="relative overflow-hidden bg-cream pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pb-28">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-20 size-[420px] rounded-full border border-gold/18 sm:size-[640px]" aria-hidden="true" />
      <Container className="relative">
        <p data-hero="eyebrow" className="text-[0.7rem] font-semibold uppercase tracking-[0.23em] text-olive">{eyebrow}</p>
        <TextReveal as="h1" data-hero="title" className="mt-6 max-w-5xl font-serif text-[clamp(3.4rem,8vw,7rem)] leading-[0.9] tracking-[-0.05em] text-forest text-balance">
          {title}
        </TextReveal>
        <p data-hero="subtitle" className="mt-7 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      </Container>
    </MotionSection>
  );
}
