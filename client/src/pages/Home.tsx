import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CapacidadesSection from "@/components/CapacidadesSection";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import SolucoesCreationSection from "@/components/SolucoesCreationSection";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import ClientLogosSlideshow from "@/components/ClientLogosSlideshow";
import CicloCompletoSection from "@/components/CicloCompletoSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CTASection from "@/components/CTASection";
import SectionNav from "@/components/SectionNav";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import { useLang } from "@/content";

// Rotulos da tab-bar interna (achado da auditoria UX/UI 22/08/2026,
// inspirada em notion.com/pt/product/features) — traducao inline pois
// sao so 5 rotulos curtos, mesmo padrao do t() usado em Header.tsx.
// "insights" so aparece de fato se houver artigos publicados (ver
// LatestInsightsSection, que retorna null quando a lista vem vazia).
const navLabels = {
  pt: [
    { id: "capacidades", label: "Capacidades" },
    { id: "especialidades", label: "Especialidades" },
    { id: "solucoes-creation", label: "Soluções Creation" },
    { id: "metodo", label: "Método" },
    { id: "para-quem", label: "Para quem" },
    { id: "insights", label: "Insights" },
  ],
  en: [
    { id: "capacidades", label: "Capabilities" },
    { id: "especialidades", label: "Specialties" },
    { id: "solucoes-creation", label: "Creation Solutions" },
    { id: "metodo", label: "Method" },
    { id: "para-quem", label: "Who it's for" },
    { id: "insights", label: "Insights" },
  ],
  es: [
    { id: "capacidades", label: "Capacidades" },
    { id: "especialidades", label: "Especialidades" },
    { id: "solucoes-creation", label: "Soluciones Creation" },
    { id: "metodo", label: "Método" },
    { id: "para-quem", label: "Para quién" },
    { id: "insights", label: "Insights" },
  ],
};

/**
 * Home V2 (Arquitetura V2 — ver client/src/content/stub/): substitui
 * VerticalsSection (3 cards de area de negocio antigos — Consultoria/
 * Producoes/Impacto Social, que nao existem mais no menu) pelos Blocos
 * 03/04/05 do doc aprovado: Capacidades (Estrategia/Gestao/Operacoes),
 * Especialidades (Inovacao/Impacto/Branding & Experiencias) e Solucoes
 * Creation (so as publicaveis — hoje, so Creation Ops Rio).
 *
 * Bloco 07 (Insights): teaser dos 3 artigos mais recentes do blog
 * (LatestInsightsSection), adicionado depois que o cliente publicou os
 * primeiros artigos e perguntou se apareceriam na Home. O componente
 * some sozinho (retorna null) se ainda nao houver nenhum publicado.
 *
 * Metodo: MethodTeaserSection (faixa fina) foi substituida por
 * CicloCompletoSection variant="teaser" — mesmo Ciclo Completo (Entender/
 * Estruturar/Realizar/Comprovar) que agora tambem aparece, na versao
 * interativa completa, em /como-trabalhamos (ver StubPageLayout.tsx).
 *
 * ClientLogosSlideshow: restaurado na Home (pedido do cliente, 25/08/2026)
 * como prova social logo apos o carrossel de fotos — nao entra em Quem
 * Somos, que segue fiel ao doc aprovado 30-Quem-Somos.md (ver comentario
 * em QuemSomos.tsx).
 */
export default function Home() {
  const lang = useLang();

  return (
    <Layout>
      <HeroSection />
      <WhyWeExistSection />
      <ClientLogosSlideshow />
      <SectionNav items={navLabels[lang]} />
      <CapacidadesSection />
      <EspecialidadesSection />
      <SolucoesCreationSection />
      <CicloCompletoSection variant="teaser" />
      <TargetAudienceSection />
      <LatestInsightsSection />
      <CTASection />
    </Layout>
  );
}
