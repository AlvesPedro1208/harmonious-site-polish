import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface MarketplaceItem {
  tag: string;
  tagColor: "secondary" | "primary";
  title: string;
  description: string;
}

interface MarketplaceSectionProps {
  items: MarketplaceItem[];
}

const MarketplaceSection = ({ items }: MarketplaceSectionProps) => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="exames" className="section-padding bg-muted">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary font-display font-bold text-sm">
              <ShoppingCart className="w-4 h-4" />
              Marketplace
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-900 text-foreground leading-tight">
              Marketplace de Exames
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              O marketplace da dr.olho une pacientes a clínicas oftalmológicas de excelência. Pagando pelo nosso site, você garante valores mais vantajosos em até 12x.
            </p>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setPage(Math.max(0, page - 1))}
                disabled={page === 0}
                className="w-10 h-10 rounded-full border-2 border-primary text-primary disabled:opacity-30 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-display font-bold text-sm text-muted-foreground min-w-[3rem] text-center">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                disabled={page === totalPages - 1}
                className="w-10 h-10 rounded-full border-2 border-primary text-primary disabled:opacity-30 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((item, i) => (
            <article
              key={`${page}-${i}`}
              className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`h-1.5 w-full ${item.tagColor === "secondary" ? "bg-secondary" : "bg-primary"}`} />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider ${
                      item.tagColor === "secondary"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span className="font-display text-4xl font-900 text-border group-hover:text-secondary/30 transition-colors">
                    {String(page * perPage + i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-800 text-foreground leading-snug">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-secondary font-display font-bold text-sm hover:gap-3 transition-all duration-200"
                >
                  Ver opções <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#catalogo"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-accent-foreground font-display font-bold text-sm btn-shadow hover:brightness-110 transition-all duration-200"
          >
            Ver Catálogo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
