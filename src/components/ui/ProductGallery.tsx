import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="product-gallery">
      {/* Main image */}
      <div className="relative bg-white rounded-lg overflow-hidden mb-4 aspect-square">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={src}
              alt={`${alt} - view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center text-wood-800 hover:bg-opacity-100 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center text-wood-800 hover:bg-opacity-100 transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`rounded-md overflow-hidden border-2 transition-all ${
                index === activeIndex
                  ? 'border-wood-600 opacity-100'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <div className="aspect-square">
                <img
                  src={src}
                  alt={`${alt} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;