import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, getCartTotal } = useCart();
  
  const total = getCartTotal();
  const hasItems = cartItems.length > 0;

  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Cart Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-parchment z-50 overflow-hidden flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="py-4 px-6 border-b border-wood-200 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="text-wood-600" size={24} />
                <h2 className="font-heading text-xl text-wood-800">Your Cart</h2>
              </div>
              <button
                onClick={onClose}
                className="text-wood-500 hover:text-wood-700 transition-colors p-1 rounded-full hover:bg-wood-100"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto py-4 px-6">
              {hasItems ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <ShoppingCart className="text-wood-300 mb-4" size={48} />
                  <p className="text-wood-500 mb-2">Your cart is empty</p>
                  <p className="text-wood-400 text-sm mb-6">Looks like you haven't added any items to your cart yet.</p>
                  <button 
                    className="btn-primary"
                    onClick={onClose}
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer with total and checkout */}
            {hasItems && (
              <div className="py-4 px-6 border-t border-wood-200 bg-wood-50">
                <div className="flex justify-between mb-4">
                  <span className="font-medium text-wood-800">Subtotal</span>
                  <span className="font-heading text-wood-800">${total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-wood-500 mb-4">Shipping and taxes calculated at checkout</p>
                <Link 
                  to="/checkout"
                  className="btn-primary w-full mb-2 text-center"
                  onClick={onClose}
                >
                  Checkout
                </Link>
                <button
                  className="btn-outline w-full text-center"
                  onClick={onClose}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;