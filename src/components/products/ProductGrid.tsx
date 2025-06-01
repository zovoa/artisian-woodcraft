import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { Product, WoodType, Finish, Collection } from '../../types';

interface ProductGridProps {
  products: Product[];
  title?: string;
  showFilters?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  title = 'Our Collection',
  showFilters = true
}) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilters, setActiveFilters] = useState({
    woodTypes: [] as WoodType[],
    finishes: [] as Finish[],
    collections: [] as Collection[],
  });

  const applyFilters = (
    woodTypes: WoodType[], 
    finishes: Finish[], 
    collections: Collection[]
  ) => {
    setActiveFilters({ woodTypes, finishes, collections });
    
    let filtered = [...products];
    
    if (woodTypes.length > 0) {
      filtered = filtered.filter(product => woodTypes.includes(product.woodType));
    }
    
    if (finishes.length > 0) {
      filtered = filtered.filter(product => finishes.includes(product.finish));
    }
    
    if (collections.length > 0) {
      filtered = filtered.filter(product => collections.includes(product.collection));
    }
    
    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setActiveFilters({
      woodTypes: [],
      finishes: [],
      collections: [],
    });
    setFilteredProducts(products);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-center font-heading text-3xl md:text-4xl mb-12">{title}</h2>
        
        {showFilters && (
          <ProductFilters 
            products={products}
            activeFilters={activeFilters}
            onApplyFilters={applyFilters}
            onClearFilters={clearFilters}
          />
        )}
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl text-wood-700 mb-4">No products match your filters</h3>
            <p className="text-wood-600 mb-6">Try adjusting your selection or clear all filters to see our full collection.</p>
            <button 
              onClick={clearFilters}
              className="btn-outline"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;