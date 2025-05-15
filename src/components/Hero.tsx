
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/b0f0d474-0ff4-4c67-a651-479bee41d8b4.png" 
          alt="Pensiunea GreenPanorama" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Bine ai venit la GreenPanorama!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Descoperă un loc unde te simți acasă, departe de casă.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => {
            document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explorează Camerele
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Derulează în jos">
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
