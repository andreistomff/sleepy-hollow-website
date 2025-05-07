
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
            Combinând simplitatea cu luxul și inovația, un sejur la Green Panorama este o invitație  la descoperire, la distracție, la bucuria de a relaxa mintea și trupul într-un ambient select unde serviciile de calitate  și natura se îmbină pentru a va oferi o experiență unică de vacanță. Este alegerea potrivită pentru o excursie de grup, teambuilding, petrecerea unor evenimente de familie, sau pur și simplu pentru o evadare din cotidian. Familiile, cuplurile, prietenii vor descoperi un loc unde te poți simți „ACASA DEPARTE DE CASĂ”.
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
                  Fiecare cameră este personalizată și are stilul, luxul și rafinamentul propriu, fiind dotate cu televizor LCD cu cablu TV, acces internet Wi-Fi gratuit , minibar, coffee maker- selecție de ceaiuri și cafea. Baia este echipată modern cu cabina de duș cu  hidromasaj și obiecte sanitare de calitate, uscător de păr, halate de baie.
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
                  Pensiunea noastra poate fi gazda unor evenimente de familie, precum  și a unor evenimente corporate, fie ca este vorba de teambuilding,  sesiuni de lucru, programele de wellbeing  sau orice alta activitate pentru companii, dotarile specifice, experienta și flexibilitatea echipei noastre au ca rezultat final organizarea unui eveniment memorabil.
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
