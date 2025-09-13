import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

// Sample Product Data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    name: 'Urban Explorer Jacket',
    category: 'Jackets',
    price: 1249.00,
    imageUrl: './assests/Jacket.png',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Silk Evening Dress',
    category: 'Dresses',
    price: 1829.50,
    imageUrl: '.\assests/Dress.png',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Classic Leather Loafers',
    category: 'Shoes',
    price: 1499.00,
    imageUrl: '.\assests/Loafers.png',
    rating: 4.2,
  },
  {
    id: 4,
    name: 'Minimalist Tote Bag',
    category: 'Accessories',
    price: 749.00,
    imageUrl: '.\assets\Tote bag.png',
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Slim-Fit Chinos',
    category: 'Pants',
    price: 629.00,
    imageUrl: '.\assests\Chinos.png',
    rating: 4.4,
  },
  {
    id: 6,
    name: 'Cashmere V-Neck Sweater',
    category: 'Sweaters',
    price: 1699.00,
    imageUrl: '.\assests\Sweaters.png',
    rating: 4.7,
  }
];

// Reusable Component for Product Cards
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-white">
      <div className="w-full h-80 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-gray-900">₹{product.price.toFixed(2)}</p>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-300 flex items-center gap-2"
          >
            <ShoppingBag size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'Shop', 'New Arrivals', 'About', 'Contact'];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">Lazy Shop</a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link} href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">{link}</a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" onClick={onCartClick}>
            <ShoppingBag className="text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          {navLinks.map(link => (
            <a key={link} href="#" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">{link}</a>
          ))}
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section className="bg-gray-100">
    <div className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
        Timeless Style, Modern Edge
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Discover curated collections that blend classic elegance with contemporary trends. Your new favorite outfit awaits.
      </p>
      <button className="mt-8 bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-transform duration-300 ease-in-out hover:scale-105">
        Shop New Collection
      </button>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Lazy Shop</h3>
          <p className="mt-2 text-gray-400 text-sm">Defining fashion for the modern individual.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Shop</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">New Arrivals</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Women</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Men</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">About</h3>
           <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Our Story</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Connect</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Instagram</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lazy Shop. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    // In a real app, you might show a confirmation message
    console.log(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Header cartCount={cart.length} />
      
      <main>
        <HeroSection />

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

