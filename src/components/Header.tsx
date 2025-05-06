
import { useState, useEffect } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-primary">
            GreenPanorama
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">Despre</a>
          <a href="#rooms" className="text-foreground hover:text-primary transition-colors">Camere</a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Galerie</a>
          <a href="#prices" className="text-foreground hover:text-primary transition-colors">Prețuri</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+12345678" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span>(123) 456-7890</span>
          </a>
          <Button className="btn-primary" onClick={scrollToContact}>Rezervă Acum</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Comută meniul"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Despre
            </a>
            <a 
              href="#rooms" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Camere
            </a>
            <a 
              href="#gallery" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galerie
            </a>
            <a 
              href="#prices" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prețuri
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-2 py-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+12345678" className="text-foreground">(123) 456-7890</a>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@greenpanorama.ro" className="text-foreground">info@greenpanorama.ro</a>
            </div>
            <Button className="btn-primary w-full" onClick={scrollToContact}>Rezervă Acum</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
