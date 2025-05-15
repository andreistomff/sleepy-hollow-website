
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

const Index = () => {
  // Room data that matches the data from Rooms.tsx
  const roomPrices = [
    {
      name: "Camera dubla",
      displayName: "Cameră dublă",
      occupancy: "2 Adulți",
      price: 380
    },
    {
      name: "Camera deluxe",
      displayName: "Cameră deluxe",
      occupancy: "2 Adulți",
      price: 380
    },
    {
      name: "Camera king deluxe",
      displayName: "Cameră king deluxe",
      occupancy: "2 Adulți",
      price: 380
    },
    {
      name: "Camera dubla cu balcon",
      displayName: "Cameră dublă cu balcon",
      occupancy: "2-3 Adulți",
      price: 422
    },
    {
      name: "Camera dubla cu terasa",
      displayName: "Cameră dublă cu terasă",
      occupancy: "2-4 Adulți",
      price: 442
    },
    {
      name: "Apartament",
      displayName: "Apartament",
      occupancy: "2-4 Adulți",
      price: 451
    },
    {
      name: "Apartament deluxe",
      displayName: "Apartament deluxe",
      occupancy: "2-5 Adulți",
      price: 624
    }
  ];

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
              {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all">
                  <img 
                    src={`images/image${index + 1}.jpeg`}
                    alt={`Imagine galerie ${index}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
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
                    <th className="p-4 text-left flex items-center gap-2">
                      Tarif
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <InfoIcon className="h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="bg-amber-50 text-amber-600 border border-amber-200">
                          Prețurile se pot modifica în funcție de numărul de persoane.
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roomPrices.map((room, index) => (
                    <tr key={index} className="border-b hover:bg-accent/50 transition-colors">
                      <td className="p-4">{room.displayName}</td>
                      <td className="p-4">{room.occupancy}</td>
                      <td className="p-4">{room.price} RON/noapte</td>
                    </tr>
                  ))}
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
