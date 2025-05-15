
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">GreenPanorama</h3>
            <p className="mb-4">
              O pensiune fermecătoare care oferă confort, relaxare și experiențe de neuitat.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
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
              <li><a href="#" className="hover:text-white/80 transition-colors">Politica pentru Animale</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Întrebări Frecvente</a></li>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
