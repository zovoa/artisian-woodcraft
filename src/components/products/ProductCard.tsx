import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square bg-white rounded-lg overflow-hidden relative">
          {/* Main image */}
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          
          {/* Secondary hover image with texture details */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <img 
              src={product.images[1] || product.images[0]} 
              alt={`${product.name} detail`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-terracotta-500 text-white px-4 py-2 rounded-md font-medium">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Wishlist button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2 rounded-full ${
              inWishlist ? 'bg-terracotta-500 text-white' : 'bg-white text-wood-600 hover:bg-wood-100'
            } transition-all duration-300 shadow-sm`}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={18} fill={inWishlist ? "white" : "none"} />
          </button>
        </div>
        
        {/* Product details */}
        <div className="pt-4">
          <h3 className="font-heading text-lg text-wood-800 mb-1">{product.name}</h3>
          <p className="text-sm text-wood-600 mb-2">{product.woodType} - {product.finish}</p>
          <div className="flex justify-between items-center">
            <span className="font-medium text-wood-900">${product.price.toFixed(2)}</span>
            <span className="text-xs px-2 py-1 bg-wood-100 text-wood-700 rounded-md">
              {product.collection}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;