import { Eye, CheckCircle } from "lucide-react";
import elisaImg from "@/assets/Screenshot_1.png";

const features = [
  "Exame de refração completo",
  "Mapeamento de retina",
  "Tonometria (pressão ocular)",
  "Biomicroscopia",
  "Teste de acuidade visual",
];

const ConsultaSection = () => {
  return (
    <section id="consultas" className="section-padding pt-10 md:pt-12 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Icon block */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-muted overflow-hidden">
              <img
                src={elisaImg}
                alt="Procedimento oftalmológico"
                className="w-full h-full object-cover object-center scale-125 md:scale-100"
                loading="lazy"
              />
              <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-secondary flex items-center justify-center animate-pulse-soft">
                <CheckCircle className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary font-display font-bold text-sm">
              Consulta de verdade
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-900 text-foreground leading-tight">
              Muito além dos óculos
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed max-w-lg">
              Na dr.olho, a consulta vai além dos óculos. Por isso, ela é sempre completa e inclui os principais exames clínicos que uma consulta oftalmológica de verdade precisa ter.
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground font-body text-sm">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#catalogo"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm hover:brightness-125 transition-all duration-200"
            >
              Ver Catálogo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultaSection;
