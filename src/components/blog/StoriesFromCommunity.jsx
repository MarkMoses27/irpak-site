import React from 'react';
import { FiUsers } from 'react-icons/fi'; // Icon for community stories

const StoriesFromCommunity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1607] to-[#42210B] text-white py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-500 mb-4">Stories From Our Community</h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Read inspiring stories from individuals and communities positively impacted by our initiatives.
        </p>
      </header>

      {/* Coming Soon Section */}
      <div className="max-w-6xl mx-auto text-center bg-black/30 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        <div className="flex justify-center items-center mb-6">
          <FiUsers className="w-14 h-14 text-orange-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-400 mb-4">This section will be updated soon!</h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-6">
          We're gathering stories that showcase the real impact of our programs. Stay tuned for amazing testimonials from the community.
        </p>

        {/* Placeholder for community stories */}
        <div className="space-y-4 max-w-2xl mx-auto mb-8">
          {/* Story Placeholder */}
          <div className="bg-gray-500 p-6 rounded-lg animate-pulse">
            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-3">Community Story Coming Soon</h3>
            <p className="text-gray-300 mb-4">Check back soon to read inspiring stories of change and empowerment from our community.</p>
            <div className="flex justify-between items-center text-orange-300">
              <span>Loading...</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="#"
            className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-700 hover:shadow-lg"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoriesFromCommunity;
