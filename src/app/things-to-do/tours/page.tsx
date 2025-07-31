import type { Metadata } from 'next';
import Link from 'next/link';
import { FaMap, FaCamera, FaStar, FaMapMarkerAlt, FaHeart, FaBus, FaWalking, FaCar, FaShip } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Tours & Experiences Orlando | Guided Tours & Unique Activities | WTDI",
  description: "Discover Orlando's best tours and experiences! From guided city tours and behind-the-scenes theme park tours to unique adventures and cultural experiences. Book your perfect Orlando tour today.",
  keywords: "tours Orlando, guided tours Orlando, Orlando experiences, theme park tours Orlando, city tours Orlando, adventure tours Orlando, Orlando guided tours, unique experiences Orlando",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/things-to-do/tours",
  },
  openGraph: {
    title: "Tours & Experiences Orlando | Guided Tours & Unique Activities",
    description: "Discover Orlando's best tours and experiences! From guided city tours and behind-the-scenes theme park tours to unique adventures and cultural experiences.",
    url: "https://what-to-do-in-orlando.web.app/things-to-do/tours",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/tours-experiences-orlando.jpg",
        width: 1200,
        height: 630,
        alt: "Guided tours and unique experiences in Orlando",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tours & Experiences Orlando | Guided Tours & Unique Activities",
    description: "Discover Orlando's best tours and experiences! From guided city tours and behind-the-scenes theme park tours to unique adventures and cultural experiences.",
    images: ["/images/tours-experiences-orlando.jpg"],
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

const tourExperiences = [
  {
    name: "Disney's Keys to the Kingdom Tour",
    description: "Behind-the-scenes tour of Magic Kingdom with exclusive access",
    type: "Theme Park Tour",
    duration: "5 Hours",
    price: "$$$",
    location: "Magic Kingdom",
    highlights: ["Behind-the-scenes access", "Underground tunnels", "Historical insights", "Exclusive experiences"]
  },
  {
    name: "Orlando City Tour",
    description: "Comprehensive city tour covering Orlando's history and landmarks",
    type: "City Tour",
    duration: "3 Hours",
    price: "$$",
    location: "Downtown Orlando",
    highlights: ["Historical sites", "Cultural landmarks", "Local insights", "Photo opportunities"]
  },
  {
    name: "Airboat Adventure Tour",
    description: "Thrilling airboat ride through Florida's natural wetlands",
    type: "Nature Tour",
    duration: "1-2 Hours",
    price: "$$",
    location: "Kissimmee",
    highlights: ["Wildlife viewing", "Natural scenery", "Educational experience", "Family friendly"]
  },
  {
    name: "Universal Studios VIP Experience",
    description: "Exclusive VIP tour with front-of-line access and behind-the-scenes insights",
    type: "VIP Tour",
    duration: "7 Hours",
    price: "$$$$",
    location: "Universal Studios",
    highlights: ["Front-of-line access", "Behind-the-scenes", "Exclusive dining", "Personal guide"]
  },
  {
    name: "Orlando Food Tour",
    description: "Culinary tour exploring Orlando's diverse dining scene",
    type: "Food Tour",
    duration: "3 Hours",
    price: "$$",
    location: "Various locations",
    highlights: ["Local cuisine", "Restaurant tastings", "Cultural insights", "Expert guide"]
  },
  {
    name: "Sunset Photography Tour",
    description: "Guided photography tour capturing Orlando's most scenic locations",
    type: "Photography Tour",
    duration: "2 Hours",
    price: "$$",
    location: "Various locations",
    highlights: ["Professional guidance", "Scenic locations", "Equipment provided", "Photo tips"]
  }
];

const tourTips = [
  "Book tours in advance, especially during peak season",
  "Check tour requirements and age restrictions",
  "Wear comfortable clothing and appropriate footwear",
  "Bring water, sunscreen, and weather-appropriate gear",
  "Arrive early for tour check-in and orientation",
  "Follow your guide's instructions for safety",
  "Bring camera or phone for photos (if allowed)",
  "Consider tipping your tour guide for excellent service"
];

export default function ToursExperiencesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tours & Experiences in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover Orlando through guided tours, unique experiences, and behind-the-scenes adventures that reveal the city's hidden gems and exclusive access
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Guided Tours</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Unique Experiences</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Behind-the-Scenes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience Orlando Like Never Before
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Go beyond the typical tourist experience with Orlando's incredible selection of guided tours and unique experiences! From behind-the-scenes theme park tours that reveal the magic behind the magic, to cultural city tours that showcase Orlando's rich history, to thrilling outdoor adventures that connect you with Florida's natural beauty. These tours and experiences offer insider access, expert knowledge, and unforgettable memories that will make your Orlando visit truly special.
            </p>
          </div>
        </div>
      </section>

      {/* Tours & Experiences Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Tours & Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourExperiences.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{tour.name}</h3>
                    <span className="text-2xl">{tour.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMap className="mr-2" />
                      <span>Type: {tour.type}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaStar className="mr-2" />
                      <span>Duration: {tour.duration}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <FaHeart className="mr-2 text-red-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={`/explore/attractions`}
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tour Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <FaBus className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Theme Park Tours</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Behind-the-scenes tours</li>
                <li>• VIP experiences</li>
                <li>• Historical tours</li>
                <li>• Exclusive access</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaWalking className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">City Tours</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Historical walking tours</li>
                <li>• Cultural experiences</li>
                <li>• Architecture tours</li>
                <li>• Local insights</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <FaShip className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adventure Tours</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Airboat adventures</li>
                <li>• Nature tours</li>
                <li>• Wildlife encounters</li>
                <li>• Outdoor experiences</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <FaCamera className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialty Tours</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Photography tours</li>
                <li>• Food & culinary tours</li>
                <li>• Art & culture tours</li>
                <li>• Custom experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Types by Transportation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tours by Transportation Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Walking Tours</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Downtown Orlando historical tours</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Theme park walking tours</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Neighborhood cultural tours</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Food and culinary walking tours</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Tours</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Bus tours of Orlando attractions</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Luxury car tours and experiences</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Airboat tours of natural areas</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Boat tours of lakes and waterways</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Planning Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tour Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Your Tour</h3>
              <ul className="space-y-3 text-gray-600">
                {tourTips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During Your Tour</h3>
              <ul className="space-y-3 text-gray-600">
                {tourTips.slice(4).map((tip, index) => (
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
            Explore More Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/things-to-do/adventure" className="group">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Adventure & Sports</h3>
                <p className="text-green-100">Thrilling adventures and outdoor activities</p>
              </div>
            </Link>
            <Link href="/explore/attractions" className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Attractions</h3>
                <p className="text-blue-100">Discover Orlando's top attractions and experiences</p>
              </div>
            </Link>
            <Link href="/things-to-do/family" className="group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Family Activities</h3>
                <p className="text-purple-100">Family-friendly tours and experiences</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Your Perfect Tour?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your Orlando tour or experience today and discover the city's hidden gems, exclusive access, and unforgettable adventures!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/plan"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Plan Your Tour
            </Link>
            <Link 
              href="/explore/attractions"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Explore Attractions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 