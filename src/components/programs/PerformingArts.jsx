import React from 'react';

const PerformingArts = () => {
  // Mock data for performing arts events
  const events = [
    {
      name: 'Traditional Dance Performance',
      date: 'July 20, 2025',
      location: 'National Theatre, Nairobi',
      description: 'A beautiful display of Kenya\'s rich cultural dance traditions.',
      link: '#', // Link to learn more or tickets
    },
    {
      name: 'Theatre Workshop: Acting Basics',
      date: 'July 25, 2025',
      location: 'IRPAK Arts Center',
      description: 'A workshop for aspiring actors to learn the fundamentals of acting.',
      link: '#',
    },
    {
      name: 'World Music Concert',
      date: 'August 1, 2025',
      location: 'Uhuru Gardens',
      description: 'A celebration of global music, featuring artists from around the world.',
      link: '#',
    },
    {
      name: 'Spoken Word Night',
      date: 'August 10, 2025',
      location: 'IRPAK Cultural Hub',
      description: 'An open-mic event where poets and spoken word artists share their stories.',
      link: '#',
    }
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-orange-600 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542820630-45b775a4b338?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY3JlfDg3fHxwb3J0cmlhZGVuJTIwYXJ0fGVufDB8fHx8fDE2NTg1OTc3OTM&ixlib=rb-1.2.1&q=80&w=1080')`
        }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg">
              The World of Performing Arts
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Join us in celebrating the magic of live performance! From music to dance to theatre, immerse yourself in the diverse world of performing arts.
            </p>
            <a href="#events" className="bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:scale-105">
              Explore Events
            </a>
          </div>
        </div>
      </section>

      {/* Performing Arts Types */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">The Different Types of Performing Arts</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Performing arts bring cultures to life through movement, sound, and performance. Below are the main types of performing arts that continue to inspire generations.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dance */}
          <div className="space-y-4 text-center">
            <div className="text-4xl text-amber-600">💃</div>
            <h3 className="text-2xl font-semibold text-amber-600">Dance</h3>
            <p className="text-gray-600">From traditional to contemporary, dance is a powerful expression of culture and identity.</p>
          </div>
          {/* Music */}
          <div className="space-y-4 text-center">
            <div className="text-4xl text-amber-600">🎵</div>
            <h3 className="text-2xl font-semibold text-amber-600">Music</h3>
            <p className="text-gray-600">Music transcends language, bringing people together through rhythm and melody.</p>
          </div>
          {/* Theatre */}
          <div className="space-y-4 text-center">
            <div className="text-4xl text-amber-600">🎭</div>
            <h3 className="text-2xl font-semibold text-amber-600">Theatre</h3>
            <p className="text-gray-600">Theatre is a powerful medium for storytelling, emotional connection, and social commentary.</p>
          </div>
          {/* Spoken Word */}
          <div className="space-y-4 text-center">
            <div className="text-4xl text-amber-600">🗣️</div>
            <h3 className="text-2xl font-semibold text-amber-600">Spoken Word</h3>
            <p className="text-gray-600">Spoken word combines poetry and performance, giving a voice to individual experiences and struggles.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Upcoming Performing Arts Events</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">{event.name}</h3>
              <p className="text-gray-300 mb-6">{event.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base font-medium text-gray-200">{event.date}</span>
                <a href={event.link} className="text-orange-600 hover:text-orange-700">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get Involved in Performing Arts</h2>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
          Join us in supporting the world of performing arts. Whether you want to perform, volunteer, or support, there’s a place for you.
        </p>
        <a href="#volunteer" className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Become a Volunteer
        </a>
      </section>
    </div>
  );
};

export default PerformingArts;
