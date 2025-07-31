import type { Metadata } from 'next';
import Link from 'next/link';
import { FaMountain, FaBicycle, FaHiking, FaPlane, FaRocket, FaStar, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Adventure & Sports Orlando | Thrill Activities & Outdoor Sports | WTDI",
  description: "Experience Orlando's most thrilling adventures! From zip lining and skydiving to hiking, biking, and extreme sports. Find your next adrenaline rush in Central Florida.",
  keywords: "adventure Orlando, sports Orlando, thrill activities Orlando, zip lining Orlando, skydiving Orlando, hiking Orlando, biking Orlando, extreme sports Orlando, outdoor activities Orlando",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/things-to-do/adventure",
  },
  openGraph: {
    title: "Adventure & Sports Orlando | Thrill Activities & Outdoor Sports",
    description: "Experience Orlando's most thrilling adventures! From zip lining and skydiving to hiking, biking, and extreme sports.",
    url: "https://what-to-do-in-orlando.web.app/things-to-do/adventure",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/adventure-sports-orlando.jpg",
        width: 1200,
        height: 630,
        alt: "Adventure and sports activities in Orlando",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure & Sports Orlando | Thrill Activities & Outdoor Sports",
    description: "Experience Orlando's most thrilling adventures! From zip lining and skydiving to hiking, biking, and extreme sports.",
    images: ["/images/adventure-sports-orlando.jpg"],
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

const adventureActivities = [
  {
    name: "Orlando Tree Trek Adventure Park",
    description: "Aerial adventure course with zip lines and obstacles",
    difficulty: "Moderate",
    duration: "2-3 Hours",
    price: "$$",
    location: "Kissimmee",
    highlights: ["Zip lining", "Aerial obstacles", "Tree climbing", "Safety training"]
  },
  {
    name: "Skydive Space Center",
    description: "Tandem skydiving over Central Florida",
    difficulty: "Advanced",
    duration: "Half Day",
    price: "$$$",
    location: "Titusville",
    highlights: ["Tandem jumps", "Professional instruction", "Video packages", "Scenic views"]
  },
  {
    name: "Boggy Creek Airboat Adventures",
    description: "High-speed airboat tours through Florida wetlands",
    difficulty: "Easy",
    duration: "1-2 Hours",
    price: "$$",
    location: "Kissimmee",
    highlights: ["Wildlife viewing", "Scenic tours", "Educational experience", "Family friendly"]
  },
  {
    name: "Orlando Watersports Complex",
    description: "Wakeboarding, water skiing, and cable park",
    difficulty: "Moderate",
    duration: "Half Day",
    price: "$$",
    location: "Orlando",
    highlights: ["Wakeboarding", "Water skiing", "Cable park", "Lessons available"]
  },
  {
    name: "Central Florida Hiking Trails",
    description: "Scenic hiking through natural Florida landscapes",
    difficulty: "Easy-Moderate",
    duration: "2-6 Hours",
    price: "$",
    location: "Various locations",
    highlights: ["Nature trails", "Wildlife viewing", "Scenic views", "Photography"]
  },
  {
    name: "Orlando Indoor Skydiving",
    description: "Indoor skydiving experience for all ages",
    difficulty: "Easy",
    duration: "1 Hour",
    price: "$$",
    location: "Orlando",
    highlights: ["Indoor flight", "Professional instruction", "All ages welcome", "Safe environment"]
  }
];

const adventureTips = [
  "Check weather conditions before outdoor activities",
  "Wear appropriate clothing and footwear for your activity",
  "Book adventure tours in advance, especially during peak season",
  "Follow all safety instructions and guidelines",
  "Bring water, sunscreen, and snacks for outdoor activities",
  "Consider your fitness level when choosing activities",
  "Check age and weight restrictions for thrill activities",
  "Purchase activity insurance for extreme sports"
];

export default function AdventureSportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adventure & Sports in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get your adrenaline pumping with thrilling adventures, extreme sports, and outdoor activities that will challenge and excite you
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Thrill Activities</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Outdoor Sports</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Adrenaline Rush</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Push Your Limits in Central Florida
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Orlando isn't just about theme parks! Discover a world of adventure with zip lining through forests, skydiving over scenic landscapes, hiking through natural preserves, and water sports that will get your heart racing. Whether you're a thrill-seeker or just looking to try something new, Orlando has the perfect adventure waiting for you.
            </p>
          </div>
        </div>
      </section>

      {/* Adventure Activities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Adventure Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventureActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
                    <span className="text-2xl">{activity.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMountain className="mr-2" />
                      <span>Difficulty: {activity.difficulty}</span>
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
                    href={`/explore/outdoor-activities`}
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

      {/* Activity Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Adventure Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
                             <FaPlane className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Air Adventures</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Skydiving</li>
                <li>• Indoor skydiving</li>
                <li>• Hot air balloon rides</li>
                <li>• Helicopter tours</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FaBicycle className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Land Sports</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Mountain biking</li>
                <li>• Rock climbing</li>
                <li>• Hiking trails</li>
                <li>• Obstacle courses</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <FaRocket className="text-4xl text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Sports</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Wakeboarding</li>
                <li>• Water skiing</li>
                <li>• Jet skiing</li>
                <li>• Kayaking</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <FaHiking className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nature Adventures</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Airboat tours</li>
                <li>• Wildlife safaris</li>
                <li>• Eco tours</li>
                <li>• Photography tours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Planning Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Safety & Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Your Adventure</h3>
              <ul className="space-y-3 text-gray-600">
                {adventureTips.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During Your Activity</h3>
              <ul className="space-y-3 text-gray-600">
                {adventureTips.slice(4).map((tip, index) => (
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
            Explore More Adventures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/things-to-do/water" className="group">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Water Activities</h3>
                <p className="text-cyan-100">Dive into exciting water sports and aquatic adventures</p>
              </div>
            </Link>
            <Link href="/explore/outdoor-activities" className="group">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Outdoor Activities</h3>
                <p className="text-green-100">Discover nature-based activities and outdoor recreation</p>
              </div>
            </Link>
            <Link href="/things-to-do/tours" className="group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Tours & Experiences</h3>
                <p className="text-purple-100">Guided adventures and unique experiences in Orlando</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your thrilling adventure today and experience the excitement that Orlando has to offer beyond the theme parks!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/plan"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Plan Your Adventure
            </Link>
            <Link 
              href="/explore/outdoor-activities"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore More Activities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 