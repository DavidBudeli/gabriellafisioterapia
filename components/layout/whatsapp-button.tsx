import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Physis Therapeia pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full border border-forest/10 bg-white shadow-[0_10px_28px_rgba(18,54,35,0.24)] outline-none transition-transform hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(18,54,35,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:flex"
    >
      <img
        src="/images/brand/whatsapp-logo-transparent.png"
        alt=""
        aria-hidden="true"
        className="size-9 object-contain"
      />
    </a>
  );
}
