import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const doctors = [
  { name: "Dr(a) Aline Balieiro Diniz", specialty: "Córnea", crm: "CRM: 521132229" },
  { name: "Dr(a) Amália Caroline Boldrim", specialty: "Oftalmologia Clínica", crm: "CRM: 5201011383" },
  { name: "Dr(a) Ana Venancio Gerecht", specialty: "Retina", crm: "CRM: 52.0116673-7" },
  { name: "Dr(a) Carlos Silva", specialty: "Glaucoma", crm: "CRM: 5201234567" },
  { name: "Dr(a) Maria Santos", specialty: "Catarata", crm: "CRM: 5201345678" },
  { name: "Dr(a) Pedro Lima", specialty: "Cirurgia Refrativa", crm: "CRM: 5201456789" },
];

const DoctorsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="equipe" className="section-padding bg-background overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary font-display font-bold text-sm">
              Nossa Equipe
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-900 text-foreground leading-tight">
              Oftalmologistas Especializados
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              Temos oftalmologistas especialistas nas mais diversas áreas, como catarata, córnea, cirurgia refrativa, oculoplástica, retina e glaucoma.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {doctors.map((doc, i) => (
          <article
            key={i}
            className="shrink-0 w-72 bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 group"
          >
            <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center relative">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center border-4 border-card">
                <User className="w-9 h-9 text-muted-foreground" />
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-accent-foreground text-xs font-display font-bold">
                {doc.specialty}
              </span>
            </div>
            <div className="p-5 space-y-2 text-center">
              <h3 className="font-display text-base font-800 text-foreground leading-snug">{doc.name}</h3>
              <p className="text-muted-foreground font-body text-xs">{doc.crm}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-secondary font-display font-bold text-sm mt-2 hover:gap-2 transition-all duration-200"
              >
                Saiba mais <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="section-container">
        <div className="text-center mt-10">
          <a
            href="#equipe-completa"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-accent-foreground font-display font-bold text-sm btn-shadow hover:brightness-110 transition-all duration-200"
          >
            Ver Equipe →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
