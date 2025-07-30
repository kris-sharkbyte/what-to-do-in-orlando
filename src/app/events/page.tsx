import Link from "next/link";
import Navigation from "../../components/Navigation";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaHeart } from 'react-icons/fa';

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Brewlando Wizards - Magic: The Gathering",
      description: "Join Orlando's premier Magic: The Gathering community every Wednesday for Commander and Cube games at Brewlando Brewing. Whether you're a seasoned planeswalker or just getting started, everyone is welcome!",
      image: "/images/events/brewlando-wizards.jpg",
      category: "Gaming",
      location: "Brewlando Brewing, Orlando, FL",
      time: "Every Wednesday, 6:00 PM - 11:00 PM",
      rating: 4.9,
      href: "/events/brewlando-wizards",
      featured: true
    },
    {
      id: 2,
      title: "Orlando Farmers Market",
      description: "Fresh local produce, artisanal goods, and live entertainment every Sunday.",
      image: "/images/events/farmers-market.jpg",
      category: "Community",
      location: "Lake Eola Park, Orlando, FL",
      time: "Every Sunday, 10:00 AM - 4:00 PM",
      rating: 4.7,
      href: "/events/farmers-market",
      featured: false
    },
    {
      id: 3,
      title: "Orlando City Soccer Games",
      description: "Experience the excitement of professional soccer at Exploria Stadium.",
      image: "/images/events/orlando-city.jpg",
      category: "Sports",
      location: "Exploria Stadium, Orlando, FL",
      time: "Various dates throughout the season",
      rating: 4.8,
      href: "/events/orlando-city",
      featured: false
    }
  ];

  const categories = [
    { name: "All Events", href: "/events", active: true },
    { name: "Gaming", href: "/events/gaming" },
    { name: "Sports", href: "/events/sports" },
    { name: "Community", href: "/events/community" },
    { name: "Concerts", href: "/events/concerts" },
    { name: "Festivals", href: "/events/festivals" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover exciting events, activities, and entertainment happening throughout Orlando. From weekly gaming groups to seasonal festivals, there's always something happening in the City Beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Event
          </h2>
          {events.filter(event => event.featured).map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="text-white hover:text-red-500 transition-colors">
                        <FaHeart className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(event.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{event.rating}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {event.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="w-5 h-5 mr-3 text-purple-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaClock className="w-5 h-5 mr-3 text-purple-600" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <Link
                    href={event.href}
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            All Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {event.category}
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
                          className={`w-4 h-4 ${i < Math.floor(event.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{event.rating}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-purple-600" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaClock className="w-4 h-4 mr-2 text-purple-600" />
                      <span className="truncate">{event.time}</span>
                    </div>
                  </div>
                  <Link
                    href={event.href}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm"
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

      {/* Submit Event CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have an Event to Share?
          </h2>
          <p className="text-xl mb-8">
            We'd love to feature your Orlando event on our site. Submit your event details and help others discover great things to do in Orlando.
          </p>
          <Link
            href="/events/submit"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Your Event
          </Link>
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