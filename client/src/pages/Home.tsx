import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CapacidadesSection from "@/components/CapacidadesSection";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import SolucoesCreationSection from "@/components/SolucoesCreationSection";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import MethodTeaserSection from "@/components/MethodTeaserSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CTASection from "@/components/CTASection";

/**
 * Home V2 (Arquitetura V2 — ver client/src/content/stubData.ts): substitui
 * VerticalsSection (3 cards de area de negocio antigos — Consultoria/
 * Producoes/Impacto Social, que nao existem mais no menu) pelos Blocos
 * 03/04/05 do doc aprovado: Capacidades (Estrategia/Gestao/Operacoes),
 * Especialidades (Inovacao/Impacto/Branding & Experiencias) e Solucoes
 * Creation (so as publicaveis — hoje, so Creation Ops Rio).
 *
 * Bloco 07 (Insights) fica de fora: pagina ainda sem acervo minimo
 * publicavel, mesma decisao ja aplicada ao menu.
 */
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <CapacidadesSection />
      <EspecialidadesSection />
      <SolucoesCreationSection />
      <WhyWeExistSection />
      <MethodTeaserSection />
      <TargetAudienceSection />
      <CTASection />
    </Layout>
  );
}
