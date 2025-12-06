import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define the global AOS type locally since we are using CDN
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;