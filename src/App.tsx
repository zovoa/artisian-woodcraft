import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router basename="/artisian-woodcraft">
      <CartProvider>
        <WishlistProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="product/:id" element={<ProductDetailPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              {/* Additional routes would be added here */}
            </Route>
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;