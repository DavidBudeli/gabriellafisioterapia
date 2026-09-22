import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center bg-cream pb-20 pt-36 sm:pt-44">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">Página não encontrada</p>
        <h1 className="mt-6 max-w-3xl font-serif text-[clamp(3.5rem,9vw,7rem)] leading-[0.9] tracking-[-0.05em] text-forest">
          Este caminho não existe.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-ink-muted">
          Volte para a página inicial ou conheça as abordagens disponíveis na Physis Therapeia.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-forest px-6 text-cream hover:bg-forest-soft">
            <Link href="/">Voltar ao início</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full border-forest/25 bg-transparent px-6 text-forest shadow-none hover:bg-white">
            <Link href="/servicos">Ver serviços</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}

