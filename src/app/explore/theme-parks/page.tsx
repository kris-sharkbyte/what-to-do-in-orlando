import Navigation from "../../../components/Navigation";
import Link from "next/link";
import { FaStar, FaMapMarkerAlt, FaClock, FaTicketAlt, FaHeart } from 'react-icons/fa';

export const metadata = {
  title: "Orlando Theme Parks - Disney World, Universal Studios & More | Orlando Guide",
  description: "Explore Orlando's world-famous theme parks including Walt Disney World, Universal Studios, SeaWorld, and more. Find tickets, tips, and planning guides.",
  keywords: "Orlando theme parks, Disney World, Universal Studios, SeaWorld Orlando, theme park tickets, Orlando attractions",
};

export default function ThemeParksPage() {
  const themeParks = [
    {
      id: 1,
      name: "Walt Disney World Resort",
      description: "The most magical place on Earth featuring four theme parks, two water parks, and endless entertainment options.",
      parks: ["Magic Kingdom", "Epcot", "Disney's Hollywood Studios", "Disney's Animal Kingdom"],
      rating: 4.9,
      priceRange: "$$$",
      bestTime: "September-November",
      image: "/disney-world.jpg",
      href: "/explore/theme-parks/disney-world"
    },
    {
      id: 2,
      name: "Universal Orlando Resort",
      description: "Thrilling rides, immersive experiences, and the Wizarding World of Harry Potter await at this world-class resort.",
      parks: ["Universal Studios Florida", "Universal's Islands of Adventure", "Universal's Volcano Bay"],
      rating: 4.8,
      priceRange: "$$$",
      bestTime: "January-March",
      image: "/universal-orlando.jpg",
      href: "/explore/theme-parks/universal-orlando"
    },
    {
      id: 3,
      name: "SeaWorld Orlando",
      description: "Marine life encounters, thrilling roller coasters, and educational experiences for the whole family.",
      parks: ["SeaWorld Orlando", "Aquatica", "Discovery Cove"],
      rating: 4.6,
      priceRange: "$$",
      bestTime: "October-December",
      image: "/seaworld-orlando.jpg",
      href: "/explore/theme-parks/seaworld-orlando"
    },
    {
      id: 4,
      name: "LEGOLAND Florida",
      description: "Perfect for families with young children, featuring LEGO-themed rides and attractions.",
      parks: ["LEGOLAND Florida", "LEGOLAND Water Park"],
      rating: 4.4,
      priceRange: "$$",
      bestTime: "March-May",
      image: "/legoland-florida.jpg",
      href: "/explore/theme-parks/legoland-florida"
    }
  ];

  const tips = [
    "Book tickets in advance to save money and avoid long lines",
    "Visit during off-peak seasons for shorter wait times",
    "Download park apps for real-time wait times and FastPass+",
    "Stay at on-site hotels for early park access",
    "Plan your visit around special events and seasonal celebrations",
    "Consider multi-day passes for the best value"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orlando Theme Parks
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the world's most magical theme parks in Orlando, Florida. From Disney magic to Universal thrills, experience unforgettable adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Theme Parks Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {themeParks.map((park) => (
              <div key={park.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <button className="text-white hover:text-red-500 transition-colors">
                      <FaHeart className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {park.priceRange}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{park.name}</h3>
                    <div className="flex items-center">
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <span className="ml-1 text-gray-600">{park.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{park.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Parks Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {park.parks.map((parkName) => (
                        <span key={parkName} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {parkName}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="w-4 h-4 mr-1" />
                      <span className="text-sm">Best: {park.bestTime}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaTicketAlt className="w-4 h-4 mr-1" />
                      <span className="text-sm">Tickets Available</span>
                    </div>
                  </div>
                  
                  <Link
                    href={park.href}
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Theme Park Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Tips</h3>
              <ul className="space-y-3">
                {tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="w-4 h-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">More Tips</h3>
              <ul className="space-y-3">
                {tips.slice(3).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="w-4 h-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Orlando Theme Parks Guide
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Orlando, Florida is home to the world's most famous theme parks, making it the ultimate destination for family vacations and thrill-seekers alike. With over 75 million visitors annually, Orlando's theme parks offer unparalleled entertainment experiences that cater to all ages and interests.
            </p>
            <p className="text-gray-600 mb-6">
              Walt Disney World Resort, the crown jewel of Orlando's theme park scene, spans over 25,000 acres and includes four distinct theme parks: Magic Kingdom, Epcot, Disney's Hollywood Studios, and Disney's Animal Kingdom. Each park offers unique experiences, from classic Disney characters and fairy tales to futuristic technology and international culture.
            </p>
            <p className="text-gray-600 mb-6">
              Universal Orlando Resort brings movie magic to life with two incredible theme parks: Universal Studios Florida and Universal's Islands of Adventure. The Wizarding World of Harry Potter, located in both parks, offers an immersive experience that transports visitors to the magical world of Hogwarts and Diagon Alley.
            </p>
            <p className="text-gray-600">
              SeaWorld Orlando combines marine life education with thrilling roller coasters, while LEGOLAND Florida provides the perfect environment for families with young children. With so many options available, planning your Orlando theme park adventure requires careful consideration of timing, tickets, and must-see attractions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Theme Park Adventure?
          </h2>
          <p className="text-xl mb-8">
            Get expert tips, find the best deals, and create unforgettable memories at Orlando's world-famous theme parks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan/travel-planning"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Planning
            </Link>
            <Link
              href="/stay/hotels"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Find Hotels
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 