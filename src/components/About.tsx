
import { Bed, Calendar, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-title">Despre GreenPanorama</h2>
        <p className="section-subtitle">
          Un refugiu fermecător la țară, ascuns în inima naturii
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <div className="space-y-4">
            <p className="text-lg">
            Green Panorama îmbină luxul cu natura, oferind un sejur relaxant și servicii de calitate într-un cadru select — ideal pentru familii, cupluri, prieteni, teambuildinguri sau evenimente speciale. Aici te simți cu adevărat „acasă, departe de casă”.
            </p>
            <p className="text-lg">
            Green Panorama oferă 22 de locuri de cazare în 4 camere duble, 2 triple cu balcon și 2 apartamente: Family (120 mp – 4 adulți, 2 copii) și Junior (90 mp – 2 adulți, 2 copii), ambele complet echipate pentru confortul oaspeților.
            </p>
            <p className="text-lg">
            Pentru un sejur complet, vă așteaptă sala multifuncțională (36–44 locuri), grătarul, bucătăria comună, cafeaua gratuită, piscinele, jacuzzi-ul interior și exterior, sauna, sala de masaj, masa de ping-pong și vatra de foc.
            </p>
          </div>
          
          <div className="grid gap-4">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="flex items-start p-6">
                <Calendar className="w-12 h-12 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Deschis tot anul</h3>
                  <p className="text-muted-foreground">
                    Experimentați frumusețea tuturor anotimpurilor alături de noi. Fiecare anotimp oferă un farmec și o experiență unică la GreenPanorama.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="flex items-start p-6">
                <Bed className="w-12 h-12 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cazare confortabilă</h3>
                  <p className="text-muted-foreground">
                  Fiecare cameră are un stil propriu, fiind dotată cu TV LCD, Wi-Fi gratuit, minibar, aparat de cafea, baie modernă cu duș hidromasaj, uscător de păr și halate.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="flex items-start p-6">
                <Phone className="w-12 h-12 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Servicii personalizate</h3>
                  <p className="text-muted-foreground">
                  Pensiunea găzduiește atât evenimente de familie, cât și corporate, precum teambuildinguri, sesiuni de lucru sau programe de wellbeing, oferind dotări adecvate și o echipă flexibilă pentru evenimente memorabile.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
