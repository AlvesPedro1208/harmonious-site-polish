import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState } from "react";

const doctors = [
  { name: "Dr(a) Aline Balieiro Diniz", specialty: "Córnea", crm: "CRM: 521132229" },
  { name: "Dr(a) Amália Caroline Boldrim", specialty: "Oftalmologia Clínica", crm: "CRM: 5201011383" },
  { name: "Dr(a) Ana Venancio Gerecht", specialty: "Retina", crm: "CRM: 52.0116673-7" },
  { name: "Dr(a) Carlos Silva", specialty: "Glaucoma", crm: "CRM: 5201234567" },
  { name: "Dr(a) Maria Santos", specialty: "Catarata", crm: "CRM: 5201345678" },
  { name: "Dr(a) Pedro Lima", specialty: "Cirurgia Refrativa", crm: "CRM: 5201456789" },
];

const DoctorsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(doctors.length / perPage);
  const visible = doctors.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="equipe" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
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

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((doc, i) => (
            <article
              key={`${page}-${i}`}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col items-center text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-800 text-foreground">{doc.name}</h3>
              <p className="text-secondary font-display font-bold text-sm">{doc.specialty}</p>
              <p className="text-muted-foreground font-body text-xs">{doc.crm}</p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm hover:brightness-125 transition-all duration-200"
              >
                Saiba mais
              </a>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="p-2 rounded-full bg-primary text-primary-foreground disabled:opacity-30 hover:brightness-125 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === page ? "bg-secondary w-6" : "bg-border"}`}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-full bg-primary text-primary-foreground disabled:opacity-30 hover:brightness-125 transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

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
