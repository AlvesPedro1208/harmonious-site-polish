import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Phone, MessageCircle, MapPin, ExternalLink, Building2, CheckCircle, ShoppingCart, CalendarCheck, HelpCircle } from "lucide-react";

const clinicas = [
  { nome: "Centro de Diagnose Ocular Yamane (CDO Yamane)", telefone: "(21) 2235-2776", whatsapp: "(21) 98037-0812", endereco: "Rua Santa Clara, 50, Cobertura – Copacabana, Rio de Janeiro, RJ", regiao: "Zona Sul" },
  { nome: "Centro de Referência em Oftalmologia (CEROF)", telefone: "(21) 2796-6257", whatsapp: "(21) 98484-6257", endereco: "Rua Gervásio, 35, Juscelino – Mesquita, RJ", regiao: "Baixada" },
  { nome: "Clínica Colombo (Angra dos Reis)", telefone: "(21) 99943-1000", whatsapp: "(21) 99943-1000", endereco: "Rua Coronel Carvalho, 539, sala 110, Centro, Angra dos Reis, RJ", regiao: "Costa Verde" },
  { nome: "Clínica Colombo (Catete)", telefone: "+55 21 99921-1313", whatsapp: "+55 21 99921-1313", endereco: "Rua Dois de Dezembro, 78 – sala 315, Catete, Rio de Janeiro, RJ", regiao: "Zona Sul" },
  { nome: "EyeCenter Barra da Tijuca", telefone: "(21) 3043-0700", whatsapp: "(21) 98563-8349", endereco: "Avenida das Américas, 500, Bloco 5, Loja 115 – Barra da Tijuca, Rio de Janeiro, RJ", regiao: "Zona Oeste" },
  { nome: "EyeCenter Nova Iguaçu", telefone: "(21) 3043-0700", whatsapp: "(21) 98563-8349", endereco: "Rua Getúlio Vargas, 87 – sala 914 – Centro, Nova Iguaçu – RJ, 26255-060", regiao: "Baixada" },
  { nome: "HO Brasil Méier", telefone: "(21) 3037-8307", whatsapp: "(21) 98563-8349", endereco: "Rua Castro Alves, 10 — Méier, Rio de Janeiro, RJ", regiao: "Zona Norte" },
  { nome: "OftalmoDay Tijuca", telefone: "(21) 3872-6161", whatsapp: "(21) 99493-1662", endereco: "Praça Saens Peña, 45, sala 1508 (Shopping 45), Tijuca, Rio de Janeiro, RJ", regiao: "Zona Norte" },
  { nome: "Segvision Nova Iguaçu", telefone: "21 3488-5464", whatsapp: "21 97022-6565", endereco: "Rua Coronel Alfredo Soares, 229 – N. Iguaçu – RJ", regiao: "Baixada" },
];

const steps = [
  { icon: ShoppingCart, title: "Escolha e pague pelo exame", desc: "Selecione o exame desejado e finalize o pagamento online com segurança." },
  { icon: CheckCircle, title: "Receba sua confirmação", desc: "Você receberá a confirmação e número do pedido por e-mail e WhatsApp." },
  { icon: CalendarCheck, title: "Agende com a clínica", desc: "Entre em contato com a clínica escolhida e agende o melhor horário." },
  { icon: HelpCircle, title: "Dúvidas? Fale conosco!", desc: "Nossa equipe está pronta para te ajudar em qualquer etapa do processo." },
];

const regioes = ["Todas", "Zona Sul", "Zona Norte", "Zona Oeste", "Baixada", "Costa Verde"];

const Parceiros = () => {
  const [busca, setBusca] = useState("");
  const [regiaoAtiva, setRegiaoAtiva] = useState("Todas");

  const filtered = clinicas.filter((c) => {
    const matchBusca = c.nome.toLowerCase().includes(busca.toLowerCase()) || c.endereco.toLowerCase().includes(busca.toLowerCase());
    const matchRegiao = regiaoAtiva === "Todas" || c.regiao === regiaoAtiva;
    return matchBusca && matchRegiao;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-secondary blur-3xl" />
          </div>
          <div className="section-container relative z-10 text-center">
            <div className="animate-fade-in">
              <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h1 className="font-display text-4xl md:text-5xl font-900 text-primary-foreground mb-4">
                Clínicas Parceiras
              </h1>
              <p className="text-primary-foreground/80 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                O marketplace da dr.olho une você a clínicas oftalmológicas de excelência.
                Encontre seus exames nas melhores clínicas e melhores profissionais. É seguro e fácil.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-container py-12 md:py-16">
          <h2 className="font-display text-2xl md:text-3xl font-800 text-foreground text-center mb-10 animate-fade-in">
            Como funciona?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-500 hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-4 btn-shadow group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-xs font-bold text-secondary font-body mb-1">Passo {i + 1}</span>
                <h3 className="font-display text-base font-800 text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Search + Filter */}
        <section className="section-container pb-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar clínica por nome ou endereço..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow duration-300"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {regioes.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegiaoAtiva(r)}
                  className={`px-4 py-2 rounded-full text-xs font-medium font-body transition-all duration-300 ${
                    regiaoAtiva === r
                      ? "gradient-cta text-accent-foreground btn-shadow scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Clinics Grid */}
        <section className="section-container pb-16 md:pb-24">
          <p className="text-sm text-muted-foreground font-body mb-6 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            {filtered.length} clínica{filtered.length !== 1 ? "s" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((clinica, i) => (
              <Card
                key={clinica.nome}
                className="card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1 animate-fade-in border-border/50 overflow-hidden group"
                style={{ animationDelay: `${0.08 * (i + 1)}s` }}
              >
                <div className="h-1.5 gradient-cta" />
                <CardContent className="p-6">
                  <span className="inline-block text-[10px] font-bold font-body text-secondary bg-secondary/10 px-2 py-0.5 rounded-full mb-3">
                    {clinica.regiao}
                  </span>
                  <h3 className="font-display text-lg font-800 text-foreground mb-4 group-hover:text-secondary transition-colors duration-300 leading-tight">
                    {clinica.nome}
                  </h3>
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                      <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{clinica.telefone}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                      <MessageCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{clinica.whatsapp}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                      <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{clinica.endereco}</span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl gradient-cta text-accent-foreground font-body text-sm font-medium btn-shadow hover:scale-[1.02] transition-transform duration-300">
                    <ExternalLink className="w-4 h-4" />
                    Ver loja
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <Search className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground font-body">Nenhuma clínica encontrada com os filtros selecionados.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Parceiros;
