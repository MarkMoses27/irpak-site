import React, { useState } from 'react';
import { FiCalendar, FiMusic, FiUsers, FiAward, FiMapPin, FiClock, FiChevronRight, FiBookmark, FiShare2 } from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';

const EventsCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, setSavedEvents] = useState([]);

  // Mock events data
  const events = [
    {
      id: 1,
      title: "World Music Day Kenya",
      date: new Date(2025, 5, 21, 10, 0), // June 21, 2025 10:00
      type: "music",
      description: "Celebrating the universal language of music across Kenya with performances from over 50 artists.",
      location: "Uhuru Park, Nairobi",
      time: "10:00 AM - 10:00 PM",
      icon: FiMusic,
      gradient: "from-orange-500 to-orange-600",
      attendees: 1250,
    },
    {
      id: 2,
      title: "Youth Festival Kenya",
      date: new Date(2025, 7, 14, 9, 0), // August 14, 2025 9:00
      type: "youth",
      description: "Empowering the next generation through arts, workshops, and cultural exchanges.",
      location: "KICC, Nairobi",
      time: "9:00 AM - 6:00 PM",
      icon: FiUsers,
      gradient: "from-orange-600 to-red-500",
      attendees: 850,
    },
    {
      id: 3,
      title: "Pan-African Arts Symposium Kenya",
      date: new Date(2025, 8, 23, 11, 0), // September 23, 2025 11:00
      type: "arts",
      description: "Uniting African artistic traditions and contemporary expressions with exhibitions and live demos.",
      location: "National Museum, Nairobi",
      time: "11:00 AM - 8:00 PM",
      icon: FaPalette,
      gradient: "from-red-500 to-orange-500",
      attendees: 3200,
    },
    {
      id: 4,
      title: "The Legends Festival Kenya",
      date: new Date(2025, 10, 30, 14, 0), // November 30, 2025 14:00
      type: "legends",
      description: "Honoring Kenya's cultural legends through performances, storytelling, and culinary experiences.",
      location: "Bomas of Kenya, Nairobi",
      time: "2:00 PM - 11:00 PM",
      icon: FiAward,
      gradient: "from-orange-500 to-yellow-500",
      attendees: 2100,
    },
  ];

  // Format date for display
  const formatDate = (d) => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // Toggle saved events
  const toggleSave = (id) => setSavedEvents((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  // Handle event selection
  const handleSelectEvent = (id) => {
    setSelectedEvent((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1607] to-[#42210B] text-white">
      {/* Header */}
      <header className="py-8 md:py-12 text-center px-4">
        <div className="inline-flex p-3 md:p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg mb-3 md:mb-4">
          <FiCalendar className="w-8 h-8 md:w-12 md:h-12" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Kenya Cultural Events</h1>
        <p className="text-base md:text-lg lg:text-xl text-orange-200 max-w-2xl mx-auto">
          Experience Kenya's vibrant culture through music, arts, and heritage.
        </p>
      </header>

      {/* Events Grid */}
      <main className="pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
          {events.map((ev) => (
            <div
              key={ev.id}
              onClick={() => handleSelectEvent(ev.id)}
              className="relative group rounded-xl md:rounded-2xl bg-black/40 backdrop-blur-sm border border-orange-500/20 p-4 md:p-6 cursor-pointer transition hover:scale-[1.02] md:hover:scale-105 hover:shadow-lg md:hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-transparent opacity-10"></div>
              <div className="relative z-10 flex justify-between items-start mb-3 md:mb-4">
                <div className={`p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${ev.gradient} shadow-lg`}>
                  <ev.icon className="text-white" size={20} />
                </div>
                <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 whitespace-nowrap">
                  {ev.attendees.toLocaleString()} attending
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-orange-300">{ev.title}</h3>
              <div className="flex items-center text-orange-300 mb-2 text-sm md:text-base">
                <FiCalendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {formatDate(ev.date)}
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-4">{ev.description}</p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSave(ev.id);
                    }}
                    className="p-2 md:p-2.5 bg-black/30 rounded-full hover:bg-orange-500/20 active:scale-95 transition-transform"
                  >
                    <FiBookmark
                      className={savedEvents.includes(ev.id) ? "text-orange-500" : "text-orange-300"}
                      size={16}
                    />
                  </button>
                  <button className="p-2 md:p-2.5 bg-black/30 rounded-full hover:bg-orange-500/20 active:scale-95 transition-transform">
                    <FiShare2 className="text-orange-300" size={16} />
                  </button>
                </div>
                <button className="flex items-center text-sm md:text-base text-orange-500 font-medium active:text-orange-400">
                  {selectedEvent === ev.id ? "Hide details" : "More details"}
                  <FiChevronRight className="ml-1" size={16} />
                </button>
              </div>

              {/* Expanded Details */}
              {selectedEvent === ev.id && (
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-orange-500/20 space-y-3 md:space-y-4">
                  <div className="flex items-center text-orange-300 text-sm md:text-base">
                    <FiClock className="mr-2 w-4 h-4" /> {ev.time}
                  </div>
                  <div className="flex items-center text-orange-300 text-sm md:text-base">
                    <FiMapPin className="mr-2 w-4 h-4" /> {ev.location}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventsCalendar;