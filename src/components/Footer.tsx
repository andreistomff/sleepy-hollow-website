
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7fae8f2a-fdc9-47fc-85cd-525dfefa71ab.png" 
                alt="GreenPanorama Logo" 
                className="h-8 w-8" 
              />
              <h3 className="text-xl font-semibold font-serif">GreenPanorama</h3>
            </div>
            <p className="mb-4">
              O pensiune fermecătoare care oferă confort, relaxare și experiențe de neuitat.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white/80 transition-colors">Acasă</a></li>
              <li><a href="#about" className="hover:text-white/80 transition-colors">Despre Noi</a></li>
              <li><a href="#rooms" className="hover:text-white/80 transition-colors">Camerele Noastre</a></li>
              <li><a href="#gallery" className="hover:text-white/80 transition-colors">Galerie</a></li>
              <li><a href="#prices" className="hover:text-white/80 transition-colors">Prețuri & Disponibilitate</a></li>
              <li><a href="#contact" className="hover:text-white/80 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Politici</h3>
            <ul className="space-y-2">
              <li><Link to="/termeni-rezervare" className="hover:text-white/80 transition-colors">Termeni de Rezervare</Link></li>
              <li><Link to="/politica-anulare" className="hover:text-white/80 transition-colors">Politica de Anulare</Link></li>
              <li><Link to="/politica-confidentialitate" className="hover:text-white/80 transition-colors">Politica de Confidențialitate</Link></li>
              <li><Link to="/politica-animale" className="hover:text-white/80 transition-colors">Politica pentru Animale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>0744 530 505</span>
              </div>
              <address className="not-italic">
                DN64 70,<br />
                Băile Olănești, 
                cod postal 245306
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} Pensiunea GreenPanorama. Toate drepturile rezervate.</p>
          <p className="text-sm mt-2 text-primary-foreground/80">Website powered by Codemelt.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
