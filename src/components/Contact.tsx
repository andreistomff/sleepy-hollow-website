
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          We'd love to hear from you. Reach out with any questions about your stay.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
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
                    placeholder="your@email.com" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 font-serif">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@sleepyhollow.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">123 Woodland Lane, Sleepy Hollow, NY 10591</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 font-serif">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Check-in:</span>
                  <span>3:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Check-out:</span>
                  <span>11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Office Hours:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Late check-in available with prior arrangement.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 font-serif">Directions</h3>
              <p className="text-muted-foreground mb-4">
                Located just 45 minutes from the nearest international airport. 
                Follow signs to Sleepy Hollow, turn left at the old oak tree on Woodland Lane.
              </p>
              <Button variant="outline" className="w-full">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
