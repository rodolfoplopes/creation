import { useEffect } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/content";
import { 
  Target, 
  MessageSquare, 
  Camera, 
  TrendingUp,
  Users,
  Building2,
  Briefcase,
  Mic,
  ArrowRight,
  Mail,
  Calendar,
  CheckCircle2
} from "lucide-react";
import heroImg from "@assets/hero-profile.jpg";

/**
 * AJUSTE DE TOM (sem tocar no sistema visual ouro/petroleo — isso e
 * decisao a parte, ja sinalizada no CONTEXTO-CREATION.md como pendencia
 * do Sprint 4: "entra no sistema visual, ou vira spin-off").
 *
 * Mudou:
 *   - Removido o em-dash real do corpo (regra: zero em-dash).
 *   - Fecho final reescrito, tirando o tom de slogan de marketing para o
 *     registro dissertativo do resto do site.
 *   - data-i18n removido em toda a pagina — resíduo morto do i18n.js que
 *     ja foi eliminado em todo o resto do site (Sprint 0).
 *
 * NAO mudou: estrutura, classNames, tokens ouro/petroleo, redirect pt->home
 * (App.tsx ja restringe a rota a lang==="en", entao esse redirect e hoje
 * redundante mas inofensivo — deixei como estava).
 */

const deliverables = [
  { icon: Target },
  { icon: MessageSquare },
  { icon: Camera },
  { icon: TrendingUp },
  { icon: Briefcase },
];

const steps = [
  { number: "01" },
  { number: "02" },
  { number: "03" },
  { number: "04" },
];

const audience = [
  { icon: Briefcase },
  { icon: Building2 },
  { icon: Building2 },
  { icon: Users },
  { icon: Mic },
];

const packages = ["Foundation", "Executive", "Signature"];

export default function CreationProfile() {
  const [, setLocation] = useLocation();
  const lang = useLang();
  useEffect(() => {
    if (lang === "pt") {
      setLocation("/pt");
    }
  }, [lang, setLocation]);

  if (lang === "pt") {
    return null;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-abyss overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <Badge 
              className="mb-6 bg-signal/10 text-signal border-signal/30 hover:bg-signal/20"
              data-testid="badge-signature"
            >
              <span>Signature Product</span>
            </Badge>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bone mb-6 tracking-tight"
              data-testid="text-profile-title"
            >
              Creation Profile
            </h1>

            <p 
              className="text-xl sm:text-2xl text-bone/90 mb-4 font-light leading-relaxed"
              data-testid="text-profile-subtitle"
            >
              Strategic positioning, narrative construction and image architecture for executives and high-impact leaders.
            </p>

            <p 
              className="text-lg text-signal mb-10"
              data-testid="text-profile-supporting"
            >
              We build clarity, authority and presence before execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:profile@creation-pro.com">
                <Button 
                  size="lg" 
                  className="bg-signal text-abyss hover:bg-signal/90 font-semibold px-8"
                  data-testid="button-profile-email"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span>Email us</span>
                </Button>
              </a>
              <a href="/contato">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-bone/30 text-bone hover:bg-bone/10 font-semibold px-8"
                  data-testid="button-profile-call"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Book a call</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Slot de foto corporativa (mais formal/editorial que o resto do
              site, a pedido — "fotos de banco mais corporativas"). Aguardando
              arquivo real. Trocar por <img src="..." /> quando chegar. */}
          <div className="hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={heroImg} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* What is Creation Profile */}
      <section className="py-20 bg-bone">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-foreground mb-8"
              data-testid="text-what-title"
            >
              What is Creation Profile
            </h2>
            <p 
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="text-what-description"
            >
              Creation Profile is a premium strategic product for building executive profile, narrative and positioning. We start with research, diagnosis and strategic intent, and only then move to execution.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-bone">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
            data-testid="text-get-title"
          >
            What you get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-bone border-[rgba(15,23,42,0.12)] hover:border-abyss/40 transition-colors"
                  data-testid={`card-deliverable-${index}`}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-abyss/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-abyss" />
                    </div>
                    <p className="text-foreground font-medium">
                      {[
                        "Strategic Positioning Diagnosis",
                        "Executive Narrative System",
                        "Personal Image & Communication Architecture",
                        "Signature Content Direction",
                        "Investor-Ready Profile Assets"
                      ][index]}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Infographic */}
      <section className="py-20 bg-bone">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
            data-testid="text-how-title"
          >
            How it works
          </h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-abyss/20" />

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col items-center text-center"
                  data-testid={`step-${index}`}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-petroleo to-petroleo-dark flex items-center justify-center mb-6 shadow-lg border-4 border-ouro/30">
                    <span className="text-xl font-bold text-ouro">{step.number}</span>
                  </div>

                  {/* Connector Line - Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-16 left-1/2 w-0.5 h-8 bg-ouro/30 -translate-x-1/2" />
                  )}

                  {/* Step Content */}
                  <div className="bg-bone p-4 w-full border border-ouro/10 hover:border-ouro/30 transition-colors">
                    <p className="text-base font-semibold text-foreground leading-tight">
                      {[
                        "Diagnostic & Research",
                        "Strategy & Narrative",
                        "Production Direction",
                        "Publishing Rhythm & Optimization"
                      ][index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-bone">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
            data-testid="text-who-title"
          >
            Who it's for
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {audience.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-background border border-ouro/10"
                    data-testid={`audience-${index}`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-ouro flex-shrink-0" />
                    <p className="text-foreground">
                      {[
                        "Executives & C-Level",
                        "Founders & Entrepreneurs",
                        "Real Estate Leaders",
                        "Investors & Family Offices",
                        "Public figures and speakers"
                      ][index]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-bone">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
            data-testid="text-packages-title"
          >
            Engagement models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`text-center border-2 bg-bone ${
                  index === 2 
                    ? 'border-ouro bg-ouro/5' 
                    : 'border-[rgba(15,23,42,0.12)]'
                }`}
                data-testid={`card-package-${index}`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground">{pkg}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a href="mailto:profile@creation-pro.com">
              <Button 
                size="lg" 
                className="bg-signal text-abyss hover:bg-signal/90 font-semibold px-8"
                data-testid="button-request-availability"
              >
                <span>Request availability</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 cta-gradient">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24 text-center">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-bone mb-8 max-w-2xl mx-auto leading-tight"
            data-testid="text-final-title"
          >
            Let's build the profile that represents you.
          </h2>

          <a href="mailto:profile@creation-pro.com">
            <Button 
              size="lg" 
              className="bg-signal text-abyss hover:bg-signal/90 font-semibold px-10"
              data-testid="button-final-cta"
            >
              <Mail className="mr-2 h-5 w-5" />
              <span>Email us</span>
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}