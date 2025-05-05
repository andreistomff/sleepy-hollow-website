
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <section id="gallery" className="section bg-secondary">
          <div className="container-custom">
            <h2 className="section-title">Galeria Noastră</h2>
            <p className="section-subtitle">
              Faceți un tur virtual al proprietății și camerelor noastre
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div key={index} className="overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all">
                  <img 
                    src={`https://images.unsplash.com/photo-${index % 3 === 0 ? '1482938289607-e9573fc25ebb' : index % 2 === 0 ? '1472396961693-142e6e269027' : '1466721591366-2d5fba72006d'}`}
                    alt={`Imagine galerie ${index}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a href="#" className="text-primary font-medium hover:underline">
                Vezi Galeria Completă
              </a>
            </div>
          </div>
        </section>
        
        <section id="prices" className="section">
          <div className="container-custom">
            <h2 className="section-title">Prețuri & Disponibilitate</h2>
            <p className="section-subtitle">
              Găsiți cazarea perfectă pentru șederea dumneavoastră
            </p>
            
            <div className="overflow-x-auto mt-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left">Tip Cameră</th>
                    <th className="p-4 text-left">Ocupare</th>
                    <th className="p-4 text-left">Tarif în timpul săptămânii</th>
                    <th className="p-4 text-left">Tarif weekend</th>
                    <th className="p-4 text-left">Tarif săptămânal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">Suita Grădină</td>
                    <td className="p-4">2 Adulți</td>
                    <td className="p-4">185€/noapte</td>
                    <td className="p-4">215€/noapte</td>
                    <td className="p-4">1.155€/săptămână</td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">Camera Salcie</td>
                    <td className="p-4">2 Adulți</td>
                    <td className="p-4">155€/noapte</td>
                    <td className="p-4">185€/noapte</td>
                    <td className="p-4">945€/săptămână</td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">Mansarda Istorică</td>
                    <td className="p-4">2 Adulți</td>
                    <td className="p-4">170€/noapte</td>
                    <td className="p-4">200€/noapte</td>
                    <td className="p-4">1.050€/săptămână</td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">Suita Căsuță</td>
                    <td className="p-4">4 Adulți</td>
                    <td className="p-4">250€/noapte</td>
                    <td className="p-4">295€/noapte</td>
                    <td className="p-4">1.575€/săptămână</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-accent/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 font-serif">Informații Suplimentare</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tarifele includ micul dejun pentru toți oaspeții.</li>
                <li>Copiii sub 5 ani stau gratuit când folosesc paturile existente.</li>
                <li>Paturi suplimentare sunt disponibile pentru 25€ pe noapte.</li>
                <li>Tarife speciale disponibile pentru șederi mai lungi de o săptămână.</li>
                <li>10% reducere pentru oaspeții care revin.</li>
                <li>Toate tarifele sunt supuse TVA de 8,5%.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
