
const Internship = () => {
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
              Apply for an Internship at IRPAK
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Join us in promoting culture, arts, and heritage across Kenya. Gain hands-on experience while contributing to impactful community-driven arts initiatives.
            </p>
            <a href="#internship-form" className="bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:scale-105">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Internship Application Form */}
      <section id="internship-form" className="py-12 sm:py-16 lg:py-20 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">Internship Application Form</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Please fill out the form below to apply for an internship at IRPAK. We look forward to having you on board!
        </p>

        {/* Form Container */}
        <form className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg space-y-6 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-400"
              required
            />
            {/* Email Address */}
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          {/* Resume Upload */}
          <div className="flex justify-center sm:justify-start gap-4">
            <label htmlFor="resume" className="text-gray-800 font-medium text-left">Upload Your Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="p-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          {/* Motivational Textarea */}
     <textarea
  placeholder="Why do you want to intern with us?"
  rows="4"
  className="p-4 rounded-lg text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-400 resize-none w-full 10-w-lg"
  required>
</textarea>


          {/* Area of Interest */}
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
          Apply for our internship program and become part of a team that fosters cultural preservation and artistic development in Kenya.
        </p>

        <a href="#internship-form" className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Apply Today
        </a>
      </section>
    </div>
  );
};

export default Internship;
