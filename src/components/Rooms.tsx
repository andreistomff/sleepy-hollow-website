import { BedDouble, Calendar, DollarSign, X, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { useState } from "react";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  
  const rooms = [
    {
      id: 1,
      name: "Camera dubla",
      description: "Cameră de 28 m², cu 1 pat dublu mare, vedere la gradină",
      fullDescription: "Toaletă Cadă sau duş Pardoseală de lemn sau parchet Prosoape Lenjerie de pat Priză lângă pat Pardoseală de gresie/marmură Zonă de relaxare TV Frigider Încălzire Uscător de păr Cană fierbător Mobilier de grădină Zonă de luat masa în aer liber Canale prin cablu Garderobă sau dulap Zonă de luat masa Masă Etaje superioare accesibile doar pe scări Hârtie igienică",
      price: 380,
      priceList: [
        { persons: 1, price: 342 },
        { persons: 2, price: 380 }
      ],
      image: "https://i.imgur.com/24h6opw.jpeg",
      galleryImages: [
        "https://i.imgur.com/24h6opw.jpeg",
        "https://i.imgur.com/MfBG16F.jpeg",
        "https://i.imgur.com/24h6opw.jpeg"
      ],
      amenities: ["Toaletă", "Cadă sau duş", "Pardoseală de lemn sau parchet", "Prosoape", "Lenjerie de pat", "Priză lângă pat", "Pardoseală de gresie/marmură", "Zonă de relaxare", "TV", "Frigider", "Încălzire", "Uscător de păr", "Cană fierbător", "Mobilier de grădină", "Zonă de luat masa în aer liber", "Canale prin cablu", "Garderobă sau dulap", "Zonă de luat masa", "Masă", "Etaje superioare accesibile doar pe scări", "Hârtie igienică"]
    },
    {
      id: 2,
      name: "Cameră deluxe",
      description: "Cameră de 30 m², cu 1 pat dublu mare, vedere la gradină",
      fullDescription: "Toaletă Cadă sau duş Pardoseală de lemn sau parchet Prosoape Lenjerie de pat Priză lângă pat Pardoseală de gresie/marmură Zonă de relaxare TV Frigider Încălzire Uscător de păr Cană fierbător Mobilier de grădină Zonă de luat masa în aer liber Canale prin cablu Garderobă sau dulap Zonă de luat masa Masă Etaje superioare accesibile doar pe scări Hârtie igienică",
      price: 380,
      priceList: [
        { persons: 1, price: 342 },
        { persons: 2, price: 380 }
      ],
      image: "https://i.imgur.com/PSG1dt6.jpeg",
      galleryImages: [
        "https://i.imgur.com/PSG1dt6.jpeg",
        "https://i.imgur.com/kmXWsPw.jpeg",
        "https://i.imgur.com/0qbGlat.jpeg"
      ],
      amenities: ["Toaletă", "Cadă sau duş", "Pardoseală de lemn sau parchet", "Prosoape", "Lenjerie de pat", "Priză lângă pat", "Pardoseală de gresie/marmură", "Zonă de relaxare", "TV", "Frigider", "Încălzire", "Uscător de păr", "Cană fierbător", "Mobilier de grădină", "Zonă de luat masa în aer liber", "Canale prin cablu", "Garderobă sau dulap", "Zonă de luat masa", "Masă", "Etaje superioare accesibile doar pe scări", "Hârtie igienică"]
    },
    {
      id: 3,
      name: "Cameră king deluxe",
      description: "Cameră 31 m², 1 pat dublu mare",
      fullDescription: "Toaletă Cadă sau duş Pardoseală de lemn sau parchet Prosoape Lenjerie de pat Priză lângă pat Pardoseală de gresie/marmură Zonă de relaxare TV Frigider Încălzire Uscător de păr Cană fierbător Mobilier de grădină Zonă de luat masa în aer liber Canale prin cablu Garderobă sau dulap Zonă de luat masa Masă Etaje superioare accesibile doar pe scări Hârtie igienică",
      price: 380,
      priceList: [
        { persons: 1, price: 342 },
        { persons: 2, price: 380 }
      ],
      image: "https://i.imgur.com/4uB93gV.jpeg",
      galleryImages: [
        "https://i.imgur.com/4uB93gV.jpeg",
        "https://i.imgur.com/AAy67ld.jpeg",
        "https://i.imgur.com/CgYiynd.jpeg"
      ],
      amenities: ["Toaletă", "Cadă sau duş", "Pardoseală de lemn sau parchet", "Prosoape", "Lenjerie de pat", "Priză lângă pat", "Pardoseală de gresie/marmură", "Zonă de relaxare", "TV", "Frigider", "Încălzire", "Uscător de păr", "Cană fierbător", "Mobilier de grădină", "Zonă de luat masa în aer liber", "Canale prin cablu", "Garderobă sau dulap", "Zonă de luat masa", "Masă", "Etaje superioare accesibile doar pe scări", "Hârtie igienică"]
    },
    {
      id: 4,
      name: "Camera dubla cu balcon",
      description: "Cameră de 35 m², 1 pat dublu mare",
      fullDescription: "Toaletă Cadă sau duş Pardoseală de lemn sau parchet Prosoape Lenjerie de pat Priză lângă pat Pardoseală de gresie/marmură Zonă de relaxare Intrare privată TV Frigider Încălzire Uscător de păr Cană fierbător Mobilier de grădină Zonă de luat masa în aer liber Canale prin cablu Garderobă sau dulap Zonă de luat masa Masă Etaje superioare accesibile doar pe scări Hârtie igienică Canapea extensibilă",
      price: 422,
      priceList: [
        { persons: 1, price: 342 },
        { persons: 2, price: 422 },
        { persons: 3, price: 480 }
      ],
      image: "https://i.imgur.com/zURNDhB.jpeg",
      galleryImages: [
        "https://i.imgur.com/zURNDhB.jpeg",
        "https://i.imgur.com/r6aJp2U.jpeg",
        "https://i.imgur.com/m7H9ULO.jpeg"
      ],
      amenities: ["Toaletă", "Cadă sau duş", "Pardoseală de lemn sau parchet", "Prosoape", "Lenjerie de pat", "Priză lângă pat", "Pardoseală de gresie/marmură", "Zonă de relaxare", "Intrare privată", "TV", "Frigider", "Încălzire", "Uscător de păr", "Cană fierbător", "Mobilier de grădină", "Zonă de luat masa în aer liber", "Canale prin cablu", "Garderobă sau dulap", "Zonă de luat masa", "Masă", "Etaje superioare accesibile doar pe scări", "Hârtie igienică", "Canapea extensibilă"]
    },
    {
      id: 5,
      name: "Camera dubla cu terasa",
      description: "Cameră de 45 m², 1 canapea extensibila si 1 pat dublu mare",
      fullDescription: "Toaletă Cadă sau duş Pardoseală de lemn sau parchet Prosoape Lenjerie de pat Priză lângă pat Pardoseală de gresie/marmură Zonă de relaxare Intrare privată TV Frigider Aparat pentru prepararea de ceai/cafea Încălzire Uscător de păr Mobilier de grădină Zonă de luat masa în aer liber Canale prin cablu Garderobă sau dulap Zonă de luat masa Masă Etaje superioare accesibile doar pe scări Hârtie igienică Canapea extensibilă",
      price: 442,
      priceList: [
        { persons: 1, price: 416 },
        { persons: 2, price: 442 },
        { persons: 3, price: 468 },
        { persons: 4, price: 520 }
      ],
      image: "https://i.imgur.com/lFTVT1x.jpeg",
      galleryImages: [
        "https://i.imgur.com/lFTVT1x.jpeg",
        "https://i.imgur.com/Ydf2XmQ.jpeg",
        "https://i.imgur.com/IUC8EHi.jpeg"
      ],
      amenities: ["Toaletă", "Cadă sau duş", "Pardoseală de lemn sau parchet", "Prosoape", "Lenjerie de pat", "Priză lângă pat", "Pardoseală de gresie/marmură", "Zonă de relaxare", "Intrare privată", "TV", "Frigider", "Aparat pentru prepararea de ceai/cafea", "Încălzire", "Uscător de păr", "Mobilier de grădină", "Zonă de luat masa în aer liber", "Canale prin cablu", "Garderobă sau dulap", "Zonă de luat masa", "Masă", "Etaje superioare accesibile doar pe scări", "Hârtie igienică", "Canapea extensibilă"]
    },
    {
      id: 6,
      name: "Apartament",
      description: "80 m², 1 pat dublu mare, 1 canapea extensibila",
      fullDescription: "Toaletă Cadă sau duş Pardoseală de lemn sau parchet Prosoape Lenjerie de pat Priză lângă pat Pardoseală de gresie/marmură Zonă de relaxare Intrare privată TV Frigider Aparat pentru prepararea de ceai/cafea Încălzire Uscător de păr Ustensile de bucătărie Chicinetă Mobilier de grădină Zonă de luat masa în aer liber Canale prin cablu Garderobă sau dulap Zonă de luat masa Masă Hârtie igienică Canapea extensibilă",
      price: 451,
      priceList: [
        { persons: 1, price: 413 },
        { persons: 2, price: 451 },
        { persons: 3, price: 495 },
        { persons: 4, price: 550 }
      ],
      image: "https://i.imgur.com/X1uSGUb.jpeg",
      galleryImages: [
        "https://i.imgur.com/X1uSGUb.jpeg",
        "https://i.imgur.com/B6wRxyQ.jpeg",
        "https://i.imgur.com/P6htDHQ.jpeg"
      ],
      amenities: ["Toaletă", "Cadă sau duş", "Pardoseală de lemn sau parchet", "Prosoape", "Lenjerie de pat", "Priză lângă pat", "Pardoseală de gresie/marmură", "Zonă de relaxare", "Intrare privată", "TV", "Frigider", "Aparat pentru prepararea de ceai/cafea", "Încălzire", "Uscător de păr", "Ustensile de bucătărie", "Chicinetă", "Mobilier de grădină", "Zonă de luat masa în aer liber", "Canale prin cablu", "Garderobă sau dulap", "Zonă de luat masa", "Masă", "Hârtie igienică", "Canapea extensibilă"]
    },
    {
      id: 7,
      name: "Apartament deluxe",
      description: "110 m², 1 pat dublu mare in dormitor 1, 1 pat dublu mare in dormitor 2, 1 canapea extensibila",
      fullDescription: "Cadă cu hidromasaj Toaletă Șemineu Cadă sau duş Pardoseală de lemn sau parchet Prosoape Lenjerie de pat Priză lângă pat Pardoseală de gresie/marmură Zonă de relaxare TV Frigider Aparat pentru prepararea de ceai/cafea Încălzire Uscător de păr Mobilier de grădină Zonă de luat masa în aer liber Canale prin cablu Garderobă sau dulap Zonă de luat masa Masă Hârtie igienică Canapea extensibilă",
      price: 624,
      priceList: [
        { persons: 1, price: 584 },
        { persons: 2, price: 624 },
        { persons: 3, price: 672 },
        { persons: 4, price: 736 },
        { persons: 5, price: 800 }
      ],
      image: "/images/apart deluxe 1.jpg",
      galleryImages: [
        "/images/apart deluxe 1.jpg",
        "/images/apart deluxe 2.jpg",
        "/images/apart deluxe 3.jpg"
      ],
      amenities: ["Cadă cu hidromasaj", "Toaletă", "Șemineu", "Cadă sau duş", "Pardoseală de lemn sau parchet", "Prosoape", "Lenjerie de pat", "Priză lângă pat", "Pardoseală de gresie/marmură", "Zonă de relaxare", "TV", "Frigider", "Aparat pentru prepararea de ceai/cafea", "Încălzire", "Uscător de păr", "Mobilier de grădină", "Zonă de luat masa în aer liber", "Canale prin cablu", "Garderobă sau dulap", "Zonă de luat masa", "Masă", "Hârtie igienică", "Canapea extensibilă"]
    }
  ];

  const openRoomDetails = (roomId: number) => {
    setSelectedRoom(roomId);
  };

  const closeRoomDetails = () => {
    setSelectedRoom(null);
  };

  const getSelectedRoom = () => {
    return rooms.find(room => room.id === selectedRoom) || null;
  };

  return (
    <section id="rooms" className="section">
      <div className="container-custom">
        <h2 className="section-title">Camerele Noastre</h2>
        <p className="section-subtitle">
          Cazare confortabilă și fermecătoare pentru vacanța dumneavoastră perfectă
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <div className="flex items-center text-primary">
                    <span className="text-lg font-semibold">{room.price}</span>
                    <span className="text-lg text-muted-foreground font-normal"> RON/noapte</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{room.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full" onClick={() => openRoomDetails(room.id)}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Vezi Detalii
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Room Details Dialog */}
      <Dialog open={selectedRoom !== null} onOpenChange={closeRoomDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {getSelectedRoom() && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{getSelectedRoom()?.name}</DialogTitle>
                <DialogDescription className="text-lg mt-2">
                  {getSelectedRoom()?.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {getSelectedRoom()?.galleryImages.map((image, index) => (
                    <div key={index} className={`overflow-hidden rounded-lg ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                      <img 
                        src={image} 
                        alt={`${getSelectedRoom()?.name} imagine ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Price List */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Prețuri
                  </h3>
                  <div className="space-y-2">
                    {getSelectedRoom()?.priceList.map((price, index) => (
                      <div key={index} className="flex justify-between items-center border-b pb-2">
                        <span>{price.persons} {price.persons === 1 ? "persoană" : "persoane"}</span>
                        <span className="font-semibold">{price.price} RON/noapte</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Amenities */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Facilități
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {getSelectedRoom()?.amenities.map((amenity, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-accent text-xs rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <DialogClose asChild>
                  <Button>Închide</Button>
                </DialogClose>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Rooms;
