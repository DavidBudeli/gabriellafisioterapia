import { cn } from "@/lib/utils";
import { MotionSequence, Reveal, TextReveal } from "@/components/motion/elements";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  return (
    <MotionSequence
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal as="p"
          className={cn(
            "mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em]",
            theme === "dark" ? "text-gold-light" : "text-olive",
          )}
        >
          {eyebrow}
        </Reveal>
      ) : null}
      <TextReveal
        className={cn(
          "font-serif text-[clamp(2.25rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.035em] text-balance",
          theme === "dark" ? "text-cream" : "text-forest",
        )}
      >
        {title}
      </TextReveal>
      {description ? (
        <Reveal as="p"
          className={cn(
            "mt-6 text-base leading-7 sm:text-lg sm:leading-8",
            theme === "dark" ? "text-cream/72" : "text-ink-muted",
          )}
        >
          {description}
        </Reveal>
      ) : null}
    </MotionSequence>
  );
}
