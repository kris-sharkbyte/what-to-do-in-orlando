import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaTree, FaWater, FaHiking, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Orlando Outdoor Activities | Nature & Adventure | WTDI",
  description: "Explore Orlando's outdoor activities and natural attractions. From hiking trails to water sports, discover the best outdoor adventures in Central Florida.",
  keywords: "Orlando outdoor activities, Orlando hiking, Orlando water sports, Orlando nature trails, Orlando golf, Orlando fishing, Orlando parks",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/explore/outdoor-activities",
  },
  openGraph: {
    title: "Orlando Outdoor Activities - Nature & Adventure",
    description: "Explore Orlando's outdoor activities and natural attractions. From hiking trails to water sports, discover the best outdoor adventures in Central Florida.",
    url: "https://what-to-do-in-orlando.web.app/explore/outdoor-activities",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/outdoor-activities/orlando-outdoor.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando outdoor activities and nature trails",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Outdoor Activities - Nature & Adventure",
    description: "Explore Orlando's outdoor activities and natural attractions. From hiking trails to water sports, discover the best outdoor adventures in Central Florida.",
    images: ["/images/outdoor-activities/orlando-outdoor.jpg"],
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

const outdoorActivities = [
  {
    name: "Wekiwa Springs State Park",
    description: "Crystal clear springs perfect for swimming, kayaking, and hiking through pristine Florida wilderness.",
    image: "/images/outdoor-activities/wekiwa-springs.jpg",
    category: "Water Activities",
    difficulty: "Easy",
    duration: "Half Day",
    location: "Apopka, FL",
    activities: ["Swimming", "Kayaking", "Hiking", "Picnicking"]
  },
  {
    name: "Lake Eola Park",
    description: "Downtown Orlando's iconic park featuring swan boats, walking trails, and beautiful lake views.",
    image: "/images/outdoor-activities/lake-eola.jpg",
    category: "City Parks",
    difficulty: "Easy",
    duration: "2-3 Hours",
    location: "Downtown Orlando",
    activities: ["Walking", "Swan Boats", "Picnicking", "Bird Watching"]
  },
  {
    name: "Orlando Wetlands Park",
    description: "Over 1,600 acres of restored wetlands with excellent bird watching and hiking opportunities.",
    image: "/images/outdoor-activities/orlando-wetlands.jpg",
    category: "Nature Trails",
    difficulty: "Easy",
    duration: "Half Day",
    location: "Christmas, FL",
    activities: ["Hiking", "Bird Watching", "Photography", "Wildlife Viewing"]
  },
  {
    name: "West Orange Trail",
    description: "22-mile paved trail perfect for cycling, walking, and rollerblading through scenic Central Florida.",
    image: "/images/outdoor-activities/west-orange-trail.jpg",
    category: "Cycling",
    difficulty: "Easy",
    duration: "2-4 Hours",
    location: "Winter Garden",
    activities: ["Cycling", "Walking", "Rollerblading", "Running"]
  },
  {
    name: "Golf Courses",
    description: "World-class golf courses including Bay Hill Club & Lodge, home of the Arnold Palmer Invitational.",
    image: "/images/outdoor-activities/orlando-golf.jpg",
    category: "Golf",
    difficulty: "Various",
    duration: "4-5 Hours",
    location: "Various Locations",
    activities: ["Golf", "Lessons", "Tournaments", "Practice"]
  },
  {
    name: "Fishing & Boating",
    description: "Lakes and waterways offering excellent fishing opportunities for bass, crappie, and other species.",
    image: "/images/outdoor-activities/orlando-fishing.jpg",
    category: "Water Sports",
    difficulty: "Easy",
    duration: "Half Day",
    location: "Various Lakes",
    activities: ["Fishing", "Boating", "Kayaking", "Canoeing"]
  }
];

export default function OutdoorActivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orlando Outdoor Activities
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the natural beauty of Central Florida with outdoor adventures, hiking trails, water sports, and scenic parks perfect for year-round enjoyment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaTree className="mr-2" />
                <span>Natural Beauty</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaWater className="mr-2" />
                <span>Water Activities</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaHiking className="mr-2" />
                <span>Hiking Trails</span>
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
            Explore Orlando's Natural Wonders
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Beyond the theme parks, Orlando offers incredible outdoor experiences. From crystal-clear springs to scenic hiking trails, 
            discover the natural beauty that makes Central Florida a paradise for outdoor enthusiasts.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {outdoorActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={activity.image}
                  alt={`${activity.name} Orlando outdoor activity`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activity.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.name}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Difficulty:</span>
                    <span className="text-gray-600 ml-1">{activity.difficulty}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Duration:</span>
                    <span className="text-gray-600 ml-1">{activity.duration}</span>
                  </div>
                </div>
                                 <div className="text-sm text-gray-500 mb-4">
                   <div className="flex items-center">
                     <FaMapMarkerAlt className="mr-2" />
                     {activity.location}
                   </div>
                 </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.activities.map((act, actIndex) => (
                      <span key={actIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/explore/outdoor-activities/${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Outdoor Activity Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Water Activities", count: "15+", icon: "🏊", color: "blue" },
              { name: "Hiking & Trails", count: "20+", icon: "🥾", color: "green" },
              { name: "Cycling", count: "10+", icon: "🚴", color: "purple" },
              { name: "Golf", count: "25+", icon: "⛳", color: "emerald" }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} locations</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Guide */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Times for Outdoor Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                activities: ["Wildflower viewing", "Bird watching", "Hiking"],
                months: "March - May"
              },
              {
                season: "Summer",
                activities: ["Water activities", "Early morning hikes", "Indoor alternatives"],
                months: "June - August"
              },
              {
                season: "Fall",
                activities: ["Comfortable hiking", "Golf", "Cycling"],
                months: "September - November"
              },
              {
                season: "Winter",
                activities: ["Perfect weather", "All activities", "Peak season"],
                months: "December - February"
              }
            ].map((season, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{season.season}</h3>
                <p className="text-sm text-gray-600 mb-2">{season.months}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {season.activities.map((activity, actIndex) => (
                    <li key={actIndex}>• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Outdoor Activity Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Safety & Preparation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Always bring water and stay hydrated</li>
                <li>• Wear appropriate footwear and clothing</li>
                <li>• Check weather conditions before heading out</li>
                <li>• Bring sunscreen and insect repellent</li>
                <li>• Let someone know your plans and expected return time</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Equipment & Gear</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Comfortable walking shoes or hiking boots</li>
                <li>• Lightweight, breathable clothing</li>
                <li>• Hat and sunglasses for sun protection</li>
                <li>• Small backpack for essentials</li>
                <li>• Camera for capturing memories</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for Outdoor Adventure?</h2>
          <p className="text-xl mb-6">Explore more outdoor activities and plan your perfect nature getaway.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore/attractions"
              className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              More Attractions
            </Link>
            <Link
              href="/things-to-do"
              className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Things To Do
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 