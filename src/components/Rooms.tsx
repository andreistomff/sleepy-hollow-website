
import { BedDouble, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Suita Grădină",
      description: "Suita noastră spațioasă cu un pat king size, baie privată cu cadă cu picioare și vederi frumoase spre grădină.",
      price: 185,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      amenities: ["Pat King Size", "Baie Privată", "Vedere la Grădină", "Zonă de Relaxare"]
    },
    {
      id: 2,
      name: "Camera Salcie",
      description: "O cameră cochetă cu un pat queen size, baie proprie și decor fermecător inspirat de peisajul rural din jur.",
      price: 155,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      amenities: ["Pat Queen Size", "Baie Proprie", "Vedere Rurală", "Birou"]
    },
    {
      id: 3,
      name: "Mansarda Istorică",
      description: "Situată în secțiunea originală a casei, această cameră prezintă grinzi originale din lemn și o fereastră circulară unică.",
      price: 170,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      amenities: ["Pat Queen Size", "Baie Privată", "Elemente Istorice", "Spațiu de Lucru"]
    },
    {
      id: 4,
      name: "Suita Căsuță",
      description: "O suită independentă perfectă pentru familii, cu două dormitoare, bucătărie complet echipată și terasă privată.",
      price: 250,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      amenities: ["Două Dormitoare", "Bucătărie", "Terasă Privată", "Facilități pentru Familie"]
    },
    {
      id: 5,
      name: "Camera Panoramă",
      description: "Situată la ultimul etaj, această cameră oferă vederi panoramice spectaculoase ale dealurilor înconjurătoare.",
      price: 190,
      image: "https://images.unsplash.com/photo-1491183672482-d0af0e44929d",
      amenities: ["Pat Queen Size", "Vedere Panoramică", "Zonă de Lucru", "Mini Bar"]
    },
    {
      id: 6,
      name: "Apartamentul Rustic",
      description: "Un apartament cu două camere decorat în stil tradițional românesc, perfect pentru cei ce doresc mai mult spațiu.",
      price: 230,
      image: "https://images.unsplash.com/photo-1467987506553-8f3916508521",
      amenities: ["Living Separat", "Dormitor Privat", "Baie Spațioasă", "Mobilier Tradițional"]
    },
    {
      id: 7,
      name: "Camera Romantică",
      description: "Camera noastră cea mai intimă, perfectă pentru cupluri, cu un pat king size și o cadă cu hidromasaj în cameră.",
      price: 205,
      image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b",
      amenities: ["Pat King Size", "Cadă cu Hidromasaj", "Șemineu", "Intrare Privată"]
    }
  ];

  return (
    <section id="rooms" className="section">
      <div className="container-custom">
        <h2 className="section-title">Camerele Noastre</h2>
        <p className="section-subtitle">
          Cazare confortabilă și fermecătoare pentru vacanța dumneavoastră perfectă
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <div className="flex items-center text-primary font-semibold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>{room.price}</span>
                    <span className="text-muted-foreground font-normal">/noapte</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-accent text-xs rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Vezi Detalii
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
