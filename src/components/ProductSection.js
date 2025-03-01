import React from 'react';
import { useProductContext } from '../contexts/ProductContext';
import CategoryTabs from './CategoryTabs';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const { filteredProducts, activeCategory } = useProductContext();
  
  const categoryTitles = {
    all: 'Our Products',
    beauty: 'Beauty Products',
    personal: 'Personal Care',
    clothes: 'Fashion & Clothing'
  };
  
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{categoryTitles[activeCategory]}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully selected products designed to enhance your lifestyle with quality and style.
          </p>
        </div>
        
        <CategoryTabs />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;