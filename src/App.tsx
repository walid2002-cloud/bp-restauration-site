import { useEffect } from 'react';
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

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty('--scroll', max > 0 ? String(window.scrollY / max) : '0');
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="scroll-progress" aria-hidden />
      <Navigation />
      <main>
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
