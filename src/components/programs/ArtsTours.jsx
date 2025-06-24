import React from 'react';

const ArtsTours = () => {
  // Mock data for upcoming art tours
  const tours = [
    {
      name: 'Kenya Art & Culture Tour',
      date: 'August 5, 2025',
      location: 'Nairobi, Mombasa, Kisumu',
      description: 'A cultural journey through Kenya’s major cities, showcasing local art galleries, performances, and cultural heritage sites.',
      link: '#', // Link to more information or registration
    },
    {
      name: 'East Africa Art Experience',
      date: 'September 12, 2025',
      location: 'Tanzania, Uganda, Kenya',
      description: 'Explore the art and culture of East Africa through guided tours of museums, art exhibitions, and traditional performances.',
      link: '#',
    },
    {
      name: 'Visual Arts Masterclass Tour',
      date: 'October 20, 2025',
      location: 'Cape Town, South Africa',
      description: 'An immersive tour focusing on visual arts, featuring workshops with renowned artists and visits to world-class art exhibitions.',
      link: '#',
    },
    {
      name: 'African Dance & Music Tour',
      date: 'November 15, 2025',
      location: 'Accra, Ghana',
      description: 'Experience the vibrant traditions of African dance and music through hands-on workshops and cultural performances.',
      link: '#',
    }
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-orange-600 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492624720869-44cfbfe62ab7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY3JlfDk3fHx3YXJ0c3xlbnwwfHx8fDE2NTgzODg5NzM&ixlib=rb-1.2.1&q=80&w=1080')`
        }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg">
              Arts Tours Across Africa
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Join us on a cultural journey that takes you through Africa’s most vibrant cities, showcasing art, history, and creativity.
            </p>
            <a
              href="#tours"
              className="bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:scale-105"
            >
              Explore Tours
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Art Tours */}
      <section id="tours" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">Upcoming Art Tours</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Discover art across the continent, visit iconic museums, witness live performances, and experience African creativity in every form.
        </p>

        {/* Art Tour Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">{tour.name}</h3>
              <p className="text-gray-300 mb-6">{tour.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base font-medium text-gray-200">{tour.date}</span>
                <a href={tour.link} className="text-orange-600 hover:text-orange-700">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">What to Expect on Our Arts Tours</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience 1 */}
          <div className="space-y-4">
            <div className="text-4xl text-amber-600">🖼️</div>
            <h3 className="text-2xl font-semibold text-amber-600">Art Exhibitions</h3>
            <p className="text-gray-300">Visit world-class art exhibitions featuring both contemporary and traditional art forms from local and international artists.</p>
          </div>
          {/* Experience 2 */}
          <div className="space-y-4">
            <div className="text-4xl text-amber-600">🎭</div>
            <h3 className="text-2xl font-semibold text-amber-600">Live Performances</h3>
            <p className="text-gray-300">Experience live music, dance, theatre, and cultural performances that showcase the talent and creativity of Africa.</p>
          </div>
          {/* Experience 3 */}
          <div className="space-y-4">
            <div className="text-4xl text-amber-600">🗣️</div>
            <h3 className="text-2xl font-semibold text-amber-600">Cultural Dialogues</h3>
            <p className="text-gray-300">Engage with local artists, curators, and performers through cultural dialogues and discussions about the significance of African art forms.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Join an Arts Tour Today</h2>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
          Explore art across Africa and immerse yourself in the diverse cultures that make our continent unique. Don't miss out on the experience!
        </p>
        <a href="#tours" className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Book Your Spot
        </a>
      </section>
    </div>
  );
};

export default ArtsTours;
