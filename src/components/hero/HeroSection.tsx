import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Images for the hero slideshow
  const images = [
    "https://images.pexels.com/photos/6186527/pexels-photo-6186527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4846454/pexels-photo-4846454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6489123/pexels-photo-6489123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animation when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Text content */}
      <motion.div 
        className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex items-center justify-center p-8 md:p-16 bg-parchment z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="max-w-md">
          <motion.h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            variants={itemVariants}
          >
            Craftsmanship That Tells A Story
          </motion.h1>
          
          <motion.p 
            className="text-wood-700 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Every piece of our handcrafted furniture carries the soul of the forest and the spirit of traditional craftsmanship. Discover pieces that will become part of your family's story for generations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link to="/shop" className="btn-primary flex items-center justify-center space-x-2">
              <span>Shop the Collection</span>
              <ChevronRight size={16} />
            </Link>
            <Link to="/our-story" className="btn-outline">
              Our Story
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Right side - Image */}
      <div className="lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial="hidden"
            animate={index === currentImage ? "visible" : "hidden"}
            variants={imageVariants}
            style={{ zIndex: index === currentImage ? 1 : 0 }}
          >
            <img
              src={src}
              alt={`Handcrafted furniture ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-wood-900 opacity-10 mix-blend-multiply"></div>
          </motion.div>
        ))}
        
        {/* Decorative elements */}
        <div className="absolute top-16 left-16 w-32 h-32 border-2 border-cream opacity-40 rounded-sm"></div>
        <div className="absolute bottom-16 right-16 w-48 h-48 border-2 border-cream opacity-40 rounded-sm"></div>
      </div>
    </section>
  );
};

export default HeroSection;