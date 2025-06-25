import React from 'react';

const Videos = () => {
  return (
    <div className="videos-container py-16 px-4 bg-gray-100">
      <section className="videos-section text-center">
        <div className="content-wrapper max-w-4xl mx-auto">
          <h2 className="section-title text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
            Upcoming Videos
          </h2>
          <p className="coming-soon-text text-lg sm:text-xl text-gray-700 mb-8">
            New videos will be uploaded soon! Stay tuned for exciting updates.
          </p>
          
          {/* Placeholder for future video content */}
          <div className="video-placeholder mb-8">
            <img 
              src="/assets/video-placeholder.png"  // Placeholder image for upcoming videos
              alt="Coming Soon" 
              className="video-placeholder-img w-full h-auto max-w-2xl mx-auto opacity-60"
            />
          </div>

          {/* Call to action button to encourage users to stay updated */}
          <a href="/subscribe" className="btn-subscribe inline-block bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-700 hover:shadow-lg">
            Subscribe to our updates
          </a>
        </div>
      </section>
    </div>
  );
};

export default Videos;
