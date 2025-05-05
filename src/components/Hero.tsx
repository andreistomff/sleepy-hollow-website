
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
          alt="Sleepy Hollow Bed & Breakfast" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up opacity-0" style={{animationDelay: '0.2s'}}>
          Welcome to Sleepy Hollow
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-up opacity-0" style={{animationDelay: '0.4s'}}>
          Experience tranquility and comfort in our charming countryside retreat
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{animationDelay: '0.6s'}}>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Explore Rooms
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            View Gallery
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
