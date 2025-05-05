
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-title">Contactați-ne</h2>
        <p className="section-subtitle">
          Ne-ar plăcea să avem vești de la dumneavoastră. Contactați-ne cu orice întrebări despre șederea dvs.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nume
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Numele dvs." 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email@exemplu.ro" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subiect
                </label>
                <Input 
                  id="subject" 
                  placeholder="Cum vă putem ajuta?" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mesaj
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Mesajul dvs. aici..." 
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Trimite Mesaj
              </Button>
            </form>
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
                    <p className="text-muted-foreground">info@sleepyhollow.ro</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Adresă</p>
                    <p className="text-muted-foreground">123 Strada Pădurii, Sleepy Hollow, Brașov 123456</p>
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
            
            <div>
              <h3 className="text-xl font-semibold mb-4 font-serif">Indicații</h3>
              <p className="text-muted-foreground mb-4">
                Situat la doar 45 de minute de cel mai apropiat aeroport internațional.
                Urmați indicatoarele spre Sleepy Hollow, faceți stânga la stejarul bătrân de pe Strada Pădurii.
              </p>
              <Button variant="outline" className="w-full">
                Obține Indicații
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
