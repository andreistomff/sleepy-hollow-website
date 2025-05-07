
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
      name: "Suita Grădină",
      description: "Suita noastră spațioasă cu un pat king size, baie privată cu cadă cu picioare și vederi frumoase spre grădină.",
      fullDescription: "Suita Grădină este una dintre cele mai căutate camere de pe proprietate. Oferind o priveliște spectaculoasă spre grădina proprie, această suită de lux de 45 mp combină eleganța cu confortul rural. Dormitorul principal este dotat cu un pat king size premium cu lenjerie de bumbac egiptean, iar baia spațioasă include o cadă cu picioare și produse de toaletă de lux. Zona de relaxare separată conține o canapea confortabilă, un minibar bine aprovizionat și facilități pentru prepararea ceaiului și cafelei. Perfectă pentru cuplurile care caută un refugiu romantic sau pentru călătorii individuali care apreciază spațiul și intimitatea.",
      price: 185,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      galleryImages: [
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1467987506553-8f3916508521"
      ],
      amenities: ["Pat King Size", "Baie Privată", "Vedere la Grădină", "Zonă de Relaxare"]
    },
    {
      id: 2,
      name: "Camera Salcie",
      description: "O cameră cochetă cu un pat queen size, baie proprie și decor fermecător inspirat de peisajul rural din jur.",
      fullDescription: "Camera Salcie este un refugiu intim de 30 mp ce emană farmecul rustic al regiunii. Decorată cu elemente tradiționale românești și mobilier din lemn de salcie locală, această cameră oferă o experiență autentică. Camera include un pat queen size confortabil, o baie modernă cu duș italian și produse eco-friendly. Fereastra panoramică oferă o priveliște neîntreruptă asupra naturii înconjurătoare, permițând oaspeților să se conecteze cu peisajul rural. Un birou spațios face din Camera Salcie și o opțiune excelentă pentru călătorii care trebuie să lucreze în timpul sejurului.",
      price: 155,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      galleryImages: [
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
        "https://images.unsplash.com/photo-1499916078039-922301b0eb9b",
        "https://images.unsplash.com/photo-1491183672482-d0af0e44929d"
      ],
      amenities: ["Pat Queen Size", "Baie Proprie", "Vedere Rurală", "Birou"]
    },
    {
      id: 3,
      name: "Mansarda Istorică",
      description: "Situată în secțiunea originală a casei, această cameră prezintă grinzi originale din lemn și o fereastră circulară unică.",
      fullDescription: "Mansarda Istorică este o cameră de 35 mp situată în podul original al casei principale, datând din anii 1920. Această cameră unică prezintă grinzile originale din lemn restaurate și o fereastră circulară caracteristică care oferă o vedere panoramică de 180° asupra dealurilor din jur. Patul queen size este plasat strategic pentru a profita de priveliște, iar baia privată include o cabină de duș spațioasă. Elementele istorice sunt îmbinate armonios cu comodități moderne, inclusiv aer condiționat, Wi-Fi de mare viteză și un spațiu de lucru dedicat. Perfectă pentru oaspeții care apreciază caracterul istoric și detaliile arhitecturale.",
      price: 170,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      galleryImages: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027",
        "https://images.unsplash.com/photo-1467987506553-8f3916508521",
        "https://images.unsplash.com/photo-1499916078039-922301b0eb9b"
      ],
      amenities: ["Pat Queen Size", "Baie Privată", "Elemente Istorice", "Spațiu de Lucru"]
    },
    {
      id: 4,
      name: "Suita Căsuță",
      description: "O suită independentă perfectă pentru familii, cu două dormitoare, bucătărie complet echipată și terasă privată.",
      fullDescription: "Suita Căsuță este alegerea ideală pentru familii sau grupuri mici, oferind 90 mp de spațiu de locuit confortabil. Această suită independentă include două dormitoare spațioase, fiecare cu propriul pat queen size și spațiu de depozitare generos. Bucătăria complet utilată este echipată cu aparate moderne, inclusiv un aragaz, cuptor cu microunde, frigider și ustensile esențiale pentru prepararea meselor. Zona de living are o canapea extensibilă, televizor smart și acces direct la terasa privată mobilată, perfectă pentru mesele în aer liber sau relaxare. Baia familială include atât duș, cât și cadă, iar facilitățile suplimentare pentru copii (pătuț, scaun înalt) sunt disponibile la cerere.",
      price: 250,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      galleryImages: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
      ],
      amenities: ["Două Dormitoare", "Bucătărie", "Terasă Privată", "Facilități pentru Familie"]
    },
    {
      id: 5,
      name: "Camera Panoramă",
      description: "Situată la ultimul etaj, această cameră oferă vederi panoramice spectaculoase ale dealurilor înconjurătoare.",
      fullDescription: "Camera Panoramă este o cameră premium de 40 mp, situată la ultimul etaj al pensiunii. După cum sugerează numele, principalul avantaj al acestei camere este vederea panoramică de 270° asupra dealurilor și văilor. Pereții sunt dotați cu ferestre mari de la podea până la tavan, creând o experiență imersivă cu natura din jur. Camera include un pat queen size de lux, o zonă de relaxare cu două fotolii confortabile și o masă de cafea, precum și un birou spațios cu priză ergonomică. Baia modernă include un duș walk-in cu efect de ploaie și produse de toaletă premium. Un minibar bine aprovizionat și o mașină de cafea espresso completează experiența de lux.",
      price: 190,
      image: "https://images.unsplash.com/photo-1491183672482-d0af0e44929d",
      galleryImages: [
        "https://images.unsplash.com/photo-1491183672482-d0af0e44929d",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      ],
      amenities: ["Pat Queen Size", "Vedere Panoramică", "Zonă de Lucru", "Mini Bar"]
    },
    {
      id: 6,
      name: "Apartamentul Rustic",
      description: "Un apartament cu două camere decorat în stil tradițional românesc, perfect pentru cei ce doresc mai mult spațiu.",
      fullDescription: "Apartamentul Rustic oferă 75 mp de spațiu de locuit decorat cu autenticitate în stil tradițional românesc, cu artefacte locale și țesături realizate manual. Designul include un dormitor principal privat cu un pat queen size confortabil și un living spațios cu o canapea extensibilă care poate acomoda doi oaspeți suplimentari. Baia spațioasă include o cadă adâncă ideală pentru relaxare după o zi de explorare. Mobilierul tradițional din lemn masiv este completat de opere de artă locale și covoare țesute manual. În ciuda esteticii rustic, apartamentul oferă toate comoditățile moderne necesare pentru un sejur confortabil, inclusiv internet de mare viteză, televizor smart și aer condiționat.",
      price: 230,
      image: "https://images.unsplash.com/photo-1467987506553-8f3916508521",
      galleryImages: [
        "https://images.unsplash.com/photo-1467987506553-8f3916508521",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
        "https://images.unsplash.com/photo-1491183672482-d0af0e44929d"
      ],
      amenities: ["Living Separat", "Dormitor Privat", "Baie Spațioasă", "Mobilier Tradițional"]
    },
    {
      id: 7,
      name: "Camera Romantică",
      description: "Camera noastră cea mai intimă, perfectă pentru cupluri, cu un pat king size și o cadă cu hidromasaj în cameră.",
      fullDescription: "Camera Romantică este creată special pentru cupluri care caută o evadare intimă. Cu o suprafață de 50 mp, această cameră luxoasă se mândrește cu un pat king size cu baldachin, plasat central pentru impact maxim. Caracteristica principală este cada cu hidromasaj pentru două persoane, poziționată strategic lângă o fereastră mare cu vedere la natură, dar cu intimitate completă. Un șemineu electric adaugă atmosferă romantică în serile răcoroase, iar intrarea privată asigură discreție totală. Iluminatul ambiental poate fi ajustat pentru a crea atmosfera perfectă, iar un sistem audio Bluetooth vă permite să vă bucurați de muzica preferată. O selecție de vinuri locale și șampanie este disponibilă în minibarul premium.",
      price: 205,
      image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b",
      galleryImages: [
        "https://images.unsplash.com/photo-1499916078039-922301b0eb9b",
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027"
      ],
      amenities: ["Pat King Size", "Cadă cu Hidromasaj", "Șemineu", "Intrare Privată"]
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
                <DialogDescription className="flex items-center text-primary font-semibold text-lg mt-2">
                  <DollarSign className="w-5 h-5 mr-1" />
                  <span>{getSelectedRoom()?.price}</span>
                  <span className="text-muted-foreground font-normal">/noapte</span>
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
                
                {/* Full Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Descriere</h3>
                  <p className="text-muted-foreground">{getSelectedRoom()?.fullDescription}</p>
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
                        className="px-4 py-2 bg-accent text-sm rounded-full"
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
