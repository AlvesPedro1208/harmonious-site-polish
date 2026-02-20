import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ireniza Faustino",
    text: "Fiz a minha blefaroplastia a pouco mais de um mês. Desde o primeiro contato por telefone com o funcionário Pedro (eu não conhecia a clínica) foi super solícito, explicando todas as minhas indagações. A primeira avaliação com a doutora Elisa e o Hospital onde fiz a cirurgia, tudo excelente. A doutora Elisa muito simpática e prestativa. Minha recuperação foi super rápida. Obrigado a todos.",
    rating: 5,
  },
  {
    name: "Iyzie Correia",
    text: "A minha experiência com dr olho foi a melhor do mundo. Quero agradecer a toda equipe mas em especial ao Dr Davi que foi o Melhor Médico que Deus colocou na minha vida para assim operar minha mãe que tem 82 anos, cirurgia de catarata que foi um sucesso. Muito obrigado pelo carinho e dedicação com minha mãe vc e o melhor cirurgião que eu conheço. Deus esteja sempre com vc e toda sua equipe. Hoje minha mãe voltou a ser uma senhora feliz um grande abraço Dr Davi.",
    rating: 5,
  },
  {
    name: "Sarah Moraes",
    text: "M.A.R.A.V.I.L.H.O.S.A!!! BENÇÃO!! Tudo que sonhei!! Atendimento Médico, Financeiro e Pessoal de altíssima qualidade, mas HUMANIZADO; todos comprometidos em fazer o Melhor para servir Melhor!!! Propaganda nas redes sociais, confere!!! Sem surpresas financeiras no decurso. Preço justo, incluindo exames oftalmológicos e risco cirúrgico, o que agiliza todo processo!! Muita GRATIDÃO a Deus, em especial aos Drs. José Simão e David, do Largo do Machado!! Felicidades, Saúde, Paz! Vocês Merecem!!! pra sempre em nosso ❤️❤️❤️❤️❤️❤️",
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
