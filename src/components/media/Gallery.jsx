import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('https://your-cdn.com/gallery.json')
      .then(res => res.json())
      .then(data => {
        setImages(Array.isArray(data) ? data : []);
        setLoaded(true);
      })
      .catch(err => {
        console.error('Gallery fetch error:', err);
        setLoaded(true);
      });
  }, []);

  // Show placeholder message once fetch completes and no images
  if (loaded && images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-center text-gray-500 text-xl">
          📸 Photo gallery will be available soon. Stay tuned!
        </p>
      </div>
    );
  }

  // While loading (or if images exist), show the grid
  return (
    <div className="py-12 px-4 bg-gradient-to-br from-[#fff9f6] to-[#ffffff] min-h-screen">
      { !loaded && (
        <p className="text-center mt-8 text-gray-500">Loading gallery…</p>
      )}
      { loaded && images.length > 0 && (
        <>
          <h2 className="text-4xl font-extrabold text-[#42210B] text-center mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="object-cover w-full h-48 transform transition-transform duration-300 hover:scale-105"
                  onError={e => { e.currentTarget.style.opacity = 0.5; }}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
