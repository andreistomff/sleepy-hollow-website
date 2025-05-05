
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
                <Button variant="outline" className="flex-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Vezi Detalii
                </Button>
                <Button className="flex-1 bg-primary">
                  <BedDouble className="w-4 h-4 mr-2" />
                  Rezervă Camera
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Vezi Toate Camerele
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
