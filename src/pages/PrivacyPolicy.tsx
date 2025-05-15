
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Politica de confidențialitate și protecția datelor personale (GDPR)</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 font-serif text-primary">Green Panorama Relax Concept</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">1. Date colectate</h3>
              <p className="mb-3">În procesul de rezervare și cazare, Green Panorama Relax Concept colectează următoarele date personale:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nume și prenume</li>
                <li>Număr de telefon</li>
                <li>Adresă de e-mail</li>
                <li>Adresă de domiciliu (dacă este necesară pentru facturare)</li>
                <li>Date din documentul de identitate (conform legislației privind evidența turiștilor)</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">2. Scopul prelucrării datelor</h3>
              <p className="mb-3">Datele colectate sunt utilizate exclusiv pentru:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Înregistrarea rezervărilor și oferirea serviciilor de cazare</li>
                <li>Emiterea documentelor fiscale</li>
                <li>Comunicarea cu oaspeții înainte, în timpul și după ședere</li>
                <li>Respectarea obligațiilor legale privind evidența turiștilor</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">3. Temei legal</h3>
              <p className="mb-3">Prelucrarea datelor se face în baza:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consimțământului exprimat de client</li>
                <li>Executării contractului de servicii turistice</li>
                <li>Obligațiilor legale impuse de autorități (ex: evidența turiștilor, raportări către Poliție sau ANAF)</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">4. Stocarea datelor</h3>
              <p>
                Datele personale sunt păstrate în condiții de siguranță și doar pe perioada necesară îndeplinirii 
                scopurilor menționate mai sus. Nu sunt transmise către terți, cu excepția cazurilor prevăzute de lege.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">5. Drepturile persoanei vizate</h3>
              <p className="mb-3">Conform GDPR, aveți următoarele drepturi:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dreptul de acces la date</li>
                <li>Dreptul de rectificare sau ștergere a datelor</li>
                <li>Dreptul de restricționare a prelucrării</li>
                <li>Dreptul de opoziție</li>
                <li>Dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">6. Date de contact pentru protecția datelor</h3>
              <p>Pentru întrebări sau solicitări privind datele personale, ne puteți contacta la:</p>
              <p className="mt-2">
                <strong>Telefon:</strong> 0744 530 505
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
