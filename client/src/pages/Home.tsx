import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CapacidadesSection from "@/components/CapacidadesSection";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import SolucoesCreationSection from "@/components/SolucoesCreationSection";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import MethodTeaserSection from "@/components/MethodTeaserSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CTASection from "@/components/CTASection";
import SectionNav from "@/components/SectionNav";
import { useLang } from "@/content";

// Rotulos da tab-bar interna (achado da auditoria UX/UI 22/08/2026,
// inspirada em notion.com/pt/product/features) — traducao inline pois
// sao so 5 rotulos curtos, mesmo padrao do t() usado em Header.tsx.
const navLabels = {
  pt: [
    { id: "capacidades", label: "Capacidades" },
    { id: "especialidades", label: "Especialidades" },
    { id: "solucoes-creation", label: "Soluções Creation" },
    { id: "metodo", label: "Método" },
    { id: "para-quem", label: "Para quem" },
  ],
  en: [
    { id: "capacidades", label: "Capabilities" },
    { id: "especialidades", label: "Specialties" },
    { id: "solucoes-creation", label: "Creation Solutions" },
    { id: "metodo", label: "Method" },
    { id: "para-quem", label: "Who it's for" },
  ],
  es: [
    { id: "capacidades", label: "Capacidades" },
    { id: "especialidades", label: "Especialidades" },
    { id: "solucoes-creation", label: "Soluciones Creation" },
    { id: "metodo", label: "Método" },
    { id: "para-quem", label: "Para quién" },
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
 * Bloco 07 (Insights) fica de fora: pagina ainda sem acervo minimo
 * publicavel, mesma decisao ja aplicada ao menu.
 */
export default function Home() {
  const lang = useLang();

  return (
    <Layout>
      <HeroSection />
      <WhyWeExistSection />
      <SectionNav items={navLabels[lang]} />
      <CapacidadesSection />
      <EspecialidadesSection />
      <SolucoesCreationSection />
      <MethodTeaserSection />
      <TargetAudienceSection />
      <CTASection />
    </Layout>
  );
}
