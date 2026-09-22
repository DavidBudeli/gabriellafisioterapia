import { AboutSection } from "@/components/sections/about-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { DifferentialSection } from "@/components/sections/differential-section";
import { Hero } from "@/components/sections/hero";
import { InstagramSection } from "@/components/sections/instagram-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TrustStrip } from "@/components/sections/trust-strip";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <DifferentialSection />
      <ServicesSection />
      <ProcessSection />
      <AudienceSection />
      <InstagramSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
