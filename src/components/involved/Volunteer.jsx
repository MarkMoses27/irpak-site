import React from 'react';

const Volunteer = () => {
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
              Become a Volunteer with IRPAK
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Join us in promoting culture, arts, and heritage across Kenya. Be part of a movement that empowers communities through the transformative power of the arts.
            </p>

            <a href="#volunteer-form" className="bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:scale-105">
              Join Us Now
            </a>
          </div>
        </div>
      </section>

      <section id="volunteer-form" className="py-12 sm:py-16 lg:py-20 bg-white text-center">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
    Sign Up to Volunteer
  </h2>
  <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
    Ready to make an impact? Fill out the form below to get started and become part of our community-driven arts initiatives.
  </p>

  <form className="max-w-4xl mx-auto bg-gradient-to-br from-amber-900 to-amber-800 p-8 rounded-xl shadow-lg space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        className="p-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        required
      />
      {/* Email Address */}
      <input
        type="email"
        placeholder="Email Address"
        className="p-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        required
      />
    </div>
    
    {/* Why Volunteer */}
    <textarea
      placeholder="Why do you want to volunteer?"
      rows="4"
      className="p-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
      required
    ></textarea>

    {/* Select Area of Interest */}
    <div className="flex justify-center sm:justify-start">
      <select
        className="p-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent w-full sm:w-auto"
        required
      >
        <option value="">Select your area of interest</option>
        <option value="Music">Music</option>
        <option value="Dance">Dance</option>
        <option value="Theatre">Theatre</option>
        <option value="Visual Arts">Visual Arts</option>
        <option value="Community Programs">Community Programs</option>
      </select>
    </div>

    {/* Submit Button */}
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:scale-105"
      >
        Submit Your Application
      </button>
    </div>
  </form>
</section>



      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Be Part of the Movement</h2>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
          Your involvement in IRPAK’s mission allows us to continue transforming lives and empowering communities across Kenya through arts and culture.
        </p>

        <a href="#volunteer-form" className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Join Us Today
        </a>
      </section>
    </div>
  );
};

export default Volunteer;
