import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Import all your images at the top
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';
import gallery5 from '../../assets/gallery5.png';
import gallery6 from '../../assets/gallery6.png';
import gallery7 from '../../assets/gallery7.png';
import gallery8 from '../../assets/gallery8.png';
import gallery9 from '../../assets/gallery9.png';
import gallery10 from '../../assets/gallery10.png';
import gallery11 from '../../assets/gallery11.png';
import gallery12 from '../../assets/gallery12.png';
import gallery13 from '../../assets/gallery13.png';
import gallery14 from '../../assets/gallery14.png';
import gallery15 from '../../assets/gallery15.png';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Updated images array with actual imported images
  const images = [
    { id: 1, src: gallery1, name: 'gallery1', title: 'Cultural Dance Performance', category: 'Culture' },
    { id: 2, src: gallery2, name: 'gallery2', title: 'Traditional Music Festival', category: 'Music' },
    { id: 3, src: gallery3, name: 'gallery3', title: 'Art Exhibition Opening', category: 'Arts' },
    { id: 4, src: gallery4, name: 'gallery4', title: 'Youth Empowerment Workshop', category: 'Youth' },
    { id: 5, src: gallery5, name: 'gallery5', title: 'Heritage Celebration', category: 'Heritage' },
    { id: 6, src: gallery6, name: 'gallery6', title: 'Community Gathering', category: 'Community' },
    { id: 7, src: gallery7, name: 'gallery7', title: 'Musical Instruments Display', category: 'Music' },
    { id: 8, src: gallery8, name: 'gallery8', title: 'Traditional Crafts Workshop', category: 'Arts' },
    { id: 9, src: gallery9, name: 'gallery9', title: 'Cultural Fashion Show', category: 'Fashion' },
    { id: 10, src: gallery10, name: 'gallery10', title: 'Food Festival', category: 'Food' },
    { id: 11, src: gallery11, name: 'gallery11', title: 'Storytelling Session', category: 'Literature' },
    { id: 12, src: gallery12, name: 'gallery12', title: 'Dance Competition', category: 'Dance' },
    { id: 13, src: gallery13, name: 'gallery13', title: 'Art Installation', category: 'Arts' },
    { id: 14, src: gallery14, name: 'gallery14', title: 'Cultural Parade', category: 'Parade' },
    { id: 15, src: gallery15, name: 'gallery15', title: 'Unity Celebration', category: 'Unity' }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Welcome Section */}
      <div className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-6 animate-pulse">
            Welcome to Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 leading-relaxed animate-fade-in">
            Discover the beauty and vibrance of Kenya's rich cultural heritage through our carefully curated collection of moments that tell the story of our community.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:rotate-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(image)}
              >
                {/* Actual Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ZoomIn className="w-8 h-8 mx-auto mb-2 animate-pulse" />
                      <p className="text-sm font-medium">Click to view</p>
                    </div>
                  </div>

                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Image Title - Slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-bold text-sm leading-tight">{image.title}</h3>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="relative max-w-5xl max-h-full animate-scale-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Large Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{selectedImage.title}</h3>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}