import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importing is SSR-safe; plugin registration only happens inside client effects.
export function registerMotion() {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
