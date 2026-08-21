import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Section } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * REMOVIDO: um MutationObserver que observava o <body> inteiro (childList,
 * subtree, characterData) so para repopular o dropdown de projectTypes quando
 * o i18n.js mexesse no DOM. Agora os tipos vem do content, tipados.
 */
export default function Contato() {
  const { toast } = useToast();
  const c = useContent();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        projectType: "",
        message: "",
      });
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
  };

  return (
    <Layout>
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-abyss mb-6 tracking-tight">
              {c.contact.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {c.contact.description}
            </p>
          </div>
        </div>
      </section>

      <Section tone="bone" firstContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-bone border border-abyss/14">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{c.contact.form.name}</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={c.contact.form.namePlaceholder}
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{c.contact.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder={c.contact.form.emailPlaceholder}
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization">
                        {c.contact.form.organization}
                      </Label>
                      <Input
                        id="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        placeholder={c.contact.form.organizationPlaceholder}
                        data-testid="input-organization"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">
                        {c.contact.form.projectType}
                      </Label>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{c.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={c.contact.form.messagePlaceholder}
                      className="resize-none"
                      data-testid="textarea-message"
                    />
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
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-bone border border-abyss/14">
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
                    className="flex items-center gap-3 p-3 bg-bone hover:bg-[#e9ecef] transition-colors"
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
                    className="flex items-center gap-3 p-3 bg-bone hover:bg-[#e9ecef] transition-colors"
                  >
                    <MessageSquare className="h-5 w-5 text-abyss" />
                    <span className="text-sm text-abyss/70">
                      {c.contact.aside.whatsapp}
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-abyss border-abyss">
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
    </Layout>
  );
}
