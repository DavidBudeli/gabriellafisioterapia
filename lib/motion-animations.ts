import { gsap, ScrollTrigger } from "@/lib/gsap";
import { motion } from "@/lib/motion-tokens";

type Entry = { element: HTMLElement; animation: gsap.core.Timeline };

export function animateSection(root: HTMLElement, desktop: boolean, variant: "section" | "hero" | "cta") {
  const entries: Entry[] = [];
  const distance = desktop ? motion.distance.desktop : motion.distance.mobile;
  const stagger = desktop ? motion.stagger.desktop : motion.stagger.mobile;
  const duration = desktop ? motion.duration.normal : 0.7;
  const owned = (selector: string) => Array.from(root.querySelectorAll<HTMLElement>(selector))
    .filter((element) => element.closest("[data-motion-scope]") === root);
  const defaults = { duration, ease: motion.ease.standard };
  const settled = { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "opacity,transform,clipPath" };

  function addReveal(timeline: gsap.core.Timeline, element: HTMLElement, position: number) {
    const kind = element.dataset.motion;
    if (kind === "sequence") {
      const children = Array.from(element.querySelectorAll<HTMLElement>("[data-motion]"))
        .filter((child) => child.parentElement?.closest("[data-motion]") === element);
      children.forEach((child, index) => addReveal(timeline, child, position + index * stagger));
    } else if (kind === "text") {
      const inner = element.querySelector<HTMLElement>(".motion-text-inner");
      if (inner) timeline.fromTo(inner, { yPercent: desktop ? 110 : 16, opacity: 0 }, {
        yPercent: 0, opacity: 1, duration: desktop ? motion.duration.slow : 0.7,
        ease: motion.ease.strong, clearProps: "opacity,transform",
      }, position);
    } else if (kind === "image") {
      timeline.fromTo(element, {
        opacity: 0,
        ...(desktop ? { clipPath: "inset(0 100% 0 0)" } : { y: 16 }),
      }, { ...settled, clipPath: "inset(0 0% 0 0)", duration: desktop ? 1.2 : 0.7 }, position);
      // Animate the actual image independently from the parallax container.
      const image = element.querySelector("img");
      if (desktop && image) timeline.fromTo(image, { scale: 1.04 }, { scale: 1, duration: 1.3, clearProps: "transform" }, position);
    } else {
      timeline.fromTo(element, { opacity: 0, y: distance, ...(element.dataset.ctaButton !== undefined ? { scale: 0.96 } : {}) }, settled, position);
    }
  }

  function attach(element: HTMLElement, timeline: gsap.core.Timeline, progress = false) {
    entries.push({ element, animation: timeline });
    if (element.getBoundingClientRect().bottom <= 0) {
      timeline.progress(1);
      return;
    }
    ScrollTrigger.create({
      id: "physis-reveal", trigger: element, animation: timeline,
      start: "top 88%", end: progress ? "bottom 78%" : "bottom 20%",
      ...(progress ? { scrub: 0.45, once: true } : { once: true, toggleActions: "play none none none" }),
    });
  }

  if (variant === "hero") {
    const timeline = gsap.timeline({ defaults });
    const steps = ["eyebrow", "title", "subtitle", "buttons", "image", "decoration"];
    steps.forEach((step, index) => {
      owned(`[data-hero="${step}"]`).forEach((element) => {
        // On stacked layouts the photo should reveal when it actually becomes visible.
        if (!desktop && step === "image") {
          const imageTimeline = gsap.timeline({ paused: true, defaults });
          addReveal(imageTimeline, element, 0);
          attach(element, imageTimeline);
        } else {
          addReveal(timeline, element, index * (desktop ? 0.14 : 0.09));
        }
      });
    });
    owned("[data-signature]").forEach((line) => {
      timeline.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.15, clearProps: "transform" }, 0.05);
    });
    // Restored scroll and anchor navigation must not replay an offscreen hero.
    if (root.getBoundingClientRect().bottom <= 0) timeline.progress(1);
    entries.push({ element: root, animation: timeline });
  } else {
    const topLevel = owned("[data-motion]").filter((element) => {
      const parent = element.parentElement?.closest("[data-motion], [data-motion-scope]");
      return !parent || parent === root || !parent.hasAttribute("data-motion");
    });
    for (const element of topLevel) {
      const kind = element.dataset.motion;
      if (kind === "stagger" || kind === "progress") {
        const children = Array.from(element.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
        const timeline = gsap.timeline({ paused: true, defaults });
        const alternate = desktop && element.dataset.alternate === "true";
        children.forEach((child, index) => {
          timeline.fromTo(child, { opacity: 0, y: distance, x: alternate ? (index % 2 ? 20 : -20) : 0 }, settled,
            index * (kind === "progress" ? 0.38 : stagger));
          const line = child.querySelector("[data-step-line]");
          if (line) timeline.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.7 }, index * 0.38);
        });
        attach(element, timeline, kind === "progress");
      } else {
        const timeline = gsap.timeline({ paused: true, defaults });
        addReveal(timeline, element, Number(element.dataset.delay || 0));
        attach(element, timeline);
      }
    }
    for (const line of owned("[data-signature]")) {
      const timeline = gsap.timeline({ paused: true, defaults });
      timeline.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.15, clearProps: "transform" });
      attach(line, timeline);
    }
  }

  if (desktop) {
    for (const element of owned("[data-parallax]")) {
      gsap.fromTo(element, { y: -motion.distance.parallax / 2, scale: 1.06 }, {
        y: motion.distance.parallax / 2, ease: "none",
        scrollTrigger: { id: "physis-parallax", trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: 0.7 },
      });
    }
    for (const element of owned("[data-float]")) {
      const tween = gsap.to(element, { y: 8, rotation: 1, duration: 9, ease: motion.ease.smooth, repeat: -1, yoyo: true, paused: true });
      ScrollTrigger.create({ id: "physis-decoration", trigger: root, start: "top bottom", end: "bottom top",
        onToggle: ({ isActive }) => { if (isActive) tween.play(); else tween.pause(); },
      });
    }
    const indicator = root.querySelector("[data-scroll-line]");
    if (indicator) {
      const tween = gsap.fromTo(indicator, { scaleY: 0.35, opacity: 0.4 }, { scaleY: 1, opacity: 0.8, duration: 1.4, ease: motion.ease.smooth, repeat: -1, yoyo: true, paused: true });
      ScrollTrigger.create({ id: "physis-indicator", trigger: root, start: "top bottom", end: "bottom top",
        onToggle: ({ isActive }) => { if (isActive) tween.play(); else tween.pause(); },
      });
    }
  }

  // Keyboard navigation reveals a focused control immediately, even before scroll.
  const onFocus = (event: FocusEvent) => {
    if (!(event.target instanceof Node)) return;
    for (const { element, animation } of entries) {
      if (element.contains(event.target)) {
        animation.scrollTrigger?.kill();
        animation.progress(1);
      }
    }
  };
  root.addEventListener("focusin", onFocus);
  return () => root.removeEventListener("focusin", onFocus);
}
