import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaLandmark, FaMapMarkerAlt, FaClock, FaStar, FaHistory, FaPalette } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Orlando Cultural Sites | Museums, Arts & History | WTDI",
  description: "Explore Orlando's cultural sites and museums. From art galleries to historical landmarks, discover the rich cultural heritage of Central Florida.",
  keywords: "Orlando cultural sites, Orlando museums, Orlando art galleries, Orlando history, Orlando cultural attractions, Orlando arts, Orlando landmarks",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/explore/cultural-sites",
  },
  openGraph: {
    title: "Orlando Cultural Sites - Museums, Arts & History",
    description: "Explore Orlando's cultural sites and museums. From art galleries to historical landmarks, discover the rich cultural heritage of Central Florida.",
    url: "https://what-to-do-in-orlando.web.app/explore/cultural-sites",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/cultural-sites/orlando-cultural.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando cultural sites and museums",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Cultural Sites - Museums, Arts & History",
    description: "Explore Orlando's cultural sites and museums. From art galleries to historical landmarks, discover the rich cultural heritage of Central Florida.",
    images: ["/images/cultural-sites/orlando-cultural.jpg"],
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

const culturalSites = [
  {
    name: "Orlando Museum of Art",
    description: "Premier art museum featuring contemporary and classical collections, special exhibitions, and educational programs.",
    image: "/images/cultural-sites/orlando-museum-art.jpg",
    category: "Art Museum",
    rating: 4.4,
    price: "$$",
    hours: "10:00 AM - 4:00 PM",
    location: "Mills 50 District",
    highlights: ["Contemporary Art", "Classical Collections", "Special Exhibitions", "Educational Programs"]
  },
  {
    name: "Orange County Regional History Center",
    description: "Central Florida's premier history museum showcasing the region's rich cultural heritage and historical artifacts.",
    image: "/images/cultural-sites/history-center.jpg",
    category: "History Museum",
    rating: 4.3,
    price: "$$",
    hours: "10:00 AM - 5:00 PM",
    location: "Downtown Orlando",
    highlights: ["Regional History", "Historical Artifacts", "Interactive Exhibits", "Educational Tours"]
  },
  {
    name: "Charles Hosmer Morse Museum of American Art",
    description: "World's most comprehensive collection of works by Louis Comfort Tiffany, including the famous chapel.",
    image: "/images/cultural-sites/morse-museum.jpg",
    category: "Specialty Museum",
    rating: 4.6,
    price: "$$",
    hours: "9:30 AM - 4:00 PM",
    location: "Winter Park",
    highlights: ["Tiffany Glass", "American Art", "Tiffany Chapel", "Decorative Arts"]
  },
  {
    name: "Albin Polasek Museum & Sculpture Gardens",
    description: "Historic home and studio of Czech sculptor Albin Polasek, featuring his works and beautiful gardens.",
    image: "/images/cultural-sites/polasek-museum.jpg",
    category: "Historic Site",
    rating: 4.2,
    price: "$$",
    hours: "10:00 AM - 4:00 PM",
    location: "Winter Park",
    highlights: ["Sculpture Gardens", "Historic Home", "Art Studio", "Garden Tours"]
  },
  {
    name: "Crealdé School of Art",
    description: "Community art school and gallery featuring local artists, workshops, and rotating exhibitions.",
    image: "/images/cultural-sites/crealde-art.jpg",
    category: "Art School",
    rating: 4.1,
    price: "$$",
    hours: "9:00 AM - 4:00 PM",
    location: "Winter Park",
    highlights: ["Art Classes", "Local Artists", "Gallery Exhibits", "Workshops"]
  },
  {
    name: "CityArts Factory",
    description: "Downtown Orlando's premier arts venue featuring local artists, galleries, and cultural events.",
    image: "/images/cultural-sites/cityarts-factory.jpg",
    category: "Arts Venue",
    rating: 4.0,
    price: "$$",
    hours: "11:00 AM - 6:00 PM",
    location: "Downtown Orlando",
    highlights: ["Local Artists", "Gallery Space", "Cultural Events", "Art Workshops"]
  }
];

export default function CulturalSitesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orlando Cultural Sites
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover Orlando's rich cultural heritage through museums, art galleries, and historical landmarks that showcase the diverse character of Central Florida.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaLandmark className="mr-2" />
                <span>Cultural Heritage</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaPalette className="mr-2" />
                <span>Art & Museums</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaHistory className="mr-2" />
                <span>Historical Sites</span>
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
            Explore Orlando's Cultural Heritage
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Beyond the theme parks, Orlando offers a rich cultural landscape with world-class museums, art galleries, and historical sites. 
            Discover the artistic and cultural treasures that make Central Florida a vibrant destination for culture enthusiasts.
          </p>
        </div>

        {/* Cultural Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {culturalSites.map((site, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={site.image}
                  alt={`${site.name} Orlando cultural site`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {site.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h3>
                <p className="text-gray-600 mb-4">{site.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{site.rating}/5</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{site.price}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex items-center mb-1">
                    <FaClock className="mr-2" />
                    {site.hours}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {site.location}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {site.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <span key={highlightIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                    {site.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{site.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={`/explore/cultural-sites/${site.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cultural Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Art Museums", count: "8+", icon: "🎨", description: "Fine art collections" },
              { name: "History Museums", count: "5+", icon: "🏛️", description: "Historical exhibits" },
              { name: "Cultural Centers", count: "12+", icon: "🏺", description: "Cultural programs" },
              { name: "Historic Sites", count: "10+", icon: "📜", description: "Historical landmarks" }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-2">{category.count} sites</p>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Events */}
        <div className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultural Events & Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                event: "Art Exhibitions",
                description: "Rotating exhibitions featuring local and international artists",
                frequency: "Monthly"
              },
              {
                event: "Cultural Festivals",
                description: "Celebrations of diverse cultures and traditions",
                frequency: "Seasonal"
              },
              {
                event: "Educational Programs",
                description: "Workshops, lectures, and guided tours for all ages",
                frequency: "Weekly"
              },
              {
                event: "Historical Tours",
                description: "Guided tours of historic sites and landmarks",
                frequency: "Daily"
              },
              {
                event: "Art Classes",
                description: "Hands-on art classes and creative workshops",
                frequency: "Weekly"
              },
              {
                event: "Cultural Performances",
                description: "Music, dance, and theatrical performances",
                frequency: "Monthly"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.event}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                <span className="text-xs text-amber-600 font-medium">{event.frequency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Tips */}
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultural Site Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Planning Your Visit</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Check museum hours and special exhibitions</li>
                <li>• Look for free admission days and discounts</li>
                <li>• Book guided tours in advance</li>
                <li>• Allow 2-3 hours for larger museums</li>
                <li>• Check for special events and programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Etiquette</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Respect photography policies</li>
                <li>• Keep voices low in galleries</li>
                <li>• Don't touch artwork or exhibits</li>
                <li>• Follow museum guidelines</li>
                <li>• Support local artists and cultural programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cultural Districts */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orlando Cultural Districts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                district: "Downtown Orlando",
                description: "Home to major museums, galleries, and cultural venues",
                highlights: ["Orlando Museum of Art", "History Center", "CityArts Factory"]
              },
              {
                district: "Winter Park",
                description: "Charming cultural district with art schools and museums",
                highlights: ["Morse Museum", "Polasek Museum", "Crealdé School"]
              },
              {
                district: "Mills 50",
                description: "Vibrant arts district with galleries and cultural events",
                highlights: ["Local Galleries", "Art Studios", "Cultural Events"]
              }
            ].map((district, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{district.district}</h3>
                <p className="text-sm text-gray-600 mb-3">{district.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {district.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Orlando's Culture?</h2>
          <p className="text-xl mb-6">Discover more cultural sites and plan your perfect cultural adventure in Orlando.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore/attractions"
              className="bg-white text-amber-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              More Attractions
            </Link>
            <Link
              href="/events"
              className="bg-white text-amber-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Cultural Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 