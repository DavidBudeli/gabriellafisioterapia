import { Activity, Bandage, Hand, Waves } from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/data/services";

const icons = {
  release: Activity,
  tape: Bandage,
  massage: Hand,
  drainage: Waves,
} as const;

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />;
}

