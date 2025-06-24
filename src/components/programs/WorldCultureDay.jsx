import React from 'react';

const WorldCultureDay = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-orange-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg">
              Celebrate World Culture Day
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Join us in celebrating the rich diversity of cultures worldwide through art, dance, music, and storytelling. Let’s honor our cultural heritage together!
            </p>
            <a
              href="#events"
              className="bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:scale-105"
            >
              Explore Events
            </a>
          </div>
        </div>
      </section>

      {/* Why World Culture Day Matters */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
          Why World Culture Day Matters
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          World Culture Day provides an opportunity to celebrate cultural diversity and the unique contributions of each culture. It fosters understanding, respect, and appreciation for the arts and traditions that shape our societies.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl text-amber-600 font-semibold">Unity in Diversity</h3>
            <p className="text-gray-600">Celebrating the beauty of different cultures through shared experiences.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl text-amber-600 font-semibold">Cultural Exchange</h3>
            <p className="text-gray-600">Promoting dialogue and exchange of ideas between cultures for mutual enrichment.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl text-amber-600 font-semibold">Preservation of Heritage</h3>
            <p className="text-gray-600">Preserving and promoting cultural practices that are essential to our identities.</p>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section id="events" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Upcoming Events for World Culture Day</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">Cultural Music Festival</h3>
            <p className="text-gray-300 mb-6">An evening celebrating diverse musical genres from around the world, featuring performances by local and international artists.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-medium text-gray-200">Date: June 24, 2025</span>
              <a href="#" className="text-orange-600 hover:text-orange-700">Learn More</a>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">International Dance Performance</h3>
            <p className="text-gray-300 mb-6">A celebration of global dance styles, from traditional to contemporary, brought to life by talented performers from different cultures.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-medium text-gray-200">Date: June 26, 2025</span>
              <a href="#" className="text-orange-600 hover:text-orange-700">Learn More</a>
            </div>
          </div>

          {/* Event 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">Cultural Storytelling Workshop</h3>
            <p className="text-gray-300 mb-6">Join us for a hands-on workshop on the art of storytelling. Learn how to preserve and pass down cultural stories through generations.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-medium text-gray-200">Date: June 28, 2025</span>
              <a href="#" className="text-orange-600 hover:text-orange-700">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get Involved in World Culture Day</h2>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
          Celebrate World Culture Day with us. Volunteer, attend, or contribute to the cultural programs that make this day memorable.
        </p>
        <a href="#volunteer" className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Volunteer Today
        </a>
      </section>
    </div>
  );
};

export default WorldCultureDay;
