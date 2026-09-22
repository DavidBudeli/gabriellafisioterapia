import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Physis Therapeia pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full border border-white/25 bg-forest text-cream shadow-[0_10px_28px_rgba(18,54,35,0.24)] outline-none transition-transform hover:-translate-y-1 hover:bg-forest-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:flex"
    >
      <MessageCircle aria-hidden="true" className="size-6" strokeWidth={1.8} />
    </a>
  );
}
