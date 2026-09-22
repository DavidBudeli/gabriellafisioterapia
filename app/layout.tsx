import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig, siteUrl } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Physis Therapeia | Fisioterapia Individualizada",
    template: "%s | Physis Therapeia",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.name,
    title: "Physis Therapeia | Fisioterapia Individualizada",
    description: siteConfig.description,
    images: [{
      url: "/images/brand/physis-logo.jpg",
      width: 1254,
      height: 1254,
      alt: "Physis Therapeia — a fisioterapia que te entende",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physis Therapeia | Fisioterapia Individualizada",
    description: siteConfig.description,
    images: ["/images/brand/physis-logo.jpg"],
  },
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123623",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  telephone: `+${siteConfig.phone}`,
  sameAs: [siteConfig.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a
          href="#conteudo-principal"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition-transform focus:translate-y-0"
        >
          Ir para o conteúdo
        </a>
        <Header />
        <div id="conteudo-principal">{children}</div>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
