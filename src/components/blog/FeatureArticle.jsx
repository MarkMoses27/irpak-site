import React from 'react';
import { FiEdit, FiCalendar, FiUser } from 'react-icons/fi'; // Icons for edit, calendar, and author

const FeatureArticle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1607] to-[#42210B] text-white py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-500 mb-4">Feature Article</h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Dive into our latest article on arts, culture, and community-driven change. Stay informed and inspired.
        </p>
      </header>

      {/* Featured Article Section */}
      <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        {/* Image */}
        <div className="relative mb-8 rounded-xl overflow-hidden">
          <img
            src="https://via.placeholder.com/1500x800" // Replace with your image URL
            alt="Feature Article"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Title and Meta */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-orange-400 mb-3">
            Celebrating Cultural Heritage Through Arts and Performance
          </h2>
          <div className="flex justify-between text-gray-400">
            <div className="flex items-center">
              <FiUser className="w-5 h-5 mr-2 text-orange-300" />
              <span className="text-sm">By John Doe</span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="w-5 h-5 mr-2 text-orange-300" />
              <span className="text-sm">June 21, 2025</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="text-lg sm:text-xl text-gray-200 leading-relaxed">
          <p className="mb-6">
            Cultural heritage is the fabric that connects us to our past, our traditions, and our identity. Through music, dance,
            and other forms of artistic expression, we can honor and preserve this heritage while shaping the future. In this
            article, we explore how communities across Kenya are using arts to bridge generational gaps and foster social change.
          </p>

          <p className="mb-6">
            The arts offer a unique platform for dialogue, enabling individuals from diverse backgrounds to come together and
            share their stories. By focusing on indigenous art forms, we can highlight the importance of preserving cultural
            practices while incorporating modern innovations for future generations.
          </p>

          <p>
            Join us as we dive deep into the stories of artists and performers who are leading this cultural renaissance in Kenya.
            Their work not only honors the past but also helps build a better, more inclusive future.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-700 hover:shadow-lg"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureArticle;
