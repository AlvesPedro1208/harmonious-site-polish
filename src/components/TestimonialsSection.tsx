import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ireniza Faustino",
    text: "Fiz a minha blefaroplastia a pouco mais de um mês. Desde o primeiro contato por telefone com o funcionário Pedro foi super solícito. A primeira avaliação com a doutora Elisa e o Hospital onde fiz a cirurgia, tudo excelente. Minha recuperação foi super rápida. Obrigada a todos.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    text: "Atendimento excepcional desde a recepção até a consulta. O doutor explicou tudo com muita clareza e os exames foram completos. Recomendo fortemente a dr.olho para quem busca qualidade.",
    rating: 5,
  },
  {
    name: "Ana Paula Silva",
    text: "Preço justo e atendimento de primeira qualidade. Fiz minha cirurgia de catarata e o resultado superou todas as expectativas. Equipe muito profissional e atenciosa.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary font-display font-bold text-sm">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-900 text-foreground leading-tight">
            Veja o que estão falando da dr.olho!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-card rounded-xl p-6 card-shadow relative animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-secondary/30 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
