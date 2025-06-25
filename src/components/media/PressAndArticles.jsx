import React from 'react';

const PressAndArticles = () => {
  return (
    <div className="press-articles-container py-16 px-4 bg-gray-100">
      <section className="press-articles-section text-center">
        <div className="content-wrapper max-w-4xl mx-auto">
          <h2 className="section-title text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
            Press & Articles
          </h2>
          <p className="coming-soon-text text-lg sm:text-xl text-gray-700 mb-8">
            Press releases and articles will be available soon! Stay tuned for exciting updates.
          </p>
          
          {/* Placeholder for future press and article content */}
          <div className="press-placeholder mb-8">
            <img 
              src="/assets/press-placeholder.png"  // Placeholder image for upcoming press and articles
              alt="Coming Soon" 
              className="press-placeholder-img w-full h-auto max-w-2xl mx-auto opacity-60"
            />
          </div>

          {/* Stay Tuned Button */}
          <a href="/subscribe" className="btn-subscribe inline-block bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-700 hover:shadow-lg">
            Stay Tuned
          </a>
        </div>
      </section>
    </div>
  );
};

export default PressAndArticles;
