import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaMusic, FaTheaterMasks, FaLaugh, FaStar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Orlando Entertainment | Shows, Nightlife & Events | WTDI",
  description: "Discover Orlando's entertainment scene. From live shows to nightlife, find the best entertainment venues and experiences in Central Florida.",
  keywords: "Orlando entertainment, Orlando shows, Orlando nightlife, Orlando live music, Orlando theaters, Orlando events, Orlando performances",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/explore/entertainment",
  },
  openGraph: {
    title: "Orlando Entertainment - Shows, Nightlife & Events",
    description: "Discover Orlando's entertainment scene. From live shows to nightlife, find the best entertainment venues and experiences in Central Florida.",
    url: "https://what-to-do-in-orlando.web.app/explore/entertainment",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/entertainment/orlando-entertainment.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando entertainment venues and shows",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Entertainment - Shows, Nightlife & Events",
    description: "Discover Orlando's entertainment scene. From live shows to nightlife, find the best entertainment venues and experiences in Central Florida.",
    images: ["/images/entertainment/orlando-entertainment.jpg"],
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

const entertainmentVenues = [
  {
    name: "Dr. Phillips Center for the Performing Arts",
    description: "World-class performing arts center featuring Broadway shows, concerts, and cultural performances.",
    image: "/images/entertainment/dr-phillips-center.jpg",
    category: "Performing Arts",
    rating: 4.7,
    price: "$$$",
    hours: "Varies by show",
    location: "Downtown Orlando",
    shows: ["Broadway Shows", "Symphony", "Ballet", "Comedy"]
  },
  {
    name: "House of Blues Orlando",
    description: "Iconic music venue featuring live bands, Southern-inspired cuisine, and intimate concert experiences.",
    image: "/images/entertainment/house-of-blues.jpg",
    category: "Live Music",
    rating: 4.4,
    price: "$$",
    hours: "5:00 PM - 2:00 AM",
    location: "Disney Springs",
    shows: ["Rock", "Blues", "Country", "Alternative"]
  },
  {
    name: "SAK Comedy Lab",
    description: "Orlando's premier comedy club featuring improv shows, stand-up comedy, and comedy classes.",
    image: "/images/entertainment/sak-comedy.jpg",
    category: "Comedy",
    rating: 4.5,
    price: "$$",
    hours: "7:00 PM - 11:00 PM",
    location: "Downtown Orlando",
    shows: ["Improv", "Stand-up", "Comedy Classes", "Open Mic"]
  },
  {
    name: "Orlando Magic Games",
    description: "NBA basketball games at the Amway Center featuring the Orlando Magic and special events.",
    image: "/images/entertainment/orlando-magic.jpg",
    category: "Sports Entertainment",
    rating: 4.6,
    price: "$$$",
    hours: "Game times vary",
    location: "Downtown Orlando",
    shows: ["NBA Games", "Concerts", "Special Events", "Family Shows"]
  },
  {
    name: "Universal CityWalk",
    description: "Entertainment complex featuring restaurants, bars, live music, and nightlife options.",
    image: "/images/entertainment/universal-citywalk.jpg",
    category: "Nightlife",
    rating: 4.3,
    price: "$$",
    hours: "11:00 AM - 2:00 AM",
    location: "Universal Orlando",
    shows: ["Live Music", "Dancing", "Dining", "Shopping"]
  },
  {
    name: "The Plaza Live",
    description: "Historic theater featuring live music, comedy shows, and special events in an intimate setting.",
    image: "/images/entertainment/plaza-live.jpg",
    category: "Live Music",
    rating: 4.2,
    price: "$$",
    hours: "7:00 PM - 12:00 AM",
    location: "Mills 50 District",
    shows: ["Indie Rock", "Alternative", "Comedy", "Special Events"]
  }
];

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orlando Entertainment
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the best entertainment in Orlando. From live shows to nightlife, discover the vibrant entertainment scene that makes Central Florida come alive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaMusic className="mr-2" />
                <span>Live Music</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaTheaterMasks className="mr-2" />
                <span>Shows</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaLaugh className="mr-2" />
                <span>Comedy</span>
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
            Experience Orlando's Entertainment Scene
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Orlando offers a diverse entertainment scene beyond the theme parks. From world-class performing arts to intimate live music venues, 
            discover the cultural and entertainment experiences that make Orlando a vibrant destination.
          </p>
        </div>

        {/* Entertainment Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {entertainmentVenues.map((venue, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={venue.image}
                  alt={`${venue.name} Orlando entertainment venue`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {venue.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h3>
                <p className="text-gray-600 mb-4">{venue.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{venue.rating}/5</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{venue.price}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex items-center mb-1">
                    <FaClock className="mr-2" />
                    {venue.hours}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {venue.location}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Featured Shows:</h4>
                  <div className="flex flex-wrap gap-2">
                    {venue.shows.slice(0, 3).map((show, showIndex) => (
                      <span key={showIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {show}
                      </span>
                    ))}
                    {venue.shows.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{venue.shows.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={`/explore/entertainment/${venue.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Entertainment Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Entertainment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Live Music", count: "25+", icon: "🎵", description: "Concerts and performances" },
              { name: "Comedy", count: "10+", icon: "😂", description: "Stand-up and improv" },
              { name: "Theater", count: "15+", icon: "🎭", description: "Plays and musicals" },
              { name: "Nightlife", count: "50+", icon: "🌙", description: "Bars and clubs" }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-2">{category.count} venues</p>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Entertainment Tips */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entertainment Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking & Tickets</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Book tickets in advance for popular shows</li>
                <li>• Check for early bird and group discounts</li>
                <li>• Look for package deals with dining</li>
                <li>• Consider season passes for regular venues</li>
                <li>• Check venue websites for special offers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Times to Visit</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Weekends are busiest for entertainment</li>
                <li>• Weekday shows often have better prices</li>
                <li>• Check for happy hour specials</li>
                <li>• Visit during off-peak tourist seasons</li>
                <li>• Look for special event nights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Seasonal Entertainment */}
        <div className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seasonal Entertainment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                events: ["Spring concerts", "Festival season", "Outdoor performances"],
                months: "March - May"
              },
              {
                season: "Summer",
                events: ["Summer concert series", "Outdoor festivals", "Theme park shows"],
                months: "June - August"
              },
              {
                season: "Fall",
                events: ["Fall festivals", "Halloween events", "Cultural performances"],
                months: "September - November"
              },
              {
                season: "Winter",
                events: ["Holiday shows", "New Year celebrations", "Indoor entertainment"],
                months: "December - February"
              }
            ].map((season, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{season.season}</h3>
                <p className="text-sm text-gray-600 mb-2">{season.months}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {season.events.map((event, eventIndex) => (
                    <li key={eventIndex}>• {event}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for Entertainment?</h2>
          <p className="text-xl mb-6">Discover more entertainment options and plan your perfect night out in Orlando.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Upcoming Events
            </Link>
            <Link
              href="/things-to-do"
              className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              More Things To Do
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 