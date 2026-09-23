import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/shared/container";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { MotionSection } from "@/components/motion/motion-section";
import { MotionSequence, Reveal, StaggerReveal, TextReveal } from "@/components/motion/elements";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return { title: "Serviço não encontrado" };

  return {
    title: service.name,
    description: service.shortDescription,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.name} | Physis Therapeia`,
      description: service.shortDescription,
      url: `/servicos/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main>
      <MotionSection variant="hero" className="relative overflow-hidden bg-forest-deep pb-16 pt-36 text-cream sm:pb-24 sm:pt-44 lg:pb-28">
        <div className="dark-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 top-16 size-[500px] rounded-full border border-gold/15" aria-hidden="true" />
        <Container className="relative">
          <Link
            href="/servicos"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-cream/68 underline-offset-4 outline-none hover:text-cream hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Todos os serviços
          </Link>
          <div className="mt-8 flex size-13 items-center justify-center rounded-full border border-gold/45 text-gold-light">
            <ServiceIcon name={service.icon} />
          </div>
          <p data-hero="eyebrow" className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.23em] text-gold-light">
            {service.eyebrow}
          </p>
          <TextReveal as="h1" data-hero="title" className="mt-5 max-w-5xl font-serif text-[clamp(3.6rem,9vw,7.8rem)] leading-[0.88] tracking-[-0.05em] text-cream text-balance">
            {service.name}
          </TextReveal>
          <p data-hero="subtitle" className="mt-7 max-w-2xl text-base leading-7 text-cream/68 sm:text-lg sm:leading-8">
            {service.shortDescription}
          </p>
        </Container>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <MotionSequence>
            <Reveal as="p" className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-olive">Entenda a abordagem</Reveal>
            <TextReveal className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.035em] text-forest">
              A técnica vem depois da avaliação.
            </TextReveal>
          </MotionSequence>
          <Reveal>
            <p className="text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">{service.introduction}</p>
            <div className="mt-10 rounded-xl border border-sand bg-cream p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">Importante</p>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{service.note}</p>
            </div>
          </Reveal>
        </Container>
      </MotionSection>

      <MotionSection className="border-y border-sand bg-cream py-16 sm:py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <TextReveal className="font-serif text-[clamp(2.3rem,4vw,3.8rem)] leading-none tracking-[-0.03em] text-forest">
              Para quem pode ser indicada?
            </TextReveal>
            <StaggerReveal as="ul" className="mt-8 space-y-4">
              {service.indications.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink-muted">
                  <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-deep" strokeWidth={1.8} />
                  {item}
                </li>
              ))}
            </StaggerReveal>
          </div>
          <div>
            <TextReveal className="font-serif text-[clamp(2.3rem,4vw,3.8rem)] leading-none tracking-[-0.03em] text-forest">
              Como funciona o atendimento?
            </TextReveal>
            <StaggerReveal as="ol" progress className="mt-8 space-y-0 border-t border-sand">
              {service.approach.map((item, index) => (
                <li key={item} className="flex gap-5 border-b border-sand py-5 text-base leading-7 text-ink-muted">
                  <span className="font-serif text-sm italic text-gold-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </StaggerReveal>
          </div>
        </Container>
      </MotionSection>

      <section className="bg-white py-14 sm:py-18">
        <Container className="flex flex-col gap-6 rounded-xl border border-sand bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-serif text-2xl text-forest">Quer saber se esta abordagem faz sentido para você?</p>
            <p className="mt-2 text-sm leading-6 text-ink-muted">Converse com a Gabriella e explique o que você está sentindo.</p>
          </div>
          <Button asChild className="h-12 shrink-0 self-start rounded-full bg-forest px-6 text-cream hover:bg-forest-soft sm:self-auto">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" className="size-4" />
              Falar pelo WhatsApp
            </a>
          </Button>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
