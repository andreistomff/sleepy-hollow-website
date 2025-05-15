
import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
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
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/ba0cd030-8a6f-4322-8455-72792fbd6777.png" 
            alt="GreenPanorama Logo" 
            className="h-8 w-8" 
          />
          <h1 className="text-xl lg:text-2xl font-serif font-bold text-primary">
            GreenPanorama
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">Despre</a>
          <a href="#rooms" className="text-foreground hover:text-primary transition-colors">Camere</a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Galerie</a>
          <a href="#prices" className="text-foreground hover:text-primary transition-colors">Prețuri</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:0744530505" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-base">0744 530 505</span>
          </a>
          <Button className="btn-primary" onClick={scrollToContact}>Rezervă Acum</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-foreground p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Comută meniul"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t py-4 animate-fade-in">
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
              <a href="tel:0744530505" className="text-base text-foreground">0744 530 505</a>
            </div>
            <Button className="btn-primary w-full" onClick={scrollToContact}>Rezervă Acum</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
