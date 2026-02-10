import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface CirurgiaItem {
  title: string;
  description: string;
}

interface CirurgiasSectionProps {
  items: CirurgiaItem[];
}

const CirurgiasSection = ({ items }: CirurgiasSectionProps) => {
  const [active, setActive] = useState(0);

  return (
    <section id="cirurgias" className="section-padding gradient-hero text-primary-foreground overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-secondary font-display font-bold text-sm backdrop-blur-sm">
            Cirurgias
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-900 leading-tight">
            Cirurgias de alta qualidade, preço acessível e pagamento facilitado
          </h2>
          <p className="text-white/70 font-body text-base leading-relaxed">
            Cirurgias nos olhos são complexas. Por isso, sempre explicamos passo a passo como funciona cada procedimento.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left: list of surgeries */}
          <div className="md:col-span-5 space-y-2">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 group ${
                  i === active
                    ? "bg-white/15 backdrop-blur-sm border border-white/20"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-900 text-sm transition-all ${
                      i === active
                        ? "bg-secondary text-accent-foreground"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`font-display font-800 text-base transition-colors ${
                    i === active ? "text-white" : "text-white/60 group-hover:text-white/80"
                  }`}>
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: active surgery detail */}
          <div className="md:col-span-7">
            <div
              key={active}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/15 animate-fade-in"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-accent-foreground text-xs font-display font-bold mb-4">
                Cirurgia
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-900 text-white mb-4">
                {items[active].title}
              </h3>
              <p className="text-white/70 font-body text-base leading-relaxed mb-6">
                {items[active].description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-accent-foreground font-display font-bold text-sm btn-shadow hover:brightness-110 transition-all duration-200"
                >
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white border border-white/20 font-display font-bold text-sm hover:bg-white/20 transition-all duration-200"
                >
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CirurgiasSection;
