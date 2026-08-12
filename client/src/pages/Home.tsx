import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import VerticalsSection from "@/components/VerticalsSection";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import MethodTeaserSection from "@/components/MethodTeaserSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CTASection from "@/components/CTASection";

/**
 * FIX v4:
 *   WhatWeDoSection removido — c.whatWeDo nao existe mais no contrato, e o
 *   papel dele (explicar "o que fazemos") ficou redundante com os 3 cards
 *   de area logo abaixo (VerticalsSection, que agora consome c.areas).
 *   CreationOpsSection -> MethodTeaserSection — reproduzia c.method inteiro
 *   (duplicacao); agora e so um teaser curto apontando pra /metodo.
 */
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <VerticalsSection />
      <WhyWeExistSection />
      <MethodTeaserSection />
      <TargetAudienceSection />
      <CTASection />
    </Layout>
  );
}
