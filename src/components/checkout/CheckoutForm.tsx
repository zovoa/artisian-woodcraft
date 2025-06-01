import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const CheckoutForm: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      clearCart();
    }, 2000);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.5 } }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {!isComplete ? (
        <>
          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-wood-600' : 'text-wood-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentStep >= 1 ? 'bg-wood-600 text-white' : 'bg-wood-200 text-wood-500'}`}>
                  1
                </div>
                <span className="text-sm">Shipping</span>
              </div>
              <div className={`flex-grow h-0.5 mx-4 ${currentStep >= 2 ? 'bg-wood-600' : 'bg-wood-200'}`}></div>
              <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-wood-600' : 'text-wood-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentStep >= 2 ? 'bg-wood-600 text-white' : 'bg-wood-200 text-wood-500'}`}>
                  2
                </div>
                <span className="text-sm">Payment</span>
              </div>
              <div className={`flex-grow h-0.5 mx-4 ${currentStep >= 3 ? 'bg-wood-600' : 'bg-wood-200'}`}></div>
              <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-wood-600' : 'text-wood-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentStep >= 3 ? 'bg-wood-600 text-white' : 'bg-wood-200 text-wood-500'}`}>
                  3
                </div>
                <span className="text-sm">Review</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <motion.form 
                onSubmit={handleSubmit}
                className="bg-parchment p-6 rounded-lg shadow-md"
                key={currentStep}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {currentStep === 1 && (
                  <>
                    <h2 className="font-heading text-2xl mb-6 text-wood-800">Shipping Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block text-wood-700 mb-1">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-wood-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-wood-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-wood-700 mb-1">Street Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="col-span-2">
                        <label htmlFor="city" className="block text-wood-700 mb-1">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-wood-700 mb-1">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-wood-700 mb-1">Zip Code</label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="country" className="block text-wood-700 mb-1">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <h2 className="font-heading text-2xl mb-6 text-wood-800">Payment Information</h2>
                    <div className="mb-6 flex items-center justify-center">
                      <img 
                        src="https://razorpay.com/assets/razorpay-logo.png" 
                        alt="Razorpay" 
                        className="h-8 mr-4"
                      />
                      <div className="flex space-x-2">
                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8" />
                        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-8" />
                        <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" className="h-8" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="cardName" className="block text-wood-700 mb-1">Name on Card</label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-wood-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="input"
                        placeholder="XXXX XXXX XXXX XXXX"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="expDate" className="block text-wood-700 mb-1">Expiration Date</label>
                        <input
                          type="text"
                          id="expDate"
                          name="expDate"
                          value={formData.expDate}
                          onChange={handleChange}
                          className="input"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-wood-700 mb-1">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="input"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Review Order
                      </button>
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <h2 className="font-heading text-2xl mb-6 text-wood-800">Review Your Order</h2>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-wood-700 mb-2">Shipping Information</h3>
                      <div className="bg-cream p-4 rounded-md text-wood-700">
                        <p>{formData.firstName} {formData.lastName}</p>
                        <p>{formData.address}</p>
                        <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                        <p>{formData.country}</p>
                        <p>{formData.email}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-wood-700 mb-2">Order Summary</h3>
                      <div className="bg-cream p-4 rounded-md">
                        {cartItems.map((item) => (
                          <div key={item.product.id} className="flex justify-between py-2 border-b border-wood-100 last:border-0">
                            <div className="flex items-center">
                              <img 
                                src={item.product.images[0]} 
                                alt={item.product.name} 
                                className="w-12 h-12 object-cover rounded-md mr-4"
                              />
                              <div>
                                <p className="font-medium text-wood-800">{item.product.name}</p>
                                <p className="text-sm text-wood-600">Qty: {item.quantity}</p>
                              </div>
                            </div>
                            <p className="text-wood-800">${(item.product.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className={`btn-primary ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                        disabled={isProcessing}
                      >
                        {isProcessing ? 'Processing...' : 'Place Order'}
                      </button>
                    </div>
                  </>
                )}
              </motion.form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-wood-texture-20 relative p-6 rounded-lg shadow-md">
                <div className="relative z-10">
                  <h2 className="font-heading text-2xl mb-6 text-wood-800">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-wood-700">
                        <span>{item.product.name} × {item.quantity}</span>
                        <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-wood-300 pt-4 mb-4">
                    <div className="flex justify-between text-wood-700 mb-2">
                      <span>Subtotal</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-wood-700 mb-2">
                      <span>Shipping</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-wood-700 mb-2">
                      <span>Tax</span>
                      <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-wood-300 pt-4">
                    <div className="flex justify-between font-bold text-wood-800 text-lg">
                      <span>Total</span>
                      <span>${(getCartTotal() + (getCartTotal() * 0.08)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <motion.div 
          className="bg-parchment p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading text-3xl mb-4 text-wood-800">Order Confirmed!</h2>
          <p className="text-wood-700 mb-6">Thank you for your order. We've received your payment and will begin crafting your furniture right away.</p>
          <p className="text-wood-700 mb-8">A confirmation email has been sent to {formData.email}</p>
          <div className="hand-drawn-border inline-block relative">
            <div className="p-6 bg-cream rounded-lg">
              <h3 className="font-heading text-xl mb-3 text-wood-800">Order Number: #38291</h3>
              <p className="text-wood-700 mb-1">Estimated Delivery: 3-4 weeks</p>
              <p className="text-wood-700">We'll send updates as your furniture is crafted.</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CheckoutForm;