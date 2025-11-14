import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServiceBlocks from './components/ServiceBlocks';
import KPIs from './components/KPIs';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import MenuShowcase from './components/MenuShowcase';
import Testimonials from './components/Testimonials';
import CTATest from './components/CTATest';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ServiceBlocks />
      <KPIs />
      <TrustedBy />
      <Services />
      <WhyUs />
      <MenuShowcase />
      <Testimonials />
      <CTATest />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
