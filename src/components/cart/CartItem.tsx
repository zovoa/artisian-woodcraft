import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <motion.div 
      className="flex space-x-4 py-4 border-b border-wood-100 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <div className="relative h-20 w-20 flex-shrink-0 bg-white rounded-md overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex-grow">
        <h4 className="font-medium text-wood-800 text-sm">{product.name}</h4>
        <p className="text-xs text-wood-500 mb-2">
          {product.woodType} - {product.finish}
        </p>
        
        {/* Quantity Control */}
        <div className="flex items-center">
          <button 
            onClick={handleDecrement}
            className="p-1 rounded-full border border-wood-200 text-wood-500 hover:bg-wood-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={12} />
          </button>
          <span className="px-3 text-sm font-medium">{quantity}</span>
          <button 
            onClick={handleIncrement}
            className="p-1 rounded-full border border-wood-200 text-wood-500 hover:bg-wood-100 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>
      
      {/* Price and Remove */}
      <div className="flex flex-col justify-between items-end">
        <span className="font-medium text-wood-800">${(product.price * quantity).toFixed(2)}</span>
        <button 
          onClick={() => removeFromCart(product.id)}
          className="text-wood-400 hover:text-terracotta-500 transition-colors"
          aria-label="Remove item"
        >
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;