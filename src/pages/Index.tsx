
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <section id="gallery" className="section bg-secondary">
          <div className="container-custom">
            <h2 className="section-title">Our Gallery</h2>
            <p className="section-subtitle">
              Take a visual tour of our property and accommodations
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div key={index} className="overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all">
                  <img 
                    src={`https://images.unsplash.com/photo-${index % 3 === 0 ? '1482938289607-e9573fc25ebb' : index % 2 === 0 ? '1472396961693-142e6e269027' : '1466721591366-2d5fba72006d'}`}
                    alt={`Gallery image ${index}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a href="#" className="text-primary font-medium hover:underline">
                View Full Gallery
              </a>
            </div>
          </div>
        </section>
        
        <section id="prices" className="section">
          <div className="container-custom">
            <h2 className="section-title">Prices & Availability</h2>
            <p className="section-subtitle">
              Find the perfect accommodation for your stay
            </p>
            
            <div className="overflow-x-auto mt-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left">Room Type</th>
                    <th className="p-4 text-left">Occupancy</th>
                    <th className="p-4 text-left">Weekday Rate</th>
                    <th className="p-4 text-left">Weekend Rate</th>
                    <th className="p-4 text-left">Weekly Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">The Garden Suite</td>
                    <td className="p-4">2 Adults</td>
                    <td className="p-4">$185/night</td>
                    <td className="p-4">$215/night</td>
                    <td className="p-4">$1,155/week</td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">The Willow Room</td>
                    <td className="p-4">2 Adults</td>
                    <td className="p-4">$155/night</td>
                    <td className="p-4">$185/night</td>
                    <td className="p-4">$945/week</td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">The Historic Loft</td>
                    <td className="p-4">2 Adults</td>
                    <td className="p-4">$170/night</td>
                    <td className="p-4">$200/night</td>
                    <td className="p-4">$1,050/week</td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">Cottage Suite</td>
                    <td className="p-4">4 Adults</td>
                    <td className="p-4">$250/night</td>
                    <td className="p-4">$295/night</td>
                    <td className="p-4">$1,575/week</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-accent/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 font-serif">Additional Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rates include breakfast for all guests.</li>
                <li>Children under 5 stay free when using existing bedding.</li>
                <li>Additional rollaway beds are available for $25 per night.</li>
                <li>Special rates available for extended stays beyond one week.</li>
                <li>10% discount for returning guests.</li>
                <li>All rates are subject to 8.5% tax.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
