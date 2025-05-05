
import { Bed, Calendar, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-title">About Sleepy Hollow</h2>
        <p className="section-subtitle">
          A charming countryside retreat nestled in the heart of nature
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div className="space-y-4">
            <p className="text-lg">
              Sleepy Hollow Bed & Breakfast offers a peaceful escape from the bustle of everyday life. Situated on 5 acres of beautiful woodland, our historic property dates back to 1875 and has been lovingly restored to create a comfortable and inviting atmosphere.
            </p>
            <p className="text-lg">
              Our location is perfect for those seeking tranquility, with scenic walking trails, nearby fishing spots, and beautiful gardens to explore. Yet, we're conveniently located just 15 minutes from downtown with easy access to local attractions.
            </p>
            <p className="text-lg">
              At Sleepy Hollow, we pride ourselves on our warm hospitality, attention to detail, and our sumptuous homemade breakfasts featuring locally-sourced ingredients.
            </p>
          </div>
          
          <div className="grid gap-4">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="flex items-start p-6">
                <Calendar className="w-12 h-12 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Open Year-Round</h3>
                  <p className="text-muted-foreground">
                    Experience the beauty of all seasons with us. Each season offers a unique charm and experience at Sleepy Hollow.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="flex items-start p-6">
                <Bed className="w-12 h-12 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comfortable Accommodations</h3>
                  <p className="text-muted-foreground">
                    Each room is uniquely decorated with antique furnishings, comfortable beds, and modern amenities.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="flex items-start p-6">
                <Phone className="w-12 h-12 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personal Service</h3>
                  <p className="text-muted-foreground">
                    We're always available to help with recommendations for local dining, attractions, and activities to make your stay memorable.
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
