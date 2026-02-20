import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConsultaSection from "@/components/ConsultaSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import CirurgiasSection from "@/components/CirurgiasSection";
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
  { title: "Calázio", description: "Cirurgia para retirada do calázio com técnica minimamente invasiva. O procedimento é realizado com anestesia local e possui recuperação rápida." },
  { title: "Cirurgia de Catarata", description: "Cirurgia que substitui a catarata por uma lente intraocular de alta qualidade. Utilizamos as técnicas mais modernas com facoemulsificação." },
  { title: "Cirurgia de Pterígio", description: "Cirurgia de exérese de pterígio com técnica moderna e segura. O procedimento remove o tecido anormal e previne a recorrência." },
  { title: "Blefaroplastia", description: "Cirurgia plástica das pálpebras para correção funcional e estética. Melhora o campo visual e rejuvenesce a região dos olhos." },
  { title: "Cirurgia Refrativa", description: "Correção de miopia, hipermetropia e astigmatismo a laser. Procedimento seguro que pode eliminar a dependência de óculos." },
  { title: "Crosslinking", description: "Tratamento para ceratocone que fortalece a córnea. Utiliza riboflavina e luz ultravioleta para estabilizar a progressão da doença." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ConsultaSection />
        <MarketplaceSection items={exames} />
        <CirurgiasSection items={cirurgias} />
        <DoctorsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
