
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation to create a staggered effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-ksero-blue to-blue-900 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-1000`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Profesjonalne rozwiązania techniczne
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Od ponad 20 lat dostarczamy najwyższej jakości usługi i produkty dla biznesu i przemysłu.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#services" 
                className="btn btn-primary bg-ksero-light-blue text-white hover:bg-opacity-90 hover:translate-y-[-2px] transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Nasze usługi
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-ksero-blue hover:translate-y-[-2px] transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Skontaktuj się
              </a>
            </div>
          </div>
          
          <div className={`rounded-lg overflow-hidden shadow-2xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-1000 delay-300`}>
            <div className="bg-white p-8 rounded-lg">
              <div className="w-full aspect-video bg-ksero-gray flex items-center justify-center">
                <div className="text-4xl font-bold text-ksero-blue">KSERO K2 System</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about"
          className="animate-bounce p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronRight className="h-6 w-6 transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
