
import { Check } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '20+', label: 'Lat doświadczenia' },
    { value: '1000+', label: 'Zadowolonych klientów' },
    { value: '24/7', label: 'Wsparcie techniczne' },
  ];

  const keyPoints = [
    'Certyfikowani specjaliści z wieloletnim doświadczeniem',
    'Nowoczesne zaplecze techniczne i laboratorium',
    'Kompleksowa obsługa serwisowa',
    'Indywidualne podejście do każdego klienta',
    'Szybki czas realizacji zleceń',
    'Konkurencyjne ceny i elastyczne warunki współpracy'
  ];

  return (
    <section id="about" className="section bg-ksero-gray">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O firmie KSERO K2 System</h2>
            <div className="h-1 w-20 bg-ksero-light-blue mb-6"></div>
            
            <p className="text-lg mb-6">
              Od ponad 20 lat świadczymy najwyższej jakości usługi serwisowe dla biznesu i przemysłu. 
              Nasza firma specjalizuje się w kompleksowej obsłudze technicznej urządzeń biurowych, 
              systemów informatycznych oraz dostawie rozwiązań dla nowoczesnego biura.
            </p>
            
            <div className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-ksero-light-blue" />
                  </div>
                  <p className="ml-3">{point}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary"
            >
              Skontaktuj się z nami
            </a>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-ksero-blue">{stat.value}</div>
                    <div className="mt-2 text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative pt-[56.25%] bg-ksero-blue">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-light">
                  KSERO K2 System
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Profesjonalizm i niezawodność</h3>
                <p className="text-gray-600">
                  Naszą misją jest zapewnienie klientom niezawodnych rozwiązań, które zwiększą 
                  efektywność ich pracy i zoptymalizują koszty prowadzenia działalności.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
