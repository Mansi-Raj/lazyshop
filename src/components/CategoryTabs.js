import React from 'react';
import { useProductContext } from '../contexts/ProductContext';

const CategoryTabs = () => {
  const { activeCategory, setActiveCategory } = useProductContext();
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'personal', name: 'Personal Care' },
    { id: 'clothes', name: 'Clothing' }
  ];
  
  return (
    <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2">
      {categories.map(category => (
        <button 
          key={category.id}
          className={`px-5 py-2 rounded-full mb-2 transition-all duration-300 ${
            activeCategory === category.id 
              ? 'bg-primary text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;