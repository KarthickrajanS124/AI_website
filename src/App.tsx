import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Features from './components/Features';
import InfiniteLogos from './components/InfiniteLogos';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import MoreFromVeed from './components/MoreFromVeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Steps />
      <Features />
      <InfiniteLogos />
      <Testimonials />
      <FAQ />
      <MoreFromVeed />
      <Footer />
    </div>
  );
}

export default App;