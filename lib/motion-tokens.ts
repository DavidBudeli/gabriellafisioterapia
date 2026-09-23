export const motion = {
  duration: { micro: 0.25, fast: 0.35, normal: 0.8, slow: 1.15 },
  ease: { standard: "power3.out", strong: "power4.out", smooth: "power2.inOut" },
  distance: { desktop: 32, mobile: 16, parallax: 24, magnetic: 3 },
  stagger: { desktop: 0.11, mobile: 0.07 },
  media: {
    desktop: "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    reduce: "(prefers-reduced-motion: reduce)",
    all: "(min-width: 0px)",
  },
} as const;
