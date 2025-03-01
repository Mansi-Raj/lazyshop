import React from 'react';
import { useProductContext } from '../contexts/ProductContext';

const ProductCard = ({ product, delay = 0 }) => {
  const { addToCart } = useProductContext();
  
  return (
    <div 
      className="product-card bg-white slide-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
        />
        
        {product.badge && (
          <div className={`absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold ${
            product.badge === 'Sale' ? 'bg-red-500 text-white' :
            product.badge === 'New' ? 'bg-green-500 text-white' :
            product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
            'bg-purple-500 text-white'
          }`}>
            {product.badge}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
        </div>
        
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            {product.salePrice ? (
              <div className="flex items-center">
                <span className="font-bold text-lg text-primary">${product.salePrice}</span>
                <span className="text-gray-400 text-sm line-through ml-2">${product.price}</span>
              </div>
            ) : (
              <span className="font-bold text-lg text-gray-800">${product.price}</span>
            )}
          </div>
          
          <button 
            className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;