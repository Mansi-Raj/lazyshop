import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);
  
  // State for cart open/close
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Product data
  const products = [
    { 
      id: 1, 
      name: 'Hydrating Face Cream', 
      price: 24.99, 
      salePrice: null,
      category: 'beauty', 
      badge: 'Bestseller',
      rating: 4.8,
      reviews: 129,
      image: '/api/placeholder/400/400', 
      description: 'Deeply moisturizing face cream for all skin types with hyaluronic acid and vitamin E' 
    },
    { 
      id: 2, 
      name: 'Natural Shampoo', 
      price: 12.99, 
      salePrice: 9.99,
      category: 'personal', 
      badge: 'Sale',
      rating: 4.5,
      reviews: 84,
      image: '/api/placeholder/400/400', 
      description: 'Gentle, sulfate-free shampoo with botanical extracts for silky, healthy hair' 
    },
    { 
      id: 3, 
      name: 'Casual T-Shirt', 
      price: 19.99, 
      salePrice: null,
      category: 'clothes', 
      badge: 'New',
      rating: 4.3,
      reviews: 56,
      image: '/api/placeholder/400/400', 
      description: 'Soft cotton t-shirt, perfect for everyday wear with breathable fabric' 
    },
    { 
      id: 4, 
      name: 'Vitamin C Serum', 
      price: 34.99, 
      salePrice: null,
      category: 'beauty', 
      badge: null,
      rating: 4.9,
      reviews: 217,
      image: '/api/placeholder/400/400', 
      description: 'Brightening serum with antioxidant protection that reduces fine lines and dark spots' 
    },
    { 
      id: 5, 
      name: 'Bath Bombs Set', 
      price: 16.99, 
      salePrice: 13.99,
      category: 'personal', 
      badge: 'Sale',
      rating: 4.6,
      reviews: 92,
      image: '/api/placeholder/400/400', 
      description: 'Set of 6 relaxing bath bombs with essential oils for a spa-like experience at home' 
    },
    { 
      id: 6, 
      name: 'Summer Dress', 
      price: 39.99, 
      salePrice: null,
      category: 'clothes', 
      badge: 'Limited',
      rating: 4.7,
      reviews: 73,
      image: '/api/placeholder/400/400', 
      description: 'Light, flowy summer dress with floral pattern, perfect for warm days and evenings' 
    }
  ];
  
  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
    
    // Open cart when adding item
    setIsCartOpen(true);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem && existingItem.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== productId));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === productId ? {...item, quantity: item.quantity - 1} : item
      ));
    }
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.salePrice || item.price;
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  // Total items in cart
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const value = {
    products,
    filteredProducts,
    activeCategory,
    setActiveCategory,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    calculateTotal,
    cartQuantity,
    isCartOpen,
    setIsCartOpen
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
