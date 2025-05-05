
import { CheckCircle } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { category: "Confort", items: ["WiFi Gratuit", "Aer Condiționat", "Încălzire", "Curățenie Zilnică", "Lenjerie Premium"] },
    { category: "Mâncare & Băutură", items: ["Mic Dejun Făcut în Casă", "Facilități pentru Ceai/Cafea", "Opțiuni Dietetice Disponibile", "Bar cu Autoservire", "Zonă de Luat Masa în Aer Liber"] },
    { category: "Exterior", items: ["Grădină", "Terasă", "Foc de Tabără", "Facilități pentru Grătar", "Parcare"] },
    { category: "Activități", items: ["Jocuri de Societate", "Bibliotecă", "Plimbări Ghidate în Natură", "Închiriere Biciclete", "Tururi Locale"] }
  ];

  return (
    <section className="section bg-accent/50">
      <div className="container-custom">
        <h2 className="section-title">Facilități & Servicii</h2>
        <p className="section-subtitle">
          Tot ce aveți nevoie pentru o ședere confortabilă și memorabilă
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {amenities.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 font-serif">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
