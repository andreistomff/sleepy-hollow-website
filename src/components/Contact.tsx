
import { Phone, Mail, MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleNavigateWithWaze = () => {
    // Coordinates for GreenPanorama (example coordinates)
    const latitude = 45.6427;
    const longitude = 25.5887;
    const wazeUrl = `https://www.waze.com/ul?ll=${latitude}%2C${longitude}&navigate=yes`;
    window.open(wazeUrl, '_blank');
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-title">Contactați-ne</h2>
        <p className="section-subtitle">
          Ne-ar plăcea să avem vești de la dumneavoastră. Contactați-ne cu orice întrebări despre șederea dvs.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div className="p-8 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-6 font-serif">Navigați direct la noi</h3>
              <p className="mb-6 text-muted-foreground">
                Folosiți Waze pentru a primi indicații de navigare exacte către Pensiunea GreenPanorama.
              </p>
              <Button 
                onClick={handleNavigateWithWaze}
                className="w-full flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" /> Navigare cu Waze
              </Button>
            </div>
            
            <div className="p-8 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-6 font-serif">Rezervări Online</h3>
              <p className="mb-6 text-muted-foreground">
                Puteți rezerva camera dorită și prin platformele noastre partenere:
              </p>
              <div className="space-y-4">
                <Button 
                  onClick={() => window.open('https://www.booking.com/hotel/ro/green-panorama-relax-concept.ro.html', '_blank')}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" /> Rezervă pe Booking.com
                </Button>
                <Button 
                  onClick={() => window.open('https://travelminit.ro/green-panorama-relax-concept-baile-olanesti', '_blank')}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" /> Rezervă pe Travelminit
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 font-serif">Informații de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@greenpanorama.ro</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Adresă</p>
                    <p className="text-muted-foreground">123 Strada Pădurii, GreenPanorama, Brașov 123456</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 font-serif">Program</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Check-in:</span>
                  <span>15:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Check-out:</span>
                  <span>11:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Program Recepție:</span>
                  <span>8:00 - 20:00</span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Check-in târziu disponibil cu aranjament prealabil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
