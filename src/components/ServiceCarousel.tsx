import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ServiceItem {
  tag: string;
  tagColor: "secondary" | "primary";
  title: string;
  description: string;
}

interface ServiceCarouselProps {
  sectionId: string;
  badge: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const ServiceCarousel = ({ sectionId, badge, title, subtitle, items, ctaLabel = "Ver Catálogo →", ctaHref = "#" }: ServiceCarouselProps) => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  return (
    <section id={sectionId} className="section-padding bg-muted">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary font-display font-bold text-sm">
            {badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-900 text-foreground leading-tight text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visible.map((item, i) => (
              <article
                key={`${page}-${i}`}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 flex flex-col items-center text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-display font-bold ${
                    item.tagColor === "secondary"
                      ? "bg-secondary text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {item.tag}
                </span>
                <h3 className="font-display text-lg font-800 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm hover:brightness-125 transition-all duration-200"
                >
                  Ver opções
                </a>
              </article>
            ))}
          </div>

          {/* Nav */}
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
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      i === page ? "bg-secondary w-6" : "bg-border"
                    }`}
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
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={ctaHref}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-accent-foreground font-display font-bold text-sm btn-shadow hover:brightness-110 transition-all duration-200"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
