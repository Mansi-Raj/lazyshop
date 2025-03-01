import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-purple-900 h-[500px] md:h-[600px]" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-40">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 fade-in">
              Your One-Stop Shop for <span className="text-secondary">Beauty & Style</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 slide-in" style={{ animationDelay: '0.2s' }}>
              Discover premium beauty products, personal care essentials, and stylish fashion items at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start slide-in" style={{ animationDelay: '0.4s' }}>
              <a href="#products" className="px-8 py-3 bg-white text-primary-dark font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                Shop Now
              </a>
              <a href="#features" className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition duration-300">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 slide-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img src="/api/placeholder/300/300" alt="Beauty Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img src="/api/placeholder/300/300" alt="Fashion Item" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img src="/api/placeholder/300/300" alt="Personal Care" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img src="/api/placeholder/300/300" alt="Lifestyle" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
