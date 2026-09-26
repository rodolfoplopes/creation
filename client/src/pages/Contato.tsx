import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import { useContent, useLang } from "@/content";
import { trackEvent } from "@/lib/analytics";

/**
 * REMOVIDO: um MutationObserver que observava o <body> inteiro (childList,
 * subtree, characterData) so para repopular o dropdown de projectTypes quando
 * o i18n.js mexesse no DOM. Agora os tipos vem do content, tipados.
 *
 * REDESIGN (pedido do cliente — paleta/diagramacao notion.com): fundo
 * bege "bone" e barra lateral "signal" saem; fundo branco predominante,
 * cards do formulario e da lateral em rounded-2xl (era border-abyss/14
 * com canto reto). O card escuro final continua abyss — unica nota
 * escura da pagina, mesmo racional de Quem Somos/StubPageLayout.
 *
 * RECONSTRUCAO DE CONTEUDO (auditoria contra doc 31-Contato.md): o
 * formulario tinha so 4 campos (nome/email/organizacao/tipo) contra os 8
 * do doc aprovado — faltavam WhatsApp (opcional), "Em que momento o
 * projeto esta?", "Onde o projeto acontecera?", "Existe prazo
 * importante?" e o consentimento de privacidade. A lista de 8 areas
 * genericas virou as 13 opcoes reais do doc. Adicionada tambem a secao
 * "O que acontece depois do contato?" (ausente) e a mensagem de
 * confirmacao pos-envio (era um toast generico).
 */
// Mensagens de erro por idioma — a validacao nativa do navegador (bolha
// cinza padrao) destoava do design do resto do site (achado da auditoria
// UX/UI 22/08/2026). Validacao proaria em JS com mensagem estilizada,
// consistente com a tipografia/cor do site.
const errorMessages: Record<string, { required: string; email: string; consent: string }> = {
  pt: { required: "Este campo é obrigatório.", email: "Digite um e-mail válido.", consent: "É preciso aceitar para enviar." },
  en: { required: "This field is required.", email: "Enter a valid email.", consent: "You must accept to submit." },
  es: { required: "Este campo es obligatorio.", email: "Ingrese un correo válido.", consent: "Debe aceptar para enviar." },
};

