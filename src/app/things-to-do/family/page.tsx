import type { Metadata } from 'next';
import Link from 'next/link';
import { FaUsers, FaBaby, FaChild, FaHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Family Activities Orlando | Kid-Friendly Things To Do | WTDI",
  description: "Discover the best family activities in Orlando! From theme parks and kid-friendly attractions to educational experiences and outdoor adventures. Perfect family fun for all ages.",
  keywords: "family activities Orlando, kid-friendly Orlando, family fun Orlando, Orlando family attractions, children activities Orlando, family entertainment Orlando, Orlando family guide",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/things-to-do/family",
  },
  openGraph: {
    title: "Family Activities Orlando | Kid-Friendly Things To Do",
    description: "Discover the best family activities in Orlando! From theme parks and kid-friendly attractions to educational experiences and outdoor adventures.",
    url: "https://what-to-do-in-orlando.web.app/things-to-do/family",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/family-activities-orlando.jpg",
        width: 1200,
        height: 630,
        alt: "Family enjoying activities in Orlando",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Activities Orlando | Kid-Friendly Things To Do",
    description: "Discover the best family activities in Orlando! From theme parks and kid-friendly attractions to educational experiences and outdoor adventures.",
    images: ["/images/family-activities-orlando.jpg"],
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

const familyActivities = [
  {
    name: "Disney World Family Experience",
    description: "Magical experiences for the whole family",
    ageRange: "All Ages",
    duration: "Full Day",
    price: "$$$",
    location: "Walt Disney World Resort",
    highlights: ["Character meet & greets", "Family rides", "Parades & shows", "Interactive experiences"]
  },
  {
    name: "Universal Studios Family Fun",
    description: "Thrilling adventures for families",
    ageRange: "6+",
    duration: "Full Day",
    price: "$$$",
    location: "Universal Orlando Resort",
    highlights: ["Harry Potter World", "Family coasters", "Live shows", "Interactive attractions"]
  },
  {
    name: "Orlando Science Center",
    description: "Educational fun for curious minds",
    ageRange: "3-12",
    duration: "Half Day",
    price: "$",
    location: "Downtown Orlando",
    highlights: ["Interactive exhibits", "Planetarium shows", "Hands-on learning", "Special programs"]
  },
  {
    name: "Gatorland Family Adventure",
    description: "Wild Florida experience for families",
    ageRange: "All Ages",
    duration: "Half Day",
    price: "$$",
    location: "South Orlando",
    highlights: ["Alligator shows", "Wildlife encounters", "Zip lining", "Train rides"]
  },
  {
    name: "Crayola Experience",
    description: "Creative fun for artistic families",
    ageRange: "2-12",
    duration: "Half Day",
    price: "$$",
    location: "Florida Mall",
    highlights: ["Art activities", "Color mixing", "Craft projects", "Interactive exhibits"]
  },
  {
    name: "WonderWorks Family Entertainment",
    description: "Mind-bending fun for curious families",
    ageRange: "6+",
    duration: "Half Day",
    price: "$$",
    location: "International Drive",
    highlights: ["Inverted building", "Science exhibits", "Rope course", "Laser tag"]
  }
];

const familyTips = [
  "Plan activities around your children's ages and interests",
  "Bring snacks, water, and comfort items for young children",
  "Consider purchasing multi-day passes for theme parks",
  "Take advantage of early morning hours for smaller crowds",
  "Pack sunscreen, hats, and weather-appropriate clothing",
  "Research height requirements for rides before visiting",
  "Book character dining experiences in advance",
  "Use FastPass+ or Genie+ to minimize wait times"
];

export default function FamilyActivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Family Activities in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create unforgettable memories with family-friendly attractions, educational experiences, and magical adventures perfect for all ages
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">All Ages Welcome</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Educational Fun</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Memorable Experiences</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Family Fun for Every Age
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Orlando is the ultimate family destination, offering everything from world-famous theme parks to educational museums and outdoor adventures. Whether you have toddlers, teens, or multi-generational groups, there's something magical for everyone to enjoy together.
            </p>
          </div>
        </div>
      </section>

      {/* Family Activities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Family Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
                    <span className="text-2xl">{activity.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUsers className="mr-2" />
                      <span>Age Range: {activity.ageRange}</span>
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
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Activities by Age Group
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <FaBaby className="text-4xl text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Toddlers (2-5)</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Character meet & greets</li>
                <li>• Gentle rides & shows</li>
                <li>• Interactive play areas</li>
                <li>• Educational museums</li>
                <li>• Animal encounters</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaChild className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kids (6-12)</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Thrilling roller coasters</li>
                <li>• Interactive exhibits</li>
                <li>• Water park adventures</li>
                <li>• Science & discovery</li>
                <li>• Creative workshops</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Teens & Adults</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Extreme thrill rides</li>
                <li>• Cultural experiences</li>
                <li>• Outdoor adventures</li>
                <li>• Shopping & dining</li>
                <li>• Nightlife activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Family Planning Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Family Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before You Go</h3>
              <ul className="space-y-3 text-gray-600">
                {familyTips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During Your Visit</h3>
              <ul className="space-y-3 text-gray-600">
                {familyTips.slice(4).map((tip, index) => (
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore More Family Fun
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/explore/theme-parks" className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Theme Parks</h3>
                <p className="text-blue-100">Discover magical experiences at Orlando's world-famous theme parks</p>
              </div>
            </Link>
            <Link href="/explore/attractions" className="group">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Attractions</h3>
                <p className="text-green-100">Explore exciting attractions perfect for family entertainment</p>
              </div>
            </Link>
            <Link href="/things-to-do/water" className="group">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Water Activities</h3>
                <p className="text-cyan-100">Cool off with fun water activities and aquatic adventures</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Family Fun?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start planning your perfect family vacation in Orlando today. Create memories that will last a lifetime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/plan"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Plan Your Trip
            </Link>
            <Link 
              href="/stay"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Find Family Accommodations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 