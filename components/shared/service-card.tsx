import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { ServiceIcon } from "@/components/shared/service-icon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="service-card group relative flex min-h-[300px] flex-col border-t border-sand bg-white/50 px-1 py-7 sm:min-h-[330px] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-full border border-gold/45 text-gold-deep transition-colors duration-300 group-hover:bg-forest group-hover:text-gold-light">
          <ServiceIcon name={service.icon} />
        </span>
        <span className="font-serif text-sm italic text-olive/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive">
        {service.eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.02em] text-forest">
        {service.name}
      </h3>
      <p className="mt-5 text-[0.96rem] leading-7 text-ink-muted">
        {service.shortDescription}
      </p>
      <Link
        href={`/servicos/${service.slug}`}
        className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-7 text-sm font-semibold text-forest underline-offset-4 outline-none transition-colors hover:text-gold-deep hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        aria-label={`Saiba mais sobre ${service.name}`}
      >
        Saiba mais
        <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.8} />
      </Link>
    </article>
  );
}

