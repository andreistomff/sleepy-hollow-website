
import { CheckCircle } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { category: "Comfort", items: ["Free WiFi", "Air Conditioning", "Heating", "Daily Housekeeping", "Premium Linens"] },
    { category: "Food & Drink", items: ["Homemade Breakfast", "Tea/Coffee Facilities", "Dietary Options Available", "Honor Bar", "Outdoor Dining Area"] },
    { category: "Outdoor", items: ["Garden", "Terrace", "Firepit", "BBQ Facilities", "Parking"] },
    { category: "Activities", items: ["Board Games", "Library", "Guided Nature Walks", "Bicycle Rental", "Local Tours"] }
  ];

  return (
    <section className="section bg-accent/50">
      <div className="container-custom">
        <h2 className="section-title">Amenities & Services</h2>
        <p className="section-subtitle">
          Everything you need for a comfortable and memorable stay
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {amenities.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 font-serif">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
