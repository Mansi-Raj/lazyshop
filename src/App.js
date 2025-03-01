import React from 'react';
import { ProductProvider } from './contexts/ProductContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <ProductProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Hero />
        <main className="flex-grow">
          <ProductSection />
          <Features />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default App;