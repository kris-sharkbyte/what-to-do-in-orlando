import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import OptimizedImage from "../components/OptimizedImage";
import { FaMapMarkerAlt, FaCalendarAlt, FaBed, FaUtensils, FaCamera, FaPlane, FaStar, FaHeart } from 'react-icons/fa';

export default function Home() {
  const featuredAttractions = [
    {
      id: 1,
      title: "Walt Disney World Resort",
      description: "Experience the magic of Disney with four theme parks, two water parks, and endless entertainment.",
      image: "/disney-world.jpg",
      category: "Theme Parks",
      rating: 4.9,
      href: "/explore/theme-parks/disney-world"
    },
    {
      id: 2,
      title: "Universal Orlando Resort",
      description: "Thrilling rides, immersive experiences, and the Wizarding World of Harry Potter await.",
      image: "/universal-orlando.jpg",
      category: "Theme Parks",
      rating: 4.8,
      href: "/explore/theme-parks/universal-orlando"
    },
    {
      id: 3,
      title: "International Drive",
      description: "Orlando's premier entertainment district with attractions, dining, and shopping.",
      image: "/international-drive.jpg",
      category: "Attractions",
      rating: 4.6,
      href: "/explore/attractions/international-drive"
    },
    {
      id: 4,
      title: "Orlando Science Center",
      description: "Interactive exhibits and educational experiences for the whole family.",
      image: "/science-center.jpg",
      category: "Cultural Sites",
      rating: 4.5,
      href: "/explore/cultural-sites/orlando-science-center"
    }
  ];

  const quickLinks = [
    { name: "Theme Parks", href: "/explore/theme-parks", icon: FaCamera },
    { name: "Events", href: "/events", icon: FaCalendarAlt },
    { name: "Blog", href: "/blog", icon: FaCamera },
    { name: "Hotels & Resorts", href: "/stay/hotels", icon: FaBed },
    { name: "Restaurants", href: "/dine/restaurants", icon: FaUtensils },
    { name: "Travel Planning", href: "/plan/travel-planning", icon: FaPlane },
    { name: "Maps & Directions", href: "/plan/maps", icon: FaMapMarkerAlt }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WTDI - What To Do In Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your ultimate guide to the best things to do in Orlando, Florida. From world-famous theme parks to hidden gems, find everything you need for the perfect Orlando vacation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/explore/theme-parks"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Theme Parks
              </Link>
              <Link 
                href="/plan/travel-planning"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <link.icon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-900 text-center">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Attractions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the most popular and highly-rated attractions in Orlando that you won't want to miss.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredAttractions.map((attraction) => (
              <div key={attraction.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {attraction.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="text-white hover:text-red-500 transition-colors">
                      <FaHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(attraction.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{attraction.rating}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {attraction.description}
                  </p>
                  <Link
                    href={attraction.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Visit Orlando?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Orlando, Florida is the world's most visited tourist destination, offering an unparalleled mix of entertainment, adventure, and relaxation. Known as "The Theme Park Capital of the World," Orlando is home to Walt Disney World Resort, Universal Orlando Resort, SeaWorld Orlando, and countless other attractions that make it the perfect destination for families, couples, and solo travelers alike.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond the famous theme parks, Orlando boasts a vibrant dining scene with world-class restaurants, luxury hotels and resorts, exciting nightlife options, and beautiful natural attractions. Whether you're seeking thrills on roller coasters, fine dining experiences, or peaceful nature walks, Orlando has something for everyone.
            </p>
            <p className="text-gray-600">
              With year-round sunshine, excellent shopping opportunities, and a welcoming atmosphere, Orlando provides the perfect backdrop for creating unforgettable memories. From the magic of Disney to the excitement of Universal Studios, every visit to Orlando promises new adventures and experiences to cherish.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Orlando Travel Tips
          </h2>
          <p className="text-xl mb-8">
            Get the latest Orlando travel guides, attraction updates, and exclusive deals delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WTDI</h3>
              <p className="text-gray-400">
                What To Do In Orlando - Your complete guide to the best things to do in Orlando, Florida.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/explore/theme-parks" className="hover:text-white">Theme Parks</Link></li>
                <li><Link href="/explore/attractions" className="hover:text-white">Attractions</Link></li>
                <li><Link href="/explore/shopping" className="hover:text-white">Shopping</Link></li>
                <li><Link href="/explore/entertainment" className="hover:text-white">Entertainment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Plan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/stay/hotels" className="hover:text-white">Hotels</Link></li>
                <li><Link href="/dine/restaurants" className="hover:text-white">Restaurants</Link></li>
                <li><Link href="/events" className="hover:text-white">Events</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/plan/travel-planning" className="hover:text-white">Travel Tips</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Orlando Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
