import type { Metadata } from 'next';
import Link from 'next/link';
import { FaCalendarAlt, FaStar, FaMapMarkerAlt, FaHeart, FaSun, FaSnowflake, FaLeaf, FaSeedling } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Seasonal Events Orlando | Year-Round Festivals & Activities | WTDI",
  description: "Discover Orlando's exciting seasonal events! From spring festivals and summer celebrations to fall harvests and winter holiday events. Find year-round entertainment and activities.",
  keywords: "seasonal events Orlando, festivals Orlando, Orlando events, spring events Orlando, summer events Orlando, fall events Orlando, winter events Orlando, Orlando festivals",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/things-to-do/events",
  },
  openGraph: {
    title: "Seasonal Events Orlando | Year-Round Festivals & Activities",
    description: "Discover Orlando's exciting seasonal events! From spring festivals and summer celebrations to fall harvests and winter holiday events.",
    url: "https://what-to-do-in-orlando.web.app/things-to-do/events",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/seasonal-events-orlando.jpg",
        width: 1200,
        height: 630,
        alt: "Seasonal events and festivals in Orlando",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seasonal Events Orlando | Year-Round Festivals & Activities",
    description: "Discover Orlando's exciting seasonal events! From spring festivals and summer celebrations to fall harvests and winter holiday events.",
    images: ["/images/seasonal-events-orlando.jpg"],
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

const seasonalEvents = [
  {
    name: "Epcot International Flower & Garden Festival",
    description: "Spring celebration with stunning floral displays and garden exhibits",
    season: "Spring",
    duration: "March-May",
    price: "$$$",
    location: "Epcot, Walt Disney World",
    highlights: ["Floral displays", "Garden exhibits", "Outdoor kitchens", "Live entertainment"]
  },
  {
    name: "Orlando Fringe Festival",
    description: "Annual performing arts festival featuring theater and comedy",
    season: "Spring",
    duration: "May",
    price: "$$",
    location: "Various venues",
    highlights: ["Live theater", "Comedy shows", "Street performers", "Art exhibits"]
  },
  {
    name: "Disney's Not-So-Scary Halloween Party",
    description: "Family-friendly Halloween celebration with trick-or-treating",
    season: "Fall",
    duration: "September-October",
    price: "$$$",
    location: "Magic Kingdom",
    highlights: ["Trick-or-treating", "Halloween parade", "Special fireworks", "Character meet & greets"]
  },
  {
    name: "Mickey's Very Merry Christmas Party",
    description: "Magical Christmas celebration with holiday entertainment",
    season: "Winter",
    duration: "November-December",
    price: "$$$",
    location: "Magic Kingdom",
    highlights: ["Holiday parade", "Christmas fireworks", "Snow on Main Street", "Special shows"]
  },
  {
    name: "Orlando Film Festival",
    description: "Annual film festival showcasing independent cinema",
    season: "Fall",
    duration: "October",
    price: "$$",
    location: "Various theaters",
    highlights: ["Film screenings", "Q&A sessions", "Awards ceremony", "Networking events"]
  },
  {
    name: "Winter Park Sidewalk Art Festival",
    description: "Premier outdoor art festival featuring fine art and crafts",
    season: "Spring",
    duration: "March",
    price: "Free",
    location: "Winter Park",
    highlights: ["Fine art", "Craft vendors", "Live music", "Food vendors"]
  }
];

const seasonalTips = [
  "Book tickets for popular events well in advance",
  "Check event websites for schedules and updates",
  "Consider weather conditions for outdoor events",
  "Plan transportation and parking in advance",
  "Bring appropriate clothing for seasonal weather",
  "Check for age restrictions and family-friendliness",
  "Look for package deals combining events with attractions",
  "Follow event social media for real-time updates"
];

export default function SeasonalEventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Seasonal Events in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience Orlando's year-round calendar of exciting events, festivals, and seasonal celebrations that bring the city to life throughout the year
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Spring Festivals</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Summer Celebrations</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Fall & Winter Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Year-Round Entertainment
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Orlando's event calendar is packed with exciting seasonal celebrations! From spring flower festivals and summer outdoor concerts to fall harvest celebrations and winter holiday magic, there's always something special happening. These events showcase the city's culture, creativity, and community spirit while providing unique experiences for visitors and locals alike.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Seasonal Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seasonalEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
                    <span className="text-2xl">{event.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2" />
                      <span>Season: {event.season}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaStar className="mr-2" />
                      <span>Duration: {event.duration}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <FaHeart className="mr-2 text-red-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={`/events`}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Events by Season
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <FaSeedling className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Spring (March-May)</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Flower & Garden Festival</li>
                <li>• Fringe Festival</li>
                <li>• Sidewalk Art Festival</li>
                <li>• Spring break events</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <FaSun className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Summer (June-August)</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Independence Day celebrations</li>
                <li>• Outdoor concerts</li>
                <li>• Water park events</li>
                <li>• Summer festivals</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <FaLeaf className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fall (September-November)</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Halloween celebrations</li>
                <li>• Film festivals</li>
                <li>• Harvest festivals</li>
                <li>• Thanksgiving events</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaSnowflake className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Winter (December-February)</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Christmas celebrations</li>
                <li>• New Year's events</li>
                <li>• Holiday parades</li>
                <li>• Winter festivals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Types of Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural & Arts Events</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Film festivals and cinema events</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Art exhibitions and gallery openings</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Theater performances and shows</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Music concerts and festivals</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Theme Park Events</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Disney's seasonal celebrations</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Universal's special events</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>SeaWorld's seasonal shows</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Special holiday celebrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Planning Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Event Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before the Event</h3>
              <ul className="space-y-3 text-gray-600">
                {seasonalTips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During the Event</h3>
              <ul className="space-y-3 text-gray-600">
                {seasonalTips.slice(4).map((tip, index) => (
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
            Explore More Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/events" className="group">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">All Events</h3>
                <p className="text-green-100">Browse the complete calendar of Orlando events</p>
              </div>
            </Link>
            <Link href="/things-to-do/family" className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Family Activities</h3>
                <p className="text-blue-100">Family-friendly events and activities</p>
              </div>
            </Link>
            <Link href="/explore/entertainment" className="group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
                <p className="text-purple-100">Ongoing entertainment venues and activities</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Seasonal Fun?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Plan your visit around Orlando's exciting seasonal events and create unforgettable memories throughout the year!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/plan"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Plan Your Event Trip
            </Link>
            <Link 
              href="/events"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Browse All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 