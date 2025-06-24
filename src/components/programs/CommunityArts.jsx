import React from 'react';

const CommunityArts = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-orange-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url('your-image.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(8px)'}}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg">
              The Power of Community Arts
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Community-driven arts and culture are at the heart of social transformation. Join us in celebrating the power of creative expression in building stronger, more inclusive communities.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0dj4gafpKHjYTqAX8MNq0To6xh0tXNdWvJ52kwmPTD-EjZw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:scale-105">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Importance of Community Arts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">Why Community Arts Matter</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Community arts provide a platform for people to express themselves, connect with others, and address important social issues. They foster:
        </p>
        <div className="mt-6 space-y-4 text-left max-w-2xl mx-auto">
          <div className="flex items-center text-gray-600">
            <span className="mr-4 text-amber-900 text-2xl">🎭</span>
            <p className="text-xl">Cultural preservation and storytelling that honors traditions and history.</p>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="mr-4 text-amber-900 text-2xl">🌍</span>
            <p className="text-xl">Inclusive spaces where everyone can have a voice and contribute to cultural exchange.</p>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="mr-4 text-amber-900 text-2xl">🎨</span>
            <p className="text-xl">Empowering communities to drive social change through creative expression.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section id="community-programs" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Upcoming Community Arts Programs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">Cultural Heritage Festival</h3>
            <p className="text-gray-300 mb-6">Join us for a day of vibrant performances, exhibitions, and celebrations of Kenya’s rich cultural diversity. An opportunity to experience the past, present, and future of Kenyan arts.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-medium text-gray-200">Date: July 15, 2025</span>
              <a href="#" className="text-orange-600 hover:text-orange-700">Learn More</a>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">Youth Empowerment Workshop</h3>
            <p className="text-gray-300 mb-6">Empowering the youth through arts education, leadership training, and networking. This workshop will help unlock creative potential and develop leadership skills for tomorrow’s changemakers.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-medium text-gray-200">Date: July 22, 2025</span>
              <a href="#" className="text-orange-600 hover:text-orange-700">Learn More</a>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">Traditional Music Concert</h3>
            <p className="text-gray-300 mb-6">An evening of soulful music that celebrates the diverse musical heritage of Kenya. This concert brings together musicians from all walks of life to perform traditional music.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-medium text-gray-200">Date: August 5, 2025</span>
              <a href="#" className="text-orange-600 hover:text-orange-700">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get Involved in Community Arts</h2>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
          Join us in bringing arts to the heart of the community. Volunteer, participate, or support our programs and initiatives to help create lasting change.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSe0dj4gafpKHjYTqAX8MNq0To6xh0tXNdWvJ52kwmPTD-EjZw/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Submit Your Application
        </a>
      </section>
    </div>
  );
};

export default CommunityArts;
