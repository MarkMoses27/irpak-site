import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs & Initiatives', path: '/programs' },
  { name: 'Events', path: '/events' },
  { name: 'Get Involved', path: '/involved' },
  { name: 'Media & Gallery', path: '/media' },
  { name: 'Resources', path: '/resources' },
  { name: 'News & Blog', path: '/news' },
  { name: 'Partners & Sponsors', path: '/partners' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [mobileMenuOpen]);

  const CHOC = '#42210B';
  const ORANGE = '#FF5C00';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white/10 backdrop-blur-sm ${isScrolled ? 'bg-white/95 shadow-md py-3' : 'py-4'}`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-[#42210B] text-white font-bold text-xl sm:text-2xl px-4 py-2 rounded-lg">
            IRPAK
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 md:space-x-8 lg:space-x-10">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="text-[#FF5C00] font-medium text-sm md:text-base px-3 py-2 rounded-md hover:bg-[#FF5C00] hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[#FF5C00] hover:bg-[#FF5C00] hover:text-white rounded-lg transition"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 sm:w-80 bg-white shadow-xl transform transition-transform lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="bg-[#42210B] text-white font-bold text-2xl px-4 py-2 rounded-lg">
              IRPAK
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#FF5C00] hover:bg-[#FF5C00] hover:text-white rounded-lg transition"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-4">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="block text-[#FF5C00] font-medium text-base px-4 py-3 rounded-lg hover:bg-[#FF5C00] hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
