import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Filter } from 'lucide-react';
import { Product, WoodType, Finish, Collection } from '../../types';

interface ProductFiltersProps {
  products: Product[];
  activeFilters: {
    woodTypes: WoodType[];
    finishes: Finish[];
    collections: Collection[];
  };
  onApplyFilters: (
    woodTypes: WoodType[], 
    finishes: Finish[], 
    collections: Collection[]
  ) => void;
  onClearFilters: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ 
  products, 
  activeFilters,
  onApplyFilters, 
  onClearFilters 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState({ ...activeFilters });
  
  // Extract unique values from products
  const allWoodTypes = [...new Set(products.map(p => p.woodType))];
  const allFinishes = [...new Set(products.map(p => p.finish))];
  const allCollections = [...new Set(products.map(p => p.collection))];
  
  const handleToggleWoodType = (type: WoodType) => {
    setTempFilters(prev => {
      const isActive = prev.woodTypes.includes(type);
      return {
        ...prev,
        woodTypes: isActive
          ? prev.woodTypes.filter(t => t !== type)
          : [...prev.woodTypes, type]
      };
    });
  };
  
  const handleToggleFinish = (finish: Finish) => {
    setTempFilters(prev => {
      const isActive = prev.finishes.includes(finish);
      return {
        ...prev,
        finishes: isActive
          ? prev.finishes.filter(f => f !== finish)
          : [...prev.finishes, finish]
      };
    });
  };
  
  const handleToggleCollection = (collection: Collection) => {
    setTempFilters(prev => {
      const isActive = prev.collections.includes(collection);
      return {
        ...prev,
        collections: isActive
          ? prev.collections.filter(c => c !== collection)
          : [...prev.collections, collection]
      };
    });
  };
  
  const handleApplyFilters = () => {
    onApplyFilters(
      tempFilters.woodTypes,
      tempFilters.finishes,
      tempFilters.collections
    );
    setIsOpen(false);
  };
  
  const handleClearFilters = () => {
    setTempFilters({
      woodTypes: [],
      finishes: [],
      collections: []
    });
    onClearFilters();
  };
  
  // Count active filters
  const totalActiveFilters = 
    activeFilters.woodTypes.length + 
    activeFilters.finishes.length + 
    activeFilters.collections.length;
  
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-parchment border border-wood-200 rounded-md hover:bg-wood-50 transition-colors"
        >
          <Filter size={18} className="text-wood-600" />
          <span className="font-medium text-wood-700">Filters</span>
          {totalActiveFilters > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 bg-wood-600 text-white text-xs font-medium rounded-full">
              {totalActiveFilters}
            </span>
          )}
          <ChevronDown
            size={16}
            className={`text-wood-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        
        {totalActiveFilters > 0 && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-wood-600 hover:text-terracotta-500 transition-colors underline"
          >
            Clear all filters
          </button>
        )}
      </div>
      
      {/* Display active filters as tags */}
      {totalActiveFilters > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeFilters.woodTypes.map(type => (
            <div key={type} className="inline-flex items-center px-3 py-1 bg-wood-100 text-wood-700 rounded-full text-sm">
              <span className="mr-1">Wood: {type}</span>
              <X 
                size={14} 
                className="cursor-pointer hover:text-terracotta-500"
                onClick={() => {
                  const newWoodTypes = activeFilters.woodTypes.filter(t => t !== type);
                  onApplyFilters(newWoodTypes, activeFilters.finishes, activeFilters.collections);
                  setTempFilters(prev => ({
                    ...prev,
                    woodTypes: newWoodTypes
                  }));
                }}
              />
            </div>
          ))}
          
          {activeFilters.finishes.map(finish => (
            <div key={finish} className="inline-flex items-center px-3 py-1 bg-wood-100 text-wood-700 rounded-full text-sm">
              <span className="mr-1">Finish: {finish}</span>
              <X 
                size={14} 
                className="cursor-pointer hover:text-terracotta-500"
                onClick={() => {
                  const newFinishes = activeFilters.finishes.filter(f => f !== finish);
                  onApplyFilters(activeFilters.woodTypes, newFinishes, activeFilters.collections);
                  setTempFilters(prev => ({
                    ...prev,
                    finishes: newFinishes
                  }));
                }}
              />
            </div>
          ))}
          
          {activeFilters.collections.map(collection => (
            <div key={collection} className="inline-flex items-center px-3 py-1 bg-wood-100 text-wood-700 rounded-full text-sm">
              <span className="mr-1">Collection: {collection}</span>
              <X 
                size={14} 
                className="cursor-pointer hover:text-terracotta-500"
                onClick={() => {
                  const newCollections = activeFilters.collections.filter(c => c !== collection);
                  onApplyFilters(activeFilters.woodTypes, activeFilters.finishes, newCollections);
                  setTempFilters(prev => ({
                    ...prev,
                    collections: newCollections
                  }));
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Filter panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-parchment border border-wood-200 rounded-lg mb-8"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Wood Type */}
              <div>
                <h3 className="font-heading text-lg mb-4 text-wood-800">Wood Type</h3>
                <div className="space-y-2">
                  {allWoodTypes.map(type => (
                    <label key={type} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-wood-300 text-wood-600 focus:ring-wood-500"
                        checked={tempFilters.woodTypes.includes(type)}
                        onChange={() => handleToggleWoodType(type)}
                      />
                      <span className="ml-2 text-wood-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Finish */}
              <div>
                <h3 className="font-heading text-lg mb-4 text-wood-800">Finish</h3>
                <div className="space-y-2">
                  {allFinishes.map(finish => (
                    <label key={finish} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-wood-300 text-wood-600 focus:ring-wood-500"
                        checked={tempFilters.finishes.includes(finish)}
                        onChange={() => handleToggleFinish(finish)}
                      />
                      <span className="ml-2 text-wood-700">{finish}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Collection */}
              <div>
                <h3 className="font-heading text-lg mb-4 text-wood-800">Collection</h3>
                <div className="space-y-2">
                  {allCollections.map(collection => (
                    <label key={collection} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-wood-300 text-wood-600 focus:ring-wood-500"
                        checked={tempFilters.collections.includes(collection)}
                        onChange={() => handleToggleCollection(collection)}
                      />
                      <span className="ml-2 text-wood-700">{collection}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-wood-50 border-t border-wood-200 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="btn-outline mr-3"
              >
                Cancel
              </button>
              <button
                onClick={handleApplyFilters}
                className="btn-primary"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductFilters;