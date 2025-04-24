
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'O nas', href: '#about' },
    { name: 'Usługi', href: '#services' },
    { name: 'Produkty', href: '#products' },
    { name: 'Kontakt', href: '#contact' },
  ];
  
  const services = [
    'Serwis urządzeń biurowych',
    'Systemy informatyczne',
    'Ochrona danych',
    'Audyt i optymalizacja',
    'Wsparcie techniczne',
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">KSERO</span>
              <span className="text-2xl font-light text-ksero-light-blue">K2</span>
            </div>
            <p className="text-gray-400 mb-6">
              Profesjonalne rozwiązania techniczne dla Twojego biznesu.
              Sprawdzona jakość i niezawodność od ponad 20 lat.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-ksero-light-blue transition flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Nasze usługi</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-ksero-light-blue transition flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block">ul. Przykładowa 123</span>
                <span className="block">00-000 Warszawa</span>
              </li>
              <li>
                <span className="block">Tel: +48 123 456 789</span>
                <span className="block">Email: kontakt@ksero-k2system.pl</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} KSERO K2 System. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ksero-light-blue transition">Polityka prywatności</a>
              <a href="#" className="text-gray-400 hover:text-ksero-light-blue transition">Warunki korzystania</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
