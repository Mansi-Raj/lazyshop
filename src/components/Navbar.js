import React, { useState, useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {
  const { cartQuantity, isCartOpen, setIsCartOpen } = useProductContext();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>LazyShop</span>
            </div>
            
            {/* Navigation - desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className={`font-medium ${scrolled ? 'text-gray-600 hover:text-primary' : 'text-white hover:text-gray-200'}`}>Products</a>
              <a href="#features" className={`font-medium ${scrolled ? 'text-gray-600 hover:text-primary' : 'text-white hover:text-gray-200'}`}>Features</a>
              <a href="#contact" className={`font-medium ${scrolled ? 'text-gray-600 hover:text-primary' : 'text-white hover:text-gray-200'}`}>Contact</a>
            </div>
            
            {/* Cart and menu button */}
            <div className="flex items-center">
              <button 
                className={`relative mr-2 p-2 rounded-full ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${scrolled ? 'text-gray-600' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartQuantity}
                  </span>
                )}
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 rounded-md focus:outline-none" 
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${scrolled ? 'text-gray-600' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-48 mt-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-4 py-2">
              <a href="#products" className={`font-medium ${scrolled ? 'text-gray-600' : 'text-white'}`} onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#features" className={`font-medium ${scrolled ? 'text-gray-600' : 'text-white'}`} onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#contact" className={`font-medium ${scrolled ? 'text-gray-600' : 'text-white'}`} onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Shopping Cart */}
      <ShoppingCart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
};

export default Navbar;