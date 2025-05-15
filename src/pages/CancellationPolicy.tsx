
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CancellationPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Politica de anulare</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 font-serif text-primary">Green Panorama Relax Concept</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">1. Anulare gratuită</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Oaspeții pot anula rezervarea gratuit cu cel puțin <strong>7 zile înainte</strong> de data sosirii.</li>
                <li>În acest caz, dacă s-a achitat un avans, suma va fi returnată integral în termen de 5 zile lucrătoare.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">2. Anulare cu mai puțin de 7 zile înainte de sosire</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pentru anulările făcute cu <strong>mai puțin de 7 zile</strong> înainte de data sosirii, <strong>avansul achitat nu se returnează</strong>.</li>
                <li>Dacă nu a fost achitat un avans, se poate solicita plata unei taxe echivalente cu prima noapte de cazare.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">3. Neprezentare (No-show)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>În caz de neprezentare la check-in în ziua rezervării, rezervarea este considerată anulată, iar <strong>avansul nu este returnabil</strong>.</li>
                <li>Camera poate fi redisponibilizată pentru alți oaspeți după ora 22:00, în lipsa unui anunț din partea clientului.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">4. Modificarea datelor rezervării</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modificările de dată se acceptă gratuit cu cel puțin 7 zile înainte, în funcție de disponibilitate.</li>
                <li>Dacă modificarea nu este posibilă sau este solicitată cu mai puțin de 7 zile înainte, se aplică politica de anulare standard.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-4 font-serif">5. Cazuri speciale (forță majoră)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>În situații excepționale (ex: evenimente neprevăzute, condiții meteo extreme, restricții legale), se pot aplica condiții flexibile, cu reprogramarea sejurului sau returnarea avansului, după caz.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationPolicy;
