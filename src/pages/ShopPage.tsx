import React from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl mb-4 text-wood-800">Our Collection</h1>
          <p className="max-w-2xl mx-auto text-wood-700">
            Explore our handcrafted furniture pieces, each created with meticulous attention to detail and a passion for traditional craftsmanship.
          </p>
        </div>
        
        <ProductGrid products={products} title="All Products" />
      </div>
    </div>
  );
};

export default ShopPage;