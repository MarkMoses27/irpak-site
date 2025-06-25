import React from 'react';

const EventHighlights = () => {
  return (
    <div className="event-highlights-container py-16 px-4 bg-gray-100">
      <section className="event-highlights-section text-center">
        <div className="content-wrapper max-w-4xl mx-auto">
          <h2 className="section-title text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
            Upcoming Events
          </h2>
          <p className="coming-soon-text text-lg sm:text-xl text-gray-700 mb-8">
            Event highlights will be available soon! Stay tuned for exciting updates on our upcoming events.
          </p>
          
          {/* Placeholder for future event content */}
          <div className="event-placeholder mb-8">
            <img 
              src="/assets/event-placeholder.png"  // Placeholder image for upcoming events
              alt="Coming Soon" 
              className="event-placeholder-img w-full h-auto max-w-2xl mx-auto opacity-60"
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

export default EventHighlights;
