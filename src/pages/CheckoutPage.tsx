import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/checkout/CheckoutForm';

const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-parchment pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
          <h1 className="font-heading text-2xl mb-4 text-wood-800">Your Cart is Empty</h1>
          <p className="text-wood-700 mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/shop" className="btn-primary">
            Browse Our Collection
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-parchment pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl mb-4 text-wood-800">Checkout</h1>
          <p className="max-w-2xl mx-auto text-wood-700">
            Complete your purchase and prepare to welcome your new handcrafted furniture piece.
          </p>
        </div>
        
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutPage;