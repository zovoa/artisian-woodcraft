import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { getProductById } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductGallery from '../components/ui/ProductGallery';
import ProductGrid from '../components/products/ProductGrid';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const controls = useAnimation();
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  useEffect(() => {
    if (storyInView) {
      controls.start('visible');
    }
  }, [controls, storyInView]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // Reset quantity after adding to cart
      setQuantity(1);
    }
  };

  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const storyVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment pt-16">
        <div className="text-center">
          <h2 className="font-heading text-2xl text-wood-800 mb-4">Product Not Found</h2>
          <p className="text-wood-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const isInWish = isInWishlist(product.id);

  return (
    <div className="min-h-screen bg-parchment pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm text-wood-600">
          <Link to="/" className="hover:text-wood-800 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-wood-800 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/collections/${product.collection}`} className="hover:text-wood-800 transition-colors">{product.collection}</Link>
          <span className="mx-2">/</span>
          <span className="text-wood-800">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div>
            <ProductGallery images={product.images} alt={product.name} />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl mb-2 text-wood-800">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={star <= Math.round(
                      product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
                    ) ? "text-wood-600 fill-wood-600" : "text-wood-300"}
                  />
                ))}
              </div>
              <span className="ml-2 text-wood-600">
                {product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'}
              </span>
            </div>
            
            <p className="text-2xl font-medium text-wood-800 mb-6">${product.price.toFixed(2)}</p>
            
            <p className="text-wood-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="w-24 text-wood-600">Wood Type:</span>
                <span className="font-medium text-wood-800">{product.woodType}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-24 text-wood-600">Finish:</span>
                <span className="font-medium text-wood-800">{product.finish}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-24 text-wood-600">Collection:</span>
                <span className="font-medium text-wood-800">{product.collection}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-wood-600">Availability:</span>
                <span className={`font-medium ${product.inStock ? 'text-forest-600' : 'text-terracotta-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            {product.inStock && (
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="mr-4 text-wood-600">Quantity:</span>
                  <div className="flex items-center border border-wood-300 rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-wood-600 hover:bg-wood-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-12 text-center font-medium text-wood-800">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-wood-600 hover:bg-wood-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary flex-1 flex items-center justify-center"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={handleWishlistToggle}
                    className={`btn-outline flex items-center justify-center ${
                      isInWish ? 'bg-terracotta-50 border-terracotta-500 text-terracotta-500' : ''
                    }`}
                    aria-label={isInWish ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart
                      size={20}
                      className="mr-2"
                      fill={isInWish ? "currentColor" : "none"}
                    />
                    <span>{isInWish ? 'In Wishlist' : 'Add to Wishlist'}</span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Estimated delivery */}
            <div className="bg-wood-50 border border-wood-100 rounded-md p-4 mb-6">
              <p className="text-wood-800 font-medium">Estimated Delivery: 2-3 weeks</p>
              <p className="text-wood-600 text-sm">Each piece is made to order just for you</p>
            </div>
            
            {/* Free shipping notice */}
            <div className="text-wood-600 text-sm">
              <p>Free shipping on orders over $1000</p>
              <p>Handcrafted with care in our workshop</p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-16">
          <div className="border-b border-wood-200 flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'description'
                  ? 'border-b-2 border-wood-600 text-wood-800'
                  : 'text-wood-500 hover:text-wood-700'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'specifications'
                  ? 'border-b-2 border-wood-600 text-wood-800'
                  : 'text-wood-500 hover:text-wood-700'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-wood-600 text-wood-800'
                  : 'text-wood-500 hover:text-wood-700'
              }`}
            >
              Reviews ({product.reviews.length})
            </button>
          </div>
          
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="max-w-3xl">
                <p className="text-wood-700 mb-6">{product.description}</p>
                {product.craftingVideo && (
                  <div className="mb-6">
                    <h3 className="font-heading text-xl mb-4 text-wood-800">See How It's Made</h3>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={product.craftingVideo}
                        title={`How ${product.name} is crafted`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="max-w-3xl">
                <h3 className="font-heading text-xl mb-4 text-wood-800">Dimensions</h3>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-wood-50 rounded-lg">
                    <p className="text-sm text-wood-600 mb-1">Width</p>
                    <p className="font-medium text-wood-800">{product.dimensions.width} cm</p>
                  </div>
                  <div className="text-center p-4 bg-wood-50 rounded-lg">
                    <p className="text-sm text-wood-600 mb-1">Depth</p>
                    <p className="font-medium text-wood-800">{product.dimensions.depth} cm</p>
                  </div>
                  <div className="text-center p-4 bg-wood-50 rounded-lg">
                    <p className="text-sm text-wood-600 mb-1">Height</p>
                    <p className="font-medium text-wood-800">{product.dimensions.height} cm</p>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl mb-4 text-wood-800">Materials</h3>
                <div className="mb-6">
                  <div className="flex border-b border-wood-100 py-3">
                    <span className="w-1/3 text-wood-600">Wood Type</span>
                    <span className="w-2/3 text-wood-800">{product.woodType}</span>
                  </div>
                  <div className="flex border-b border-wood-100 py-3">
                    <span className="w-1/3 text-wood-600">Finish</span>
                    <span className="w-2/3 text-wood-800">{product.finish}</span>
                  </div>
                  <div className="flex border-b border-wood-100 py-3">
                    <span className="w-1/3 text-wood-600">Weight</span>
                    <span className="w-2/3 text-wood-800">{product.weight} kg</span>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl mb-4 text-wood-800">Care Instructions</h3>
                <ul className="list-disc pl-6 text-wood-700 space-y-2">
                  <li>Dust regularly with a soft, dry cloth</li>
                  <li>Avoid direct sunlight to prevent color fading</li>
                  <li>Clean spills immediately with a slightly damp cloth</li>
                  <li>Use coasters under beverages to prevent water rings</li>
                  <li>Apply furniture polish or wax every 6 months</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="max-w-3xl">
                <h3 className="font-heading text-xl mb-6 text-wood-800">Customer Reviews</h3>
                
                {product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-wood-100 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={16}
                                className={star <= review.rating ? "text-wood-600 fill-wood-600" : "text-wood-300"}
                              />
                            ))}
                          </div>
                          <span className="font-medium text-wood-800">{review.userName}</span>
                          <span className="mx-2 text-wood-400">•</span>
                          <span className="text-sm text-wood-500">{review.date}</span>
                        </div>
                        <p className="text-wood-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-wood-600">No reviews yet. Be the first to review this product!</p>
                )}
                
                <div className="mt-8">
                  <button className="btn-outline">Write a Review</button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Craftsmanship Story */}
        <motion.div 
          ref={storyRef}
          className="mb-16 py-16 px-8 bg-wood-texture-20 rounded-lg relative"
          variants={storyVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6 text-wood-800">The Story Behind the Craft</h2>
            <p className="text-wood-700 mb-6 leading-relaxed">{product.story}</p>
            <Link to="/our-story" className="btn-outline">Discover Our Craftsmanship</Link>
          </div>
        </motion.div>
        
        {/* Related Products */}
        <div>
          <h2 className="font-heading text-3xl text-center mb-8 text-wood-800">You May Also Like</h2>
          <ProductGrid 
            products={product.collection === Collection.Modern 
              ? products.filter(p => p.id !== product.id && p.collection === Collection.Modern).slice(0, 4) 
              : products.filter(p => p.id !== product.id).slice(0, 4)}
            showFilters={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;