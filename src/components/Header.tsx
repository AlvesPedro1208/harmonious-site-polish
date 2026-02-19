import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Consultas", href: "#consultas" },
  { label: "Cirurgias", href: "#cirurgias" },
  { label: "Exames", href: "#exames" },
  { label: "Unidades", href: "#unidades" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
  { label: "Blog", href: "#blog" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Dashboard", href: "/dashboard" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 gradient-hero">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-display text-2xl font-900 text-primary-foreground tracking-tight">
              dr.olho
            </span>
            <span className="text-secondary text-[10px] font-body font-medium -ml-1 mt-2">
              oftalmologia
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-secondary hover:text-primary-foreground transition-colors duration-200 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 text-secondary hover:text-primary-foreground transition-colors" aria-label="Buscar">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-secondary hover:text-primary-foreground transition-colors" aria-label="Minha conta">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-secondary hover:text-primary-foreground transition-colors" aria-label="Carrinho">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-secondary text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 text-sm font-medium text-secondary hover:text-primary-foreground border-b border-primary-foreground/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 mt-4 px-3">
              <button className="p-2 text-secondary"><Search className="w-5 h-5" /></button>
              <button className="p-2 text-secondary"><User className="w-5 h-5" /></button>
              <button className="p-2 text-secondary"><ShoppingCart className="w-5 h-5" /></button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
