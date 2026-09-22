import Image from "next/image";
import { Camera } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function InstagramSection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid overflow-hidden rounded-[1.25rem] bg-forest-deep shadow-soft lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px]">
            <Image
              src="/images/brand/physis-logo.jpg"
              alt="Marca Physis Therapeia"
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="relative flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border border-gold/15" aria-hidden="true" />
            <p className="relative text-[0.68rem] font-semibold uppercase tracking-[0.23em] text-gold-light">
              Acompanhe a Physis Therapeia
            </p>
            <h2 className="relative mt-5 max-w-xl font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.035em] text-cream">
              Cuidado também se constrói com informação.
            </h2>
            <p className="relative mt-6 max-w-lg text-base leading-7 text-cream/68">
              Conteúdos sobre movimento, rotina e fisioterapia, compartilhados de forma clara e responsável.
            </p>
            <Button
              asChild
              variant="outline"
              className="relative mt-8 h-12 self-start rounded-full border-gold/45 bg-transparent px-6 text-cream shadow-none hover:bg-cream hover:text-forest"
            >
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                <Camera aria-hidden="true" className="size-4" />
                {siteConfig.instagramHandle}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
