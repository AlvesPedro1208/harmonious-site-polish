import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConsultaSection from "@/components/ConsultaSection";
import ServiceCarousel from "@/components/ServiceCarousel";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const exames = [
  { tag: "exame", tagColor: "secondary" as const, title: "Exame de Motilidade", description: "Detecta problemas como estrabismo ou outros desvios que podem afetar a visão binocular." },
  { tag: "consulta", tagColor: "primary" as const, title: "Emergência Oftalmológica", description: "Consulta para emergências oftalmológicas com atendimento rápido e especializado." },
  { tag: "exame", tagColor: "secondary" as const, title: "Teste do Olho Seco (IDRA)", description: "Faz pesquisa minuciosa sobre a lágrima do paciente para diagnóstico preciso." },
  { tag: "exame", tagColor: "secondary" as const, title: "Campo Visual Computadorizado", description: "Avalia a perda de visão causada por dano ou lesão ao nervo óptico." },
  { tag: "exame", tagColor: "secondary" as const, title: "Capsulotomia Yag Laser", description: "Limpa a opacidade que pode se formar atrás da lente intraocular após cirurgia de catarata." },
  { tag: "exame", tagColor: "secondary" as const, title: "Ecobiometria Ocular", description: "Mede a distância entre as estruturas oculares para planejamento cirúrgico." },
];

const cirurgias = [
  { tag: "cirurgia", tagColor: "secondary" as const, title: "Calázio", description: "Cirurgia para retirada do calázio com técnica minimamente invasiva." },
  { tag: "cirurgia", tagColor: "secondary" as const, title: "Cirurgia de Catarata", description: "Cirurgia que substitui a catarata por uma lente intraocular de alta qualidade." },
  { tag: "cirurgia", tagColor: "secondary" as const, title: "Cirurgia de Pterígio", description: "Cirurgia de exérese de pterígio com técnica moderna e segura." },
  { tag: "cirurgia", tagColor: "secondary" as const, title: "Blefaroplastia", description: "Cirurgia plástica das pálpebras para correção funcional e estética." },
  { tag: "cirurgia", tagColor: "secondary" as const, title: "Cirurgia Refrativa", description: "Correção de miopia, hipermetropia e astigmatismo a laser." },
  { tag: "cirurgia", tagColor: "secondary" as const, title: "Crosslinking", description: "Tratamento para ceratocone que fortalece a córnea." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ConsultaSection />
        <ServiceCarousel
          sectionId="exames"
          badge="Marketplace"
          title="Marketplace de Exames"
          subtitle="O marketplace da dr.olho une pacientes a clínicas oftalmológicas de excelência. Pagando pelo nosso site, você garante valores mais vantajosos em até 12x."
          items={exames}
        />
        <ServiceCarousel
          sectionId="cirurgias"
          badge="Cirurgias"
          title="Cirurgias de alta qualidade, preço acessível e pagamento facilitado"
          subtitle="Cirurgias nos olhos são complexas. Por isso, sempre explicamos passo a passo como funciona cada procedimento. Todos os aparelhos e insumos são de primeira qualidade."
          items={cirurgias}
        />
        <DoctorsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
