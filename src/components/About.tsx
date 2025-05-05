
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
        
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div className="space-y-4">
            <p className="text-lg">
              Pensiunea GreenPanorama oferă o evadare liniștită din agitația vieții de zi cu zi. Situată pe 5 acri de pădure frumoasă, proprietatea noastră istorică datează din 1875 și a fost restaurată cu dragoste pentru a crea o atmosferă confortabilă și primitoare.
            </p>
            <p className="text-lg">
              Locația noastră este perfectă pentru cei care caută liniște, cu trasee pitorești de plimbare, locuri de pescuit în apropiere și grădini frumoase de explorat. Cu toate acestea, suntem convenabil situați la doar 15 minute de centrul orașului, cu acces ușor la atracțiile locale.
            </p>
            <p className="text-lg">
              La GreenPanorama, ne mândrim cu ospitalitatea noastră caldă, atenția la detalii și micul nostru dejun delicios preparat în casă, cu ingrediente de proveniență locală.
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
                    Fiecare cameră este decorată în mod unic cu mobilier antic, paturi confortabile și facilități moderne.
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
                    Suntem mereu disponibili pentru a vă ajuta cu recomandări pentru restaurante locale, atracții și activități pentru a face șederea dvs. memorabilă.
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
