
import { Check, Printer, ShieldCheck, Settings, Monitor, RefreshCw } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Printer className="h-12 w-12 text-ksero-light-blue" />,
      title: 'Serwis urządzeń biurowych',
      description: 'Profesjonalna naprawa drukarek, kopiarek i innych urządzeń biurowych.'
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-ksero-light-blue" />,
      title: 'Ochrona danych',
      description: 'Kompleksowe rozwiązania dla bezpieczeństwa danych Twojej firmy.'
    },
    {
      icon: <Settings className="h-12 w-12 text-ksero-light-blue" />,
      title: 'Wsparcie techniczne',
      description: 'Pełna obsługa techniczna i konserwacja sprzętu IT.'
    },
    {
      icon: <Monitor className="h-12 w-12 text-ksero-light-blue" />,
      title: 'Systemy monitoringu',
      description: 'Instalacja i serwis systemów monitoringu dla firm i instytucji.'
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-ksero-light-blue" />,
      title: 'Regeneracja materiałów',
      description: 'Ekologiczna regeneracja tonerów i materiałów eksploatacyjnych.'
    },
    {
      icon: <Check className="h-12 w-12 text-ksero-light-blue" />,
      title: 'Audyt i optymalizacja',
      description: 'Audyt kosztów i optymalizacja rozwiązań dla Twojego biznesu.'
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze Usługi</h2>
          <div className="h-1 w-20 bg-ksero-light-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Oferujemy kompleksowe usługi w zakresie serwisu i naprawy sprzętu biurowego oraz systemów informatycznych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card bg-white hover:bg-ksero-blue hover:text-white group transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
                {service.description}
              </p>
              <div className="mt-6">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center font-medium text-ksero-light-blue group-hover:text-white transition-colors"
                >
                  Więcej informacji
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
