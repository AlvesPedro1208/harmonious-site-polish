import { Facebook, Youtube, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-footer text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-display text-2xl font-900">dr.olho</span>
            <p className="text-primary-foreground/60 font-body text-sm">
              feito com <Heart className="inline w-3 h-3 text-red-400 fill-red-400" /> no Rio
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary/30 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary/30 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary/30 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* A Empresa */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">A Empresa</h3>
            <ul className="space-y-2 text-primary-foreground/70 font-body text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Unidades</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/70 font-body text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Consultas</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Exames</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Cirurgias</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-secondary">Legal</h3>
            <ul className="space-y-2 text-primary-foreground/70 font-body text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a></li>
            </ul>
            <a href="mailto:atendimento@drolho.com" className="flex items-center gap-2 text-secondary text-sm font-medium mt-4">
              <Mail className="w-4 h-4" /> atendimento@drolho.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
