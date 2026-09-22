import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.7fr_0.8fr] lg:gap-16">
        <div>
          <BrandMark inverted />
          <p className="mt-7 max-w-sm font-serif text-3xl leading-tight text-cream">
            {siteConfig.slogan}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-cream/60">
            Atendimento fisioterapêutico particular, cuidadoso e pensado para cada pessoa.
          </p>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.23em] text-gold-light">
            Navegue
          </p>
          <nav aria-label="Navegação do rodapé" className="mt-5 flex flex-col items-start gap-3">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-sm text-sm text-cream/72 underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.23em] text-gold-light">
            Contato direto
          </p>
          <div className="mt-5 flex flex-col items-start gap-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-3 rounded-sm text-sm text-cream/72 underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <MessageCircle aria-hidden="true" className="size-4 text-gold-light" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-3 rounded-sm text-sm text-cream/72 underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <Camera aria-hidden="true" className="size-4 text-gold-light" />
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-cream/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Physis Therapeia. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            {siteConfig.developer.url ? (
              <a
                href={siteConfig.developer.url}
                target="_blank"
                rel="noreferrer"
                className="text-cream/72 underline-offset-4 hover:underline"
              >
                {siteConfig.developer.name}
              </a>
            ) : (
              <span className="text-cream/72">{siteConfig.developer.name}</span>
            )}
          </p>
        </Container>
      </div>
    </footer>
  );
}
