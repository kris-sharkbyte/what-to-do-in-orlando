'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaSearch, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaBed, 
  FaUtensils, 
  FaCamera, 
  FaPlane 
} from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: 'Explore',
      href: '/explore',
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      submenu: [
        { name: 'Theme Parks', href: '/explore/theme-parks' },
        { name: 'Attractions', href: '/explore/attractions' },
        { name: 'Outdoor Activities', href: '/explore/outdoor-activities' },
        { name: 'Shopping', href: '/explore/shopping' },
        { name: 'Entertainment', href: '/explore/entertainment' },
        { name: 'Cultural Sites', href: '/explore/cultural-sites' },
      ]
    },
    {
      name: 'Things To Do',
      href: '/things-to-do',
      icon: <FaCamera className="w-4 h-4" />,
      submenu: [
        { name: 'Family Activities', href: '/things-to-do/family' },
        { name: 'Adventure & Sports', href: '/things-to-do/adventure' },
        { name: 'Water Activities', href: '/things-to-do/water' },
        { name: 'Nightlife', href: '/things-to-do/nightlife' },
        { name: 'Seasonal Events', href: '/things-to-do/events' },
        { name: 'Tours & Experiences', href: '/things-to-do/tours' },
      ]
    },
    {
      name: 'Stay',
      href: '/stay',
      icon: <FaBed className="w-4 h-4" />,
      submenu: [
        { name: 'Hotels & Resorts', href: '/stay/hotels' },
        { name: 'Vacation Rentals', href: '/stay/vacation-rentals' },
        { name: 'Bed & Breakfast', href: '/stay/bed-breakfast' },
        { name: 'Campgrounds', href: '/stay/campgrounds' },
        { name: 'Near Theme Parks', href: '/stay/near-theme-parks' },
        { name: 'Luxury Accommodations', href: '/stay/luxury' },
      ]
    },
    {
      name: 'Dine',
      href: '/dine',
      icon: <FaUtensils className="w-4 h-4" />,
      submenu: [
        { name: 'Restaurants', href: '/dine/restaurants' },
        { name: 'Theme Park Dining', href: '/dine/theme-park-dining' },
        { name: 'Local Favorites', href: '/dine/local-favorites' },
        { name: 'Fine Dining', href: '/dine/fine-dining' },
        { name: 'Food Tours', href: '/dine/food-tours' },
        { name: 'Cafes & Coffee', href: '/dine/cafes' },
      ]
    },
    {
      name: 'Events',
      href: '/events',
      icon: <FaCalendarAlt className="w-4 h-4" />,
      submenu: [
        { name: 'Upcoming Events', href: '/events/upcoming' },
        { name: 'Festivals', href: '/events/festivals' },
        { name: 'Concerts', href: '/events/concerts' },
        { name: 'Sports Events', href: '/events/sports' },
        { name: 'Holiday Events', href: '/events/holiday' },
        { name: 'Submit Event', href: '/events/submit' },
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <FaCamera className="w-4 h-4" />,
      submenu: [
        { name: 'Gaming', href: '/blog/gaming' },
        { name: 'Theme Parks', href: '/blog/theme-parks' },
        { name: 'Dining', href: '/blog/dining' },
        { name: 'Family', href: '/blog/family' },
        { name: 'Events', href: '/blog/events' },
      ]
    },
    {
      name: 'Plan',
      href: '/plan',
      icon: <FaPlane className="w-4 h-4" />,
      submenu: [
        { name: 'Travel Planning', href: '/plan/travel-planning' },
        { name: 'Transportation', href: '/plan/transportation' },
        { name: 'Weather', href: '/plan/weather' },
        { name: 'Maps & Directions', href: '/plan/maps' },
        { name: 'Travel Tips', href: '/plan/travel-tips' },
        { name: 'Accessibility', href: '/plan/accessibility' },
      ]
    },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/wtdi-logo.png"
                alt="WTDI - What To Do In Orlando"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority={true}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
                    {item.icon}
                    <span className="ml-1">{item.name}</span>
                    <FaChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div 
                      className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <FaSearch className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                  <FaChevronDown className="ml-auto w-4 h-4" />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 