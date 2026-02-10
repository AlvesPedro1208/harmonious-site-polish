import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="gradient-cta section-padding">
      <div className="section-container text-center space-y-6 max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-900 text-accent-foreground leading-tight">
          Dúvidas? Fale conosco!
        </h2>
        <p className="text-accent-foreground/80 font-body text-base leading-relaxed">
          Queremos te ajudar! Ligue ou mande mensagem para a nossa equipe.
        </p>
        <a
          href="https://wa.me/552120187040"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-base hover:brightness-125 transition-all duration-200"
        >
          <MessageCircle className="w-5 h-5" />
          Vamos conversar →
        </a>
      </div>
    </section>
  );
};

export default CTASection;
