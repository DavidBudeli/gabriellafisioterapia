"use client";

import { useSyncExternalStore } from "react";
import { motion } from "@/lib/motion-tokens";

function subscribe(callback: () => void) {
  const query = window.matchMedia(motion.media.reduce);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(motion.media.reduce).matches,
    () => true,
  );
}
