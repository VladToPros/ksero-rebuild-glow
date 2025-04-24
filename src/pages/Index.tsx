
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Add a class to create grid pattern on hero section
    const style = document.createElement('style');
    style.textContent = `
      .bg-grid-pattern {
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />

      {/* Products Section */}
      <section id="products" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze Produkty</h2>
            <div className="h-1 w-20 bg-ksero-light-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Oferujemy szeroki wybór wysokiej jakości produktów dla Twojego biura i firmy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Drukarki i urządzenia wielofunkcyjne',
              'Systemy komputerowe',
              'Oprogramowanie biznesowe',
              'Materiały eksploatacyjne',
              'Systemy zabezpieczeń',
              'Rozwiązania chmurowe'
            ].map((product, index) => (
              <div key={index} className="card group hover:border-ksero-light-blue border-2 border-transparent">
                <h3 className="text-xl font-bold mb-3">{product}</h3>
                <p className="text-gray-600 mb-4">
                  Profesjonalne rozwiązania dopasowane do potrzeb Twojej firmy.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-ksero-blue font-medium">Szczegóły</span>
                  <ChevronRight className="h-5 w-5 text-ksero-light-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default Index;
