import type { Metadata } from 'next';
import Link from 'next/link';
import { FaWater, FaSwimmingPool, FaShip, FaFish, FaStar, FaMapMarkerAlt, FaHeart, FaAnchor } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Water Activities Orlando | Water Sports & Aquatic Adventures | WTDI",
  description: "Dive into Orlando's exciting water activities! From water parks and swimming to water sports, boat tours, and aquatic adventures. Cool off and have fun in Central Florida's waters.",
  keywords: "water activities Orlando, water sports Orlando, swimming Orlando, water parks Orlando, boat tours Orlando, aquatic adventures Orlando, water recreation Orlando, Orlando water activities",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/things-to-do/water",
  },
  openGraph: {
    title: "Water Activities Orlando | Water Sports & Aquatic Adventures",
    description: "Dive into Orlando's exciting water activities! From water parks and swimming to water sports, boat tours, and aquatic adventures.",
    url: "https://what-to-do-in-orlando.web.app/things-to-do/water",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/water-activities-orlando.jpg",
        width: 1200,
        height: 630,
        alt: "Water activities and aquatic adventures in Orlando",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Activities Orlando | Water Sports & Aquatic Adventures",
    description: "Dive into Orlando's exciting water activities! From water parks and swimming to water sports, boat tours, and aquatic adventures.",
    images: ["/images/water-activities-orlando.jpg"],
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

const waterActivities = [
  {
    name: "Disney's Typhoon Lagoon",
    description: "Disney's largest water park with thrilling slides and lazy river",
    type: "Water Park",
    duration: "Full Day",
    price: "$$$",
    location: "Walt Disney World Resort",
    highlights: ["Wave pool", "Water slides", "Lazy river", "Kids play area"]
  },
  {
    name: "Universal's Volcano Bay",
    description: "South Pacific-themed water park with innovative attractions",
    type: "Water Park",
    duration: "Full Day",
    price: "$$$",
    location: "Universal Orlando Resort",
    highlights: ["Volcano Bay", "Water coasters", "Rapid river", "Beach areas"]
  },
  {
    name: "Aquatica Orlando",
    description: "SeaWorld's water park with marine life encounters",
    type: "Water Park",
    duration: "Full Day",
    price: "$$",
    location: "SeaWorld Orlando",
    highlights: ["Dolphin encounters", "Water slides", "Wave pools", "Animal exhibits"]
  },
  {
    name: "Orlando Watersports Complex",
    description: "Cable wakeboarding and water skiing park",
    type: "Water Sports",
    duration: "Half Day",
    price: "$$",
    location: "Orlando",
    highlights: ["Wakeboarding", "Water skiing", "Cable park", "Lessons available"]
  },
  {
    name: "Lake Eola Swan Boats",
    description: "Peaceful paddle boat rides on downtown Orlando's lake",
    type: "Boat Tours",
    duration: "1 Hour",
    price: "$",
    location: "Downtown Orlando",
    highlights: ["Swan boats", "Scenic views", "Family friendly", "Downtown skyline"]
  },
  {
    name: "Winter Park Scenic Boat Tour",
    description: "Historic boat tour through Winter Park's chain of lakes",
    type: "Boat Tours",
    duration: "1 Hour",
    price: "$$",
    location: "Winter Park",
    highlights: ["Historic tour", "Mansions", "Natural beauty", "Educational"]
  }
];

const waterTips = [
  "Check water park hours and weather conditions before visiting",
  "Bring waterproof sunscreen and reapply frequently",
  "Rent lockers for valuables at water parks",
  "Wear water shoes for comfort and safety",
  "Stay hydrated throughout your water activities",
  "Follow all safety rules and lifeguard instructions",
  "Book boat tours in advance during peak season",
  "Bring towels and change of clothes for water activities"
];

export default function WaterActivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Water Activities in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Cool off and have fun with exciting water parks, thrilling water sports, and peaceful aquatic adventures in Central Florida
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Water Parks</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Water Sports</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Boat Tours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Make a Splash in Orlando
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Orlando's warm climate makes it perfect for water activities year-round! From world-class water parks with thrilling slides to peaceful boat tours on scenic lakes, there's a water adventure for everyone. Whether you're seeking adrenaline-pumping water sports or relaxing aquatic experiences, Orlando's water activities will keep you cool and entertained.
            </p>
          </div>
        </div>
      </section>

      {/* Water Activities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Water Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waterActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
                    <span className="text-2xl">{activity.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaWater className="mr-2" />
                      <span>Type: {activity.type}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaStar className="mr-2" />
                      <span>Duration: {activity.duration}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {activity.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <FaHeart className="mr-2 text-red-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={`/explore/attractions`}
                    className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Activity Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Water Activity Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <FaSwimmingPool className="text-4xl text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Parks</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Disney's Typhoon Lagoon</li>
                <li>• Universal's Volcano Bay</li>
                <li>• Aquatica Orlando</li>
                <li>• Adventure Island</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaShip className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Boat Tours</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Lake Eola Swan Boats</li>
                <li>• Winter Park Scenic Tour</li>
                <li>• Airboat adventures</li>
                <li>• Fishing charters</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <FaFish className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Sports</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Wakeboarding</li>
                <li>• Water skiing</li>
                <li>• Jet skiing</li>
                <li>• Paddleboarding</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <FaAnchor className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Aquatic Adventures</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Swimming pools</li>
                <li>• Snorkeling</li>
                <li>• Scuba diving</li>
                <li>• Water aerobics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Water Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Seasonal Water Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Spring & Summer (March-September)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Peak water park season with extended hours</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Best weather for outdoor water sports</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Evening water activities and night swimming</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Special events and water shows</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fall & Winter (October-February)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Heated pools and indoor water activities</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Less crowded water parks with shorter lines</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Peaceful boat tours with cooler weather</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Holiday-themed water events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Water Safety Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Water Safety & Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
              <ul className="space-y-3 text-gray-600">
                {waterTips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Planning Tips</h3>
              <ul className="space-y-3 text-gray-600">
                {waterTips.slice(4).map((tip, index) => (
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
            Explore More Water Fun
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/things-to-do/family" className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Family Activities</h3>
                <p className="text-blue-100">Perfect water activities for the whole family</p>
              </div>
            </Link>
            <Link href="/things-to-do/adventure" className="group">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Adventure & Sports</h3>
                <p className="text-green-100">Thrilling water sports and extreme activities</p>
              </div>
            </Link>
            <Link href="/explore/outdoor-activities" className="group">
              <div className="bg-gradient-to-r from-cyan-500 to-green-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Outdoor Activities</h3>
                <p className="text-cyan-100">Nature-based activities including water recreation</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Splash?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your water adventure today and experience the refreshing fun that Orlando's aquatic activities have to offer!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/plan"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Plan Your Water Adventure
            </Link>
            <Link 
              href="/explore/attractions"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Explore More Attractions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 