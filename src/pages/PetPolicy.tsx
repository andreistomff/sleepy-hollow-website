
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PetPolicy = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Politica privind animalele de companie</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 font-serif text-primary">Green Panorama Relax Concept</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">1. Acceptare</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Animalele de companie sunt binevenite la Green Panorama Relax Concept, fără taxe suplimentare.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">2. Informare prealabilă</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vă rugăm să ne anunțați în momentul rezervării dacă intenționați să călătoriți cu un animal de companie.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">3. Comportament și responsabilitate</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proprietarii sunt responsabili pentru comportamentul animalului pe durata șederii.</li>
                <li>Animalele trebuie supravegheate în permanență și nu trebuie lăsate nesupravegheate în cameră.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">4. Accesul în spații comune</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accesul cu animale de companie în anumite spații comune (ex: sala de mese, bucătărie) poate fi restricționat din motive de igienă.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">5. Daune și curățenie</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Orice daună provocată de animalul de companie va fi suportată de către proprietar.</li>
                <li>Vă rugăm să aveți grijă ca animalul să nu murdărească mobilierul sau lenjeria.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PetPolicy;
