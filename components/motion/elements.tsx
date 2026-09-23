import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ElementProps = HTMLAttributes<HTMLElement> & { children: ReactNode; delay?: number };

// These markers render on the server. Their nearest MotionSection owns GSAP.
// The existing element is reused so grid, flex and heading semantics stay intact.
export function Reveal({ as: Tag = "div", delay = 0, ...props }: ElementProps & { as?: "div" | "p" | "blockquote" }) {
  return <Tag data-motion="reveal" data-delay={delay} {...props} />;
}

export function TextReveal({ as: Tag = "h2", children, ...props }: ElementProps & { as?: "h1" | "h2" | "h3" }) {
  return (
    <Tag data-motion="text" {...props}>
      <span className="motion-text-mask"><span className="motion-text-inner">{children}</span></span>
    </Tag>
  );
}

export function MotionSequence(props: ElementProps) {
  return <div data-motion="sequence" {...props} />;
}

export function StaggerReveal({ as: Tag = "div", alternate = false, progress = false, ...props }: ElementProps & { as?: "div" | "ol" | "ul"; alternate?: boolean; progress?: boolean }) {
  return <Tag data-motion={progress ? "progress" : "stagger"} data-alternate={alternate || undefined} {...props} />;
}

export function ImageReveal({ className, ...props }: ElementProps) {
  return <div data-motion="image" className={cn("overflow-hidden", className)} {...props} />;
}

export function ParallaxImage({ children }: { children: ReactNode }) {
  return <div data-parallax className="absolute inset-0">{children}</div>;
}

export function BrandSignature({ className }: { className?: string }) {
  return <span data-signature aria-hidden="true" className={cn("block h-px w-8 origin-left bg-gold", className)} />;
}
