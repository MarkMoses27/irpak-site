import React, { useState, useEffect } from 'react';
import { FiCalendar, FiMusic, FiUsers, FiAward, FiMapPin, FiClock, FiChevronRight, FiBookmark, FiShare2 } from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';

const EventsCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState({});
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

  // Update countdown for each event
  useEffect(() => {
    const updateCountdowns = () => {
      const now = Date.now();
      const remaining = {};
      events.forEach((ev) => {
        const diff = ev.date.getTime() - now;
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          remaining[ev.id] = { days, hours, minutes, seconds };
        } else {
          remaining[ev.id] = null; // No countdown for past events
        }
      });
      setTimeRemaining(remaining);
    };

    updateCountdowns();
    const timer = setInterval(updateCountdowns, 1000);
    return () => clearInterval(timer);
  }, [events]);

  // Toggle saved events
  const toggleSave = (id) => setSavedEvents((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  // Handle event selection
  const handleSelectEvent = (id) => {
    setSelectedEvent((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1607] to-[#42210B] text-white">
      {/* Header */}
      <header className="py-12 text-center">
        <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg mb-4">
          <FiCalendar className="w-12 h-12" />
        </div>
        <h1 className="text-5xl font-bold mb-2">Kenya Cultural Events</h1>
        <p className="text-xl text-orange-200">Experience Kenya’s vibrant culture through music, arts, and heritage.</p>
      </header>

      {/* Events Grid */}
      <main className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((ev) => {
            const Countdown = timeRemaining[ev.id];
            return (
              <div
                key={ev.id}
                onClick={() => handleSelectEvent(ev.id)}
                className="relative group rounded-2xl bg-black/40 backdrop-blur-sm border border-orange-500/20 p-6 cursor-pointer transition hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-transparent opacity-10"></div>
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${ev.gradient} shadow-lg`}>
                    <ev.icon className="text-white" size={24} />
                  </div>
                  {/* Only show countdown badge if event is still upcoming */}
                  {Countdown && (
                    <span className="px-3 py-1 text-sm rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      {Countdown.days > 0
                        ? `${Countdown.days}d ${Countdown.hours}h`
                        : Countdown.hours > 0
                          ? `${Countdown.hours}h ${Countdown.minutes}m`
                          : `${Countdown.minutes}m ${Countdown.seconds}s`}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-300">{ev.title}</h3>
                <div className="flex items-center text-orange-300 mb-2">
                  <FiCalendar className="w-5 h-5 mr-2" />
                  {formatDate(ev.date)}
                </div>
                <p className="text-gray-300 mb-4">{ev.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(ev.id);
                      }}
                      className="p-2 bg-black/30 rounded-full hover:bg-orange-500/20"
                    >
                      <FiBookmark
                        className={savedEvents.includes(ev.id) ? "text-orange-500" : "text-orange-300"}
                        size={18}
                      />
                    </button>
                    <button className="p-2 bg-black/30 rounded-full hover:bg-orange-500/20">
                      <FiShare2 className="text-orange-300" size={18} />
                    </button>
                  </div>
                  <button className="flex items-center text-orange-500 font-medium">
                    {selectedEvent === ev.id ? "Hide details" : "More details"}
                    <FiChevronRight className="ml-1" size={18} />
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedEvent === ev.id && Countdown && (
                  <div className="mt-6 pt-6 border-t border-orange-500/20 space-y-4">
                    <div className="flex items-center text-orange-300">
                      <FiClock className="mr-2" /> {ev.time}
                    </div>
                    <div className="flex items-center text-orange-300">
                      <FiMapPin className="mr-2" /> {ev.location}
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {Object.entries(Countdown).map(([unit, val]) => (
                        <div key={unit} className="bg-black/30 rounded-lg p-2">
                          <div className="text-xl font-bold">{val}</div>
                          <div className="text-xs text-orange-300 uppercase">{unit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default EventsCalendar;