export default function Contato() {
  const { toast } = useToast();
  const c = useContent();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    organization: "",
    projectType: "",
    projectStage: "",
    location: "",
    deadline: "",
    message: "",
  });

  const lang = useLang();
  const em = errorMessages[lang] ?? errorMessages.pt;

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = em.required;
    if (!formData.email.trim()) next.email = em.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = em.email;
    if (!formData.organization.trim()) next.organization = em.required;
    if (!formData.message.trim()) next.message = em.required;
    if (!consent) next.consent = em.consent;
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      trackEvent("generate_lead", {
        form: "contato",
        ...(formData.projectType ? { project_type: formData.projectType } : {}),
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        organization: "",
        projectType: "",
        projectStage: "",
        location: "",
        deadline: "",
        message: "",
      });
      setConsent(false);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const fieldError = (field: string) =>
    errors[field] ? (
      <p className="text-small text-destructive" role="alert">
        {errors[field]}
      </p>
    ) : null;

  return (
    <Layout>
      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-display sm:text-6xl md:text-7xl font-extrabold text-abyss mb-6">
            {c.contact.title}
          </h1>
          <p className="text-xl text-abyss/70 leading-relaxed max-w-measure mx-auto">
            {c.contact.description}
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-white border border-abyss/10 rounded-2xl">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center text-center py-10">
                    <CheckCircle2 className="h-10 w-10 text-spark mb-4" />
                    <p className="text-lg text-abyss leading-relaxed max-w-measure">
                      {c.contact.form.confirmationMessage}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{c.contact.form.name}</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder={c.contact.form.namePlaceholder}
                          aria-invalid={!!errors.name}
                          className={errors.name ? "border-destructive focus-visible:ring-destructive" : undefined}
                          data-testid="input-name"
                        />
                        {fieldError("name")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{c.contact.form.email}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder={c.contact.form.emailPlaceholder}
                          aria-invalid={!!errors.email}
                          className={errors.email ? "border-destructive focus-visible:ring-destructive" : undefined}
                          data-testid="input-email"
                        />
                        {fieldError("email")}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">{c.contact.form.whatsapp}</Label>
                        <Input
                          id="whatsapp"
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => handleChange("whatsapp", e.target.value)}
                          placeholder={c.contact.form.whatsappPlaceholder}
                          data-testid="input-whatsapp"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">{c.contact.form.organization}</Label>
                        <Input
                          id="organization"
                          type="text"
                          value={formData.organization}
                          onChange={(e) => handleChange("organization", e.target.value)}
                          placeholder={c.contact.form.organizationPlaceholder}
                          aria-invalid={!!errors.organization}
                          className={errors.organization ? "border-destructive focus-visible:ring-destructive" : undefined}
                          data-testid="input-organization"
                        />
                        {fieldError("organization")}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectType">{c.contact.form.projectType}</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleChange("projectType", value)}
                        >
                          <SelectTrigger id="projectType" data-testid="select-project-type">
                            <SelectValue placeholder={c.contact.form.projectTypePlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {c.contact.form.projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectStage">{c.contact.form.projectStage}</Label>
                        <Select
                          value={formData.projectStage}
                          onValueChange={(value) => handleChange("projectStage", value)}
                        >
                          <SelectTrigger id="projectStage" data-testid="select-project-stage">
                            <SelectValue placeholder={c.contact.form.projectStagePlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {c.contact.form.projectStages.map((stage) => (
                              <SelectItem key={stage} value={stage}>
                                {stage}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="location">{c.contact.form.location}</Label>
                        <Input
                          id="location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleChange("location", e.target.value)}
                          placeholder={c.contact.form.locationPlaceholder}
                          data-testid="input-location"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deadline">{c.contact.form.deadline}</Label>
                        <Input
                          id="deadline"
                          type="text"
                          value={formData.deadline}
                          onChange={(e) => handleChange("deadline", e.target.value)}
                          placeholder={c.contact.form.deadlinePlaceholder}
                          data-testid="input-deadline"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{c.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder={c.contact.form.messagePlaceholder}
                        aria-invalid={!!errors.message}
                        className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        data-testid="textarea-message"
                      />
                      {fieldError("message")}
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="consent"
                          checked={consent}
                          onCheckedChange={(checked) => {
                            setConsent(checked === true);
                            if (errors.consent) setErrors((prev) => ({ ...prev, consent: "" }));
                          }}
                          aria-invalid={!!errors.consent}
                          className={errors.consent ? "border-destructive" : undefined}
                          data-testid="checkbox-consent"
                        />
                        <Label htmlFor="consent" className="font-normal text-small text-abyss/70 leading-relaxed">
                          {c.contact.form.consent}
                        </Label>
                      </div>
                      {fieldError("consent")}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-abyss text-bone hover:bg-ink font-semibold"
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        c.contact.form.sending
                      ) : (
                        <>
                          {c.contact.form.submit}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-2xl border border-abyss/10 bg-bone/50">
              <CardContent className="p-6">
                <p className="text-abyss font-semibold mb-1">
                  {c.contact.aside.title}
                </p>
                <p className="text-abyss/70 leading-relaxed mb-8">
                  {c.contact.aside.subtitle}
                </p>
                <h3 className="text-sm font-semibold text-abyss mb-4">
                  {c.contact.aside.alternativesTitle}
                </h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${c.contact.aside.email}`}
                    onClick={() => trackEvent("email_click", { source: "contato_aside" })}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-spark/5 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-abyss" />
                    <span className="text-sm text-abyss/70">
                      {c.contact.aside.email}
                    </span>
                  </a>
                  <a
                    href="https://wa.me/5521999176231"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { source: "contato_aside" })}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-spark/5 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5 text-abyss" />
                    <span className="text-sm text-abyss/70">
                      {c.contact.aside.whatsapp}
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-abyss border-abyss">
              <CardContent className="p-6">
                <p className="text-bone/90 text-sm leading-relaxed">
                  {c.contact.aside.note}
                </p>
                <p className="mt-6 text-signal font-semibold tracking-widest text-sm uppercase">
                  {c.brand.microcopy}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* O que acontece depois do contato */}
      <Section tone="white">
        <SectionHeader title={c.contact.process.title} />
        <ol className="space-y-4 max-w-measure mb-6">
          {c.contact.process.steps.map((step, i) => (
            <li key={step} className="flex items-start gap-4">
              <span className="text-caption font-semibold text-spark tracking-widest shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-abyss/70 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-abyss/60 leading-relaxed max-w-measure">{c.contact.process.note}</p>
      </Section>
    </Layout>
  );
}
