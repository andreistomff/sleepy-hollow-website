
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Termeni și condiții generale de rezervare</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 font-serif text-primary">Green Panorama Relax Concept</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">1. Rezervare și confirmare</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rezervările pot fi efectuate telefonic, prin e-mail sau online, prin intermediul site-ului oficial sau platforme partenere.</li>
                <li>Pentru a garanta rezervarea, se poate solicita plata unui avans (ex: 30% din valoarea totală a sejurului).</li>
                <li>Rezervarea este considerată fermă doar după confirmarea plății avansului (dacă este cazul) și transmiterea confirmării scrise din partea Green Panorama Relax Concept.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">2. Check-in și check-out</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Check-in: de la ora 14:00</li>
                <li>Check-out: până la ora 11:00</li>
                <li>Check-in devreme sau check-out târziu sunt posibile în funcție de disponibilitate și pot implica taxe suplimentare.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">3. Politica de anulare</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rezervările pot fi anulate gratuit cu cel puțin 7 zile înainte de data sosirii.</li>
                <li>În cazul anulărilor efectuate cu mai puțin de 7 zile înainte de sosire sau în caz de neprezentare, avansul nu va fi returnat.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">4. Copii și paturi suplimentare</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copiii de toate vârstele sunt bineveniți.</li>
                <li>Nu sunt disponibile paturi suplimentare sau pătuțuri pentru copii.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">5. Animale de companie</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Animalele de companie sunt acceptate. Nu se percep taxe suplimentare.</li>
                <li>Oaspeții sunt rugați să anunțe prezența animalelor în momentul rezervării.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">6. Fumatul</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fumatul este strict interzis în toate spațiile interioare ale pensiunii.</li>
                <li>Sunt disponibile zone special amenajate pentru fumat în aer liber.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">7. Modalități de plată</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Se acceptă plata în numerar, cu cardul sau prin transfer bancar.</li>
                <li>Factura fiscală se emite la cerere.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">8. Regulament intern</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vă rugăm să respectați liniștea între orele 22:00 – 08:00.</li>
                <li>Orice daună adusă proprietății va fi suportată de către persoana responsabilă.</li>
                <li>Accesul în zonele private sau restricționate ale pensiunii este interzis.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">9. Forță majoră</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Green Panorama Relax Concept nu este responsabilă pentru anulări sau modificări ale rezervării cauzate de evenimente neprevăzute (ex: condiții meteo extreme, dezastre naturale, pandemii etc.).</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
