import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
  className?: string;
};

export function BrandMark({
  inverted = false,
  compact = false,
  className,
}: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label="Physis Therapeia — início"
      className={cn(
        "group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
        className,
      )}
    >
      <span className="relative size-10 overflow-hidden rounded-full border border-gold/45 bg-forest sm:size-11">
        <Image
          src="/images/brand/physis-symbol.jpg"
          alt=""
          fill
          sizes="44px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </span>
      <span className={cn("flex flex-col", compact && "hidden sm:flex")}>
        <span
          className={cn(
            "font-serif text-xl leading-none tracking-[0.13em]",
            inverted ? "text-cream" : "text-forest",
          )}
        >
          PHYSIS
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-semibold tracking-[0.34em]",
            inverted ? "text-gold-light" : "text-gold-deep",
          )}
        >
          THERAPEIA
        </span>
      </span>
    </Link>
  );
}
