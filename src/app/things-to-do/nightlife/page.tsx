import type { Metadata } from 'next';
import Link from 'next/link';
import { FaGlassMartini, FaMusic, FaStar, FaMapMarkerAlt, FaHeart, FaCocktail, FaBeer, FaWineGlass } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Nightlife Orlando | Bars, Clubs & Evening Entertainment | WTDI",
  description: "Experience Orlando's vibrant nightlife! From trendy bars and nightclubs to live music venues and entertainment districts. Discover the best places to party and unwind after dark.",
  keywords: "nightlife Orlando, bars Orlando, clubs Orlando, live music Orlando, entertainment Orlando, Orlando nightlife, evening activities Orlando, Orlando bars, Orlando clubs",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/things-to-do/nightlife",
  },
  openGraph: {
    title: "Nightlife Orlando | Bars, Clubs & Evening Entertainment",
    description: "Experience Orlando's vibrant nightlife! From trendy bars and nightclubs to live music venues and entertainment districts.",
    url: "https://what-to-do-in-orlando.web.app/things-to-do/nightlife",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/nightlife-orlando.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando nightlife and entertainment venues",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nightlife Orlando | Bars, Clubs & Evening Entertainment",
    description: "Experience Orlando's vibrant nightlife! From trendy bars and nightclubs to live music venues and entertainment districts.",
    images: ["/images/nightlife-orlando.jpg"],
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

const nightlifeVenues = [
  {
    name: "Church Street Station",
    description: "Historic entertainment district with multiple bars and clubs",
    type: "Entertainment District",
    hours: "7 PM - 2 AM",
    price: "$$",
    location: "Downtown Orlando",
    highlights: ["Multiple venues", "Live music", "Historic setting", "Variety of bars"]
  },
  {
    name: "Wall Street Plaza",
    description: "Popular bar district with outdoor seating and live entertainment",
    type: "Bar District",
    hours: "5 PM - 2 AM",
    price: "$$",
    location: "Downtown Orlando",
    highlights: ["Outdoor seating", "Live bands", "Sports bars", "Craft beer"]
  },
  {
    name: "Universal CityWalk",
    description: "Theme park entertainment complex with restaurants and bars",
    type: "Entertainment Complex",
    hours: "6 PM - 12 AM",
    price: "$$$",
    location: "Universal Orlando Resort",
    highlights: ["Restaurants", "Bars", "Live shows", "Shopping"]
  },
  {
    name: "Disney Springs",
    description: "Disney's entertainment district with dining and nightlife",
    type: "Entertainment District",
    hours: "10 AM - 12 AM",
    price: "$$$",
    location: "Walt Disney World Resort",
    highlights: ["Restaurants", "Bars", "Live music", "Shopping"]
  },
  {
    name: "Thornton Park District",
    description: "Trendy neighborhood with upscale bars and restaurants",
    type: "Neighborhood",
    hours: "6 PM - 2 AM",
    price: "$$",
    location: "Thornton Park",
    highlights: ["Upscale dining", "Craft cocktails", "Wine bars", "Outdoor seating"]
  },
  {
    name: "Mills 50 District",
    description: "Eclectic neighborhood with diverse nightlife options",
    type: "Neighborhood",
    hours: "6 PM - 2 AM",
    price: "$",
    location: "Mills 50",
    highlights: ["Dive bars", "Live music", "International cuisine", "Art scene"]
  }
];

const nightlifeTips = [
  "Check venue websites for dress codes and age restrictions",
  "Book reservations for popular restaurants and bars",
  "Use ride-sharing services for safe transportation",
  "Bring valid ID for age verification",
  "Check for special events and live music schedules",
  "Consider parking options and costs in advance",
  "Dress appropriately for the venue type",
  "Stay hydrated and drink responsibly"
];

export default function NightlifePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nightlife in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the city's vibrant after-dark scene with trendy bars, exciting clubs, live music venues, and entertainment districts that come alive when the sun goes down
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Bars & Clubs</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Live Music</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Entertainment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Orlando Comes Alive at Night
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              When the theme parks close, Orlando's nightlife scene takes center stage! From sophisticated cocktail bars and craft breweries to energetic nightclubs and live music venues, the city offers endless entertainment options for adults. Whether you're looking for a romantic evening out, a night of dancing, or casual drinks with friends, Orlando's diverse nightlife has something for every taste and style.
            </p>
          </div>
        </div>
      </section>

      {/* Nightlife Venues Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Nightlife Venues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nightlifeVenues.map((venue, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{venue.name}</h3>
                    <span className="text-2xl">{venue.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{venue.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaGlassMartini className="mr-2" />
                      <span>Type: {venue.type}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{venue.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaStar className="mr-2" />
                      <span>Hours: {venue.hours}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {venue.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <FaHeart className="mr-2 text-red-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={`/explore/entertainment`}
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nightlife Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nightlife Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <FaCocktail className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cocktail Bars</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Craft cocktails</li>
                <li>• Speakeasy style</li>
                <li>• Rooftop bars</li>
                <li>• Wine bars</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaBeer className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Breweries & Pubs</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Craft breweries</li>
                <li>• Sports bars</li>
                <li>• Irish pubs</li>
                <li>• Beer gardens</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <FaMusic className="text-4xl text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Music</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Live bands</li>
                <li>• Jazz clubs</li>
                <li>• Concert venues</li>
                <li>• Open mic nights</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <FaWineGlass className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nightclubs</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Dance clubs</li>
                <li>• DJ venues</li>
                <li>• Karaoke bars</li>
                <li>• Theme nights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nightlife Districts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Popular Nightlife Districts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Downtown Orlando</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Church Street Station - Historic entertainment district</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Wall Street Plaza - Popular bar district</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Thornton Park - Upscale dining and bars</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Mills 50 - Eclectic neighborhood scene</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Theme Park Areas</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Universal CityWalk - Entertainment complex</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Disney Springs - Disney's dining district</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>International Drive - Tourist entertainment</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Lake Buena Vista - Resort area nightlife</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nightlife Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nightlife Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before You Go</h3>
              <ul className="space-y-3 text-gray-600">
                {nightlifeTips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During Your Night Out</h3>
              <ul className="space-y-3 text-gray-600">
                {nightlifeTips.slice(4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore More Entertainment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/explore/entertainment" className="group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
                <p className="text-purple-100">Discover all types of entertainment venues and activities</p>
              </div>
            </Link>
            <Link href="/dine" className="group">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Dining</h3>
                <p className="text-orange-100">Find great restaurants and dining experiences</p>
              </div>
            </Link>
            <Link href="/events" className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Events</h3>
                <p className="text-blue-100">Check out upcoming events and special occasions</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for a Night Out?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover Orlando's exciting nightlife scene and experience the city's vibrant after-dark entertainment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/plan"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Plan Your Night Out
            </Link>
            <Link 
              href="/explore/entertainment"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Entertainment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 