import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaMapMarkerAlt, FaStar, FaDollarSign, FaWifi, FaSwimmingPool } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Orlando Hotels & Accommodations | Where to Stay | WTDI",
  description: "Find the perfect place to stay in Orlando. From luxury resorts to budget hotels, discover the best accommodations near theme parks and attractions.",
  keywords: "Orlando hotels, Orlando accommodations, Orlando resorts, Orlando lodging, Orlando vacation rentals, Orlando hotels near Disney, Orlando places to stay",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/stay",
  },
  openGraph: {
    title: "Orlando Hotels & Accommodations - Where to Stay",
    description: "Find the perfect place to stay in Orlando. From luxury resorts to budget hotels, discover the best accommodations near theme parks and attractions.",
    url: "https://what-to-do-in-orlando.web.app/stay",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/stay/orlando-hotels.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando hotels and accommodations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Hotels & Accommodations - Where to Stay",
    description: "Find the perfect place to stay in Orlando. From luxury resorts to budget hotels, discover the best accommodations near theme parks and attractions.",
    images: ["/images/stay/orlando-hotels.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const accommodationTypes = [
  {
    name: "Hotels & Resorts",
    description: "Traditional hotels and luxury resorts with full amenities",
    image: "/images/stay/hotels-resorts.jpg",
    icon: "🏨",
    count: "200+",
    href: "/stay/hotels",
    features: ["Room Service", "Pools", "Spa", "Restaurants"]
  },
  {
    name: "Vacation Rentals",
    description: "Private homes and condos perfect for families and groups",
    image: "/images/stay/vacation-rentals.jpg",
    icon: "🏠",
    count: "500+",
    href: "/stay/vacation-rentals",
    features: ["Full Kitchen", "Multiple Bedrooms", "Private Pool", "Space"]
  },
  {
    name: "Bed & Breakfast",
    description: "Charming inns and boutique accommodations",
    image: "/images/stay/bed-breakfast.jpg",
    icon: "🛏️",
    count: "25+",
    href: "/stay/bed-breakfast",
    features: ["Breakfast Included", "Personal Service", "Charm", "Local Feel"]
  },
  {
    name: "Campgrounds",
    description: "Outdoor camping and RV parks for nature lovers",
    image: "/images/stay/campgrounds.jpg",
    icon: "⛺",
    count: "15+",
    href: "/stay/campgrounds",
    features: ["Nature", "RV Sites", "Tent Camping", "Outdoor Activities"]
  },
  {
    name: "Near Theme Parks",
    description: "Accommodations within walking distance of major attractions",
    image: "/images/stay/near-theme-parks.jpg",
    icon: "🎢",
    count: "100+",
    href: "/stay/near-theme-parks",
    features: ["Shuttle Service", "Early Access", "Theme Park Views", "Convenience"]
  },
  {
    name: "Luxury Accommodations",
    description: "High-end resorts and boutique hotels for premium experiences",
    image: "/images/stay/luxury-accommodations.jpg",
    icon: "💎",
    count: "50+",
    href: "/stay/luxury",
    features: ["Premium Service", "Spa", "Fine Dining", "Exclusive Amenities"]
  }
];

const popularHotels = [
  {
    name: "Walt Disney World Resorts",
    description: "Official Disney hotels with theme park benefits and magical experiences",
    rating: 4.7,
    price: "$$$",
    location: "Walt Disney World",
    amenities: ["Theme Park Access", "Disney Transportation", "Character Dining", "Extra Magic Hours"]
  },
  {
    name: "Universal Orlando Hotels",
    description: "Premier hotels with Universal Studios benefits and early park admission",
    rating: 4.6,
    price: "$$$",
    location: "Universal Orlando",
    amenities: ["Early Park Admission", "Express Pass", "Water Taxi", "Resort Pools"]
  },
  {
    name: "Gaylord Palms Resort",
    description: "Luxury resort with indoor gardens, multiple pools, and convention facilities",
    rating: 4.5,
    price: "$$$",
    location: "Kissimmee",
    amenities: ["Indoor Gardens", "Multiple Pools", "Spa", "Fine Dining"]
  },
  {
    name: "Rosen Shingle Creek",
    description: "Upscale resort with golf course, spa, and multiple dining options",
    rating: 4.4,
    price: "$$$",
    location: "International Drive",
    amenities: ["Golf Course", "Spa", "Multiple Restaurants", "Pool Complex"]
  },
  {
    name: "Hilton Orlando",
    description: "Full-service hotel with lazy river, spa, and convention center access",
    rating: 4.3,
    price: "$$",
    location: "International Drive",
    amenities: ["Lazy River", "Spa", "Multiple Pools", "Business Center"]
  },
  {
    name: "Hyatt Regency Orlando",
    description: "Convention hotel with pool complex, spa, and multiple dining venues",
    rating: 4.2,
    price: "$$",
    location: "International Drive",
    amenities: ["Pool Complex", "Spa", "Multiple Restaurants", "Convention Center"]
  }
];

export default function StayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Where to Stay in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Find the perfect accommodation for your Orlando vacation. From luxury resorts to budget-friendly options, 
              discover comfortable places to stay near all the attractions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaBed className="mr-2" />
                <span>800+ Options</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaWifi className="mr-2" />
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaSwimmingPool className="mr-2" />
                <span>Pools</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Find Your Perfect Orlando Accommodation
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Orlando offers accommodations for every budget and preference. Whether you want to stay steps from the theme parks, 
            enjoy luxury amenities, or find a budget-friendly option, we'll help you choose the perfect place to rest after your adventures.
          </p>
        </div>

        {/* Accommodation Types Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Accommodation Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodationTypes.map((type, index) => (
              <Link key={index} href={type.href} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={type.image}
                      alt={`${type.name} Orlando accommodation`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {type.count} Options
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{type.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, featIndex) => (
                        <span key={featIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Hotels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Hotels & Resorts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularHotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{hotel.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Price:</span>
                      <span className="text-gray-600 ml-1">{hotel.price}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Location:</span>
                      <span className="text-gray-600 ml-1">{hotel.location}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.slice(0, 3).map((amenity, amenityIndex) => (
                        <span key={amenityIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{hotel.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/stay/hotels/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Guide */}
        <div className="bg-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Stay in Orlando</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                area: "Walt Disney World Area",
                description: "Official Disney hotels and nearby accommodations",
                pros: ["Theme park access", "Disney transportation", "Character dining"],
                cons: ["Higher prices", "Limited dining options"]
              },
              {
                area: "Universal Orlando Area",
                description: "Hotels near Universal Studios and Islands of Adventure",
                pros: ["Early park admission", "Express pass benefits", "Water taxi access"],
                cons: ["Limited to Universal parks", "Higher prices"]
              },
              {
                area: "International Drive",
                description: "Central location with many attractions and restaurants",
                pros: ["Central location", "Many restaurants", "Shopping nearby"],
                cons: ["Traffic congestion", "Tourist crowds"]
              },
              {
                area: "Downtown Orlando",
                description: "Urban area with cultural attractions and nightlife",
                pros: ["Cultural attractions", "Nightlife", "Local restaurants"],
                cons: ["Distance from theme parks", "Limited family activities"]
              },
              {
                area: "Kissimmee",
                description: "Budget-friendly area with easy theme park access",
                pros: ["Lower prices", "Easy park access", "Family-friendly"],
                cons: ["Less luxury options", "Limited dining"]
              },
              {
                area: "Winter Park",
                description: "Charming area with cultural attractions and boutique hotels",
                pros: ["Cultural attractions", "Charming atmosphere", "Local feel"],
                cons: ["Distance from theme parks", "Limited budget options"]
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.area}</h3>
                <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                <div className="text-sm">
                  <div className="mb-2">
                    <span className="font-semibold text-green-600">Pros:</span>
                    <ul className="text-gray-600 space-y-1 mt-1">
                      {area.pros.map((pro, proIndex) => (
                        <li key={proIndex}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-red-600">Cons:</span>
                    <ul className="text-gray-600 space-y-1 mt-1">
                      {area.cons.map((con, conIndex) => (
                        <li key={conIndex}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Tips */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orlando Accommodation Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Tips</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Book 6-12 months in advance for peak season</li>
                <li>• Check for package deals with theme park tickets</li>
                <li>• Consider resort fees and parking costs</li>
                <li>• Look for free cancellation policies</li>
                <li>• Check for AAA, military, or senior discounts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Money-Saving Tips</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Stay during off-peak seasons for better rates</li>
                <li>• Consider vacation rentals for longer stays</li>
                <li>• Look for hotels with free breakfast</li>
                <li>• Check for resort fee waivers</li>
                <li>• Book directly with hotels for best rates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-6">Find the perfect accommodation for your Orlando vacation and start planning your dream trip.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stay/hotels"
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Hotels
            </Link>
              <Link
                href="/dine"
                className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Dining Options
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 