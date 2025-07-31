import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaTicketAlt, FaClock, FaStar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Orlando Attractions | Best Things to See & Do | WTDI",
  description: "Discover the best Orlando attractions beyond theme parks. From museums to entertainment venues, explore what makes Orlando a world-class destination for visitors.",
  keywords: "Orlando attractions, Orlando things to do, Orlando entertainment, Orlando museums, Orlando activities, Orlando sightseeing",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/explore/attractions",
  },
  openGraph: {
    title: "Orlando Attractions - Best Things to See & Do",
    description: "Discover the best Orlando attractions beyond theme parks. From museums to entertainment venues, explore what makes Orlando a world-class destination.",
    url: "https://what-to-do-in-orlando.web.app/explore/attractions",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/attractions/orlando-attractions.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando attractions and entertainment venues",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Attractions - Best Things to See & Do",
    description: "Discover the best Orlando attractions beyond theme parks. From museums to entertainment venues, explore what makes Orlando a world-class destination.",
    images: ["/images/attractions/orlando-attractions.jpg"],
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

const attractions = [
  {
    name: "Orlando Science Center",
    description: "Interactive science museum with hands-on exhibits, planetarium shows, and educational programs for all ages.",
    image: "/images/attractions/orlando-science-center/orlando-science-center.jpg",
    category: "Educational",
    rating: 4.5,
    price: "$$",
    hours: "10:00 AM - 5:00 PM",
    location: "Downtown Orlando"
  },
  {
    name: "Orlando Museum of Art",
    description: "Premier art museum featuring contemporary and classical collections, special exhibitions, and cultural programs.",
    image: "/images/attractions/cultural-sites/orlando-museum-art.jpg",
    category: "Cultural",
    rating: 4.3,
    price: "$$",
    hours: "10:00 AM - 4:00 PM",
    location: "Mills 50 District"
  },
  {
    name: "Madame Tussauds Orlando",
    description: "World-famous wax museum featuring lifelike celebrity figures and interactive experiences.",
    image: "/images/attractions/madame-tussauds.jpg",
    category: "Entertainment",
    rating: 4.2,
    price: "$$$",
    hours: "10:00 AM - 8:00 PM",
    location: "International Drive"
  },
  {
    name: "Ripley's Believe It or Not!",
    description: "Odditorium featuring bizarre exhibits, interactive displays, and unbelievable artifacts from around the world.",
    image: "/images/attractions/ripleys.jpg",
    category: "Entertainment",
    rating: 4.0,
    price: "$$",
    hours: "10:00 AM - 10:00 PM",
    location: "International Drive"
  },
  {
    name: "WonderWorks",
    description: "Indoor amusement park with over 100 interactive exhibits combining education and entertainment.",
    image: "/images/attractions/wonderworks.jpg",
    category: "Entertainment",
    rating: 4.4,
    price: "$$",
    hours: "10:00 AM - 9:00 PM",
    location: "International Drive"
  },
  {
    name: "Orlando Eye",
    description: "400-foot observation wheel offering panoramic views of Orlando's skyline and surrounding areas.",
    image: "/images/attractions/orlando-eye.jpg",
    category: "Sightseeing",
    rating: 4.1,
    price: "$$",
    hours: "10:00 AM - 11:00 PM",
    location: "International Drive"
  }
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orlando Attractions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the best attractions in Orlando beyond the theme parks. From museums to entertainment venues, explore what makes Orlando a world-class destination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaMapMarkerAlt className="mr-2" />
                <span>100+ Attractions</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaTicketAlt className="mr-2" />
                <span>Family Friendly</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaClock className="mr-2" />
                <span>Year Round</span>
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
            Explore Orlando's Best Attractions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Orlando is home to more than just theme parks. Discover world-class museums, interactive entertainment venues, 
            cultural sites, and unique experiences that showcase the diverse character of Central Florida's premier destination.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={attraction.image}
                  alt={`${attraction.name} Orlando attraction`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {attraction.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{attraction.rating}/5</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{attraction.price}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex items-center mb-1">
                    <FaClock className="mr-2" />
                    {attraction.hours}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {attraction.location}
                  </div>
                </div>
                <Link
                  href={`/explore/attractions/${attraction.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Attraction Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Museums & Cultural", count: "15+", icon: "🏛️" },
              { name: "Entertainment", count: "25+", icon: "🎭" },
              { name: "Educational", count: "10+", icon: "🎓" },
              { name: "Sightseeing", count: "20+", icon: "👁️" }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} attractions</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orlando Attraction Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Times to Visit</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Weekdays are typically less crowded</li>
                <li>• Visit during off-peak seasons for better deals</li>
                <li>• Check for special events and exhibitions</li>
                <li>• Consider combo tickets for multiple attractions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Money-Saving Tips</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Look for online discounts and coupons</li>
                <li>• Consider attraction passes for multiple visits</li>
                <li>• Visit during special promotion periods</li>
                <li>• Check for student, military, or senior discounts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Orlando?</h2>
          <p className="text-xl mb-6">Discover more attractions and plan your perfect Orlando adventure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore/theme-parks"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Theme Parks
            </Link>
            <Link
              href="/things-to-do"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              More Things To Do
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 