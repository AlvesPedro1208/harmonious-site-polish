import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-eye-care.jpg";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="section-container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-900 text-primary-foreground leading-tight text-balance">
              Oftalmologista a preço acessível com qualidade e atendimento incrível
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#agendar"
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
              <a href="tel:2120187040" className="text-secondary font-semibold hover:underline">
                (21) 2018-7040
              </a>
            </p>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Equipamentos de oftalmologia e tabela de Snellen para exame de visão"
                className="w-full h-auto object-cover rounded-2xl"
                loading="eager"
                width={800}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 0 960 40 720 30C480 20 240 50 0 20L0 60Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
