
import { BedDouble, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "The Garden Suite",
      description: "Our spacious suite featuring a king-sized bed, private bathroom with clawfoot tub, and beautiful garden views.",
      price: 185,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      amenities: ["King Bed", "Private Bathroom", "Garden View", "Sitting Area"]
    },
    {
      id: 2,
      name: "The Willow Room",
      description: "A cozy room with a queen bed, en-suite bathroom, and charming decor inspired by the surrounding countryside.",
      price: 155,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      amenities: ["Queen Bed", "En-suite Bathroom", "Rural View", "Writing Desk"]
    },
    {
      id: 3,
      name: "The Historic Loft",
      description: "Located in the original section of the house, this room features original wood beams and a unique circular window.",
      price: 170,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      amenities: ["Queen Bed", "Private Bathroom", "Historic Features", "Workspace"]
    }
  ];

  return (
    <section id="rooms" className="section">
      <div className="container-custom">
        <h2 className="section-title">Our Rooms</h2>
        <p className="section-subtitle">
          Comfortable and charming accommodations for your perfect getaway
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
                    <span className="text-muted-foreground font-normal">/night</span>
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
                  View Details
                </Button>
                <Button className="flex-1 bg-primary">
                  <BedDouble className="w-4 h-4 mr-2" />
                  Book Room
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
