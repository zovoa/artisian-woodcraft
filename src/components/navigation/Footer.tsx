import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Truck,
  Clock,
  Shield
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-800 text-cream">
      {/* Top section with trustmarks */}
      <div className="border-b border-wood-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <CreditCard size={28} className="mb-3 text-wood-300" />
              <h4 className="font-medium mb-1">Secure Payment</h4>
              <p className="text-sm text-wood-300">All transactions are encrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck size={28} className="mb-3 text-wood-300" />
              <h4 className="font-medium mb-1">Free Shipping</h4>
              <p className="text-sm text-wood-300">On orders over $1000</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock size={28} className="mb-3 text-wood-300" />
              <h4 className="font-medium mb-1">Made to Order</h4>
              <p className="text-sm text-wood-300">2-3 weeks crafting time</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield size={28} className="mb-3 text-wood-300" />
              <h4 className="font-medium mb-1">5 Year Warranty</h4>
              <p className="text-sm text-wood-300">On all furniture pieces</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="font-heading text-xl mb-6">Artisan Woodcraft</h3>
            <p className="text-wood-300 mb-6">
              We create handcrafted furniture pieces that blend traditional craftsmanship with contemporary design, 
              using sustainably sourced materials to bring warmth and character to your home.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-wood-300 hover:text-cream transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-wood-300 hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-wood-300 hover:text-cream transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-wood-300 hover:text-cream transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/our-story" className="text-wood-300 hover:text-cream transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/collections" className="text-wood-300 hover:text-cream transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="/care-guide" className="text-wood-300 hover:text-cream transition-colors">Care Guide</Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-wood-300 hover:text-cream transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link to="/blog" className="text-wood-300 hover:text-cream transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Customer Service */}
          <div>
            <h3 className="font-heading text-xl mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-wood-300 hover:text-cream transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-wood-300 hover:text-cream transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-wood-300 hover:text-cream transition-colors">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="/returns" className="text-wood-300 hover:text-cream transition-colors">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/warranty" className="text-wood-300 hover:text-cream transition-colors">Warranty</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-wood-300 hover:text-cream transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-wood-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-wood-300">123 Craftsman Way<br />Woodville, CA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-wood-300 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-wood-300 hover:text-cream transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-wood-300 mr-3 flex-shrink-0" />
                <a href="mailto:info@artisanwoodcraft.com" className="text-wood-300 hover:text-cream transition-colors">info@artisanwoodcraft.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-3">Workshop Hours:</h4>
              <p className="text-wood-300">Monday - Friday: 9am - 5pm</p>
              <p className="text-wood-300">Saturday: 10am - 4pm (Showroom Only)</p>
              <p className="text-wood-300">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section with copyright */}
      <div className="border-t border-wood-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-wood-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Artisan Woodcraft. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" className="h-8" />
              <img src="https://razorpay.com/assets/razorpay-logo.png" alt="Razorpay" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;