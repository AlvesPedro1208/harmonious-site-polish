import { Phone } from "lucide-react";
import heroImage from "@/assets/Icones/banner_olho.jpg";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden min-h-[75vh] md:min-h-[78vh]">
      {/* Fundo animado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Conteúdo acima do fundo */}
      <div className="section-container pt-48 pb-32 md:pt-56 md:pb-24 lg:pt-64 lg:pb-56">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-900 text-primary-foreground leading-tight text-balance">
              Oftalmologista a preço acessível com qualidade e atendimento incrível
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const evt = new CustomEvent("chatbot:open", {
                    detail: { message: "Gostaria de agendar uma consulta" },
                  });
                  window.dispatchEvent(evt);
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-accent-foreground font-display font-bold text-base btn-shadow hover:brightness-110 transition-all duration-200"
              >
                Agendar online →
              </a>

              <a
                href="https://wa.me/552120187040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-secondary text-secondary font-display font-bold text-base hover:bg-secondary hover:text-accent-foreground transition-all duration-200"
              >
                Agendar no WhatsApp →
              </a>
            </div>

            <p className="text-primary-foreground/70 font-body text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              Se preferir, ligue para{" "}
              <a href="tel:2121800313" className="text-secondary font-semibold hover:underline">
                (21) 2180-0313
              </a>
            </p>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="rounded-2xl overflow-visible md:scale-[1.05] md:-translate-y-2 lg:scale-[1.15] lg:translate-x-12 lg:-translate-y-2">
              <img
                src={heroImage}
                alt="Equipamentos de oftalmologia e tabela de Snellen para exame de visão"
                className="w-full h-auto object-contain rounded-2xl"
                loading="eager"
                width={1000}
                height={560}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave acima do fundo */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L1440 60L1440 20C1200 0 960 40 720 30C480 20 240 50 0 20L0 60Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div> */}
      <div className="absolute bottom-0 left-0 right-0 z-10 drop-shadow-[0_-18px_30px_rgba(0,0,0,0.18)]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 0 960 40 720 30C480 20 240 50 0 20L0 60Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
