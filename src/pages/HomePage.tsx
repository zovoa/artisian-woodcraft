import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HeroSection from '../components/hero/HeroSection';
import ProductGrid from '../components/products/ProductGrid';
import { getFeaturedProducts } from '../data/products';
import { Collection } from '../types';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [craftingRef, craftingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [collectionsRef, collectionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Products */}
      <motion.section
        ref={featuredRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuredInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-wood-800">Crafted with Passion</h2>
            <p className="max-w-2xl mx-auto text-wood-700">
              Discover our selection of meticulously handcrafted furniture pieces, 
              each telling a unique story of traditional craftsmanship and sustainable materials.
            </p>
          </div>
          
          <ProductGrid 
            products={featuredProducts} 
            title="Featured Pieces" 
            showFilters={false} 
          />
          
          <div className="text-center mt-12">
            <Link to="/shop" className="btn-primary inline-flex items-center">
              View All Products
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* Crafting Process */}
      <motion.section
        ref={craftingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={craftingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 bg-wood-texture-10"
      >
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-wood-800">Our Crafting Process</h2>
            <p className="max-w-2xl mx-auto text-wood-700">
              From selecting the perfect piece of wood to applying the final finish, 
              every step of our process is guided by a commitment to quality and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-wood-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-heading text-xl mb-3 text-wood-800">Material Selection</h3>
              <p className="text-wood-700">
                We carefully source our woods from sustainable forests, selecting each piece for its unique grain and character.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-wood-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-heading text-xl mb-3 text-wood-800">Traditional Joinery</h3>
              <p className="text-wood-700">
                Our craftspeople use time-honored techniques to create strong, beautiful joints that will last for generations.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-wood-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-heading text-xl mb-3 text-wood-800">Hand-Finishing</h3>
              <p className="text-wood-700">
                Each piece is carefully hand-sanded and finished with natural oils to enhance the wood's natural beauty.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/our-story" className="btn-outline">
              Learn More About Our Craft
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* Collections */}
      <motion.section
        ref={collectionsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={collectionsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-wood-800">Our Collections</h2>
            <p className="max-w-2xl mx-auto text-wood-700">
              Explore our thoughtfully curated collections, each with its own distinct aesthetic 
              but all sharing our commitment to exceptional craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              to={`/collections/${Collection.Modern}`} 
              className="group relative block rounded-lg overflow-hidden aspect-square"
            >
              <img 
                src="https://images.pexels.com/photos/6186530/pexels-photo-6186530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-heading text-2xl text-white mb-2">Modern</h3>
                  <p className="text-cream mb-4">Clean lines and contemporary design</p>
                  <span className="inline-flex items-center text-white border-b border-white">
                    View Collection
                    <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link 
              to={`/collections/${Collection.Rustic}`} 
              className="group relative block rounded-lg overflow-hidden aspect-square"
            >
              <img 
                src="https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Rustic Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-heading text-2xl text-white mb-2">Rustic</h3>
                  <p className="text-cream mb-4">Timeless charm with natural character</p>
                  <span className="inline-flex items-center text-white border-b border-white">
                    View Collection
                    <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link 
              to={`/collections/${Collection.Minimalist}`} 
              className="group relative block rounded-lg overflow-hidden aspect-square"
            >
              <img 
                src="https://images.pexels.com/photos/6489116/pexels-photo-6489116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Minimalist Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-heading text-2xl text-white mb-2">Minimalist</h3>
                  <p className="text-cream mb-4">Elegant simplicity and functional design</p>
                  <span className="inline-flex items-center text-white border-b border-white">
                    View Collection
                    <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 bg-wood-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-wood-800">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-wood-700">
              We take pride in creating furniture that becomes part of our customers' lives and stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-wood-600 fill-wood-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-wood-700 mb-4 italic">
                "The dining table we purchased is absolutely stunning. The craftsmanship is exceptional, and it has become the centerpiece of our home. Every dinner feels special now."
              </p>
              <div className="flex items-center">
                <span className="font-medium text-wood-800">Sarah J.</span>
                <span className="mx-2 text-wood-400">•</span>
                <span className="text-sm text-wood-500">Horizon Dining Table</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-wood-600 fill-wood-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-wood-700 mb-4 italic">
                "I've purchased furniture from many places, but nothing compares to the quality and beauty of my Artisan Woodcraft pieces. The attention to detail is remarkable."
              </p>
              <div className="flex items-center">
                <span className="font-medium text-wood-800">Michael R.</span>
                <span className="mx-2 text-wood-400">•</span>
                <span className="text-sm text-wood-500">Workshop Desk</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-wood-600 fill-wood-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-wood-700 mb-4 italic">
                "Not only is the bookshelf beautiful, but the customer service was exceptional. They answered all my questions and kept me updated throughout the crafting process."
              </p>
              <div className="flex items-center">
                <span className="font-medium text-wood-800">Emily C.</span>
                <span className="mx-2 text-wood-400">•</span>
                <span className="text-sm text-wood-500">Serenity Bookshelf</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-wood-800">Join Our Newsletter</h2>
            <p className="text-wood-700 mb-8">
              Subscribe to receive updates on new collections, crafting techniques, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input mb-3 sm:mb-0 sm:mr-3 sm:flex-grow"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;