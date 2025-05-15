import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

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

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const galleryImages = [
    { path: '/images/image1.jpeg', alt: 'Imagine galerie 1' },
    { path: '/images/image2.jpeg', alt: 'Imagine galerie 2' },
    { path: '/images/image3.jpeg', alt: 'Imagine galerie 3' },
    { path: '/images/image4.jpeg', alt: 'Imagine galerie 4' },
    { path: '/images/image5.jpeg', alt: 'Imagine galerie 5' },
    { path: '/images/image6.jpeg', alt: 'Imagine galerie 6' },
    { path: '/images/image7.jpeg', alt: 'Imagine galerie 7' },
  ];

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setGalleryOpen(true);
  };

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
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => openGallery(index)}
                >
                  <img 
                    src={image.path}
                    alt={image.alt}
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
                <li>Copiii de toate vârstele sunt bineveniți.</li>
                <li>Pătuțuri pentru copii și paturi suplimentare nu sunt disponibile la această proprietate.</li>
                <li>Animalele de companie sunt acceptate. Nu se percep taxe suplimentare.</li>
                <li>Fumatul in cameră este interzis.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <Amenities />
        <Contact />
      </main>
      <Footer />

      {/* Gallery Dialog - Using the hideCloseButton prop */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-transparent border-none overflow-hidden" hideCloseButton>
          <div className="relative bg-background/95 backdrop-blur-sm rounded-lg overflow-hidden">
            <DialogClose className="absolute right-4 top-4 z-50 bg-background/80 rounded-full p-2 hover:bg-background/90 transition-colors">
              <X className="h-5 w-5" />
            </DialogClose>
            
            <Carousel 
              className="w-full max-h-[80vh]"
              opts={{
                loop: true,
                startIndex: selectedImageIndex,
              }}
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center p-2 h-[80vh]">
                      <img 
                        src={image.path} 
                        alt={image.alt}
                        className="max-h-full max-w-full object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
            <ScrollArea className="w-full h-20 bg-background/80">
              <div className="flex p-2 gap-2">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`h-16 w-16 shrink-0 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImageIndex === index ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img 
                      src={image.path} 
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
