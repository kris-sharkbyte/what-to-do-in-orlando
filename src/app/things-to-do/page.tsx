import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCamera, FaMapMarkerAlt, FaClock, FaStar, FaUsers, FaHeart } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Things to Do in Orlando | Activities & Attractions | WTDI",
  description: "Discover the best things to do in Orlando, Florida. From family activities to adventure sports, find exciting activities and attractions for your perfect Orlando vacation.",
  keywords: "things to do in Orlando, Orlando activities, Orlando attractions, Orlando things to do, Orlando vacation activities, Orlando family activities, Orlando adventure",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/things-to-do",
  },
  openGraph: {
    title: "Things to Do in Orlando - Activities & Attractions",
    description: "Discover the best things to do in Orlando, Florida. From family activities to adventure sports, find exciting activities and attractions for your perfect Orlando vacation.",
    url: "https://what-to-do-in-orlando.web.app/things-to-do",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/things-to-do/orlando-activities.jpg",
        width: 1200,
        height: 630,
        alt: "Things to do in Orlando activities and attractions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Things to Do in Orlando - Activities & Attractions",
    description: "Discover the best things to do in Orlando, Florida. From family activities to adventure sports, find exciting activities and attractions for your perfect Orlando vacation.",
    images: ["/images/things-to-do/orlando-activities.jpg"],
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

const activityCategories = [
  {
    name: "Family Activities",
    description: "Perfect activities for families with children of all ages",
    image: "/images/things-to-do/family-activities.jpg",
    icon: "👨‍👩‍👧‍👦",
    count: "50+",
    href: "/things-to-do/family",
    activities: ["Theme Parks", "Museums", "Parks", "Interactive Experiences"]
  },
  {
    name: "Adventure & Sports",
    description: "Thrilling outdoor adventures and sports activities",
    image: "/images/things-to-do/adventure-sports.jpg",
    icon: "🏃‍♂️",
    count: "30+",
    href: "/things-to-do/adventure",
    activities: ["Zip Lining", "Rock Climbing", "Water Sports", "Golf"]
  },
  {
    name: "Water Activities",
    description: "Cool off with exciting water-based adventures",
    image: "/images/things-to-do/water-activities.jpg",
    icon: "🏊‍♂️",
    count: "25+",
    href: "/things-to-do/water",
    activities: ["Swimming", "Kayaking", "Fishing", "Water Parks"]
  },
  {
    name: "Nightlife",
    description: "Experience Orlando's vibrant nightlife scene",
    image: "/images/things-to-do/nightlife.jpg",
    icon: "🌙",
    count: "40+",
    href: "/things-to-do/nightlife",
    activities: ["Bars", "Clubs", "Live Music", "Entertainment"]
  },
  {
    name: "Seasonal Events",
    description: "Special events and activities throughout the year",
    image: "/images/things-to-do/seasonal-events.jpg",
    icon: "🎉",
    count: "100+",
    href: "/things-to-do/events",
    activities: ["Festivals", "Holiday Events", "Concerts", "Exhibitions"]
  },
  {
    name: "Tours & Experiences",
    description: "Guided tours and unique Orlando experiences",
    image: "/images/things-to-do/tours-experiences.jpg",
    icon: "🎯",
    count: "35+",
    href: "/things-to-do/tours",
    activities: ["City Tours", "Food Tours", "Behind-the-Scenes", "VIP Experiences"]
  }
];

const popularActivities = [
  {
    name: "Walt Disney World",
    description: "The most magical place on earth with four theme parks and two water parks",
    rating: 4.8,
    price: "$$$",
    duration: "Full Day",
    bestFor: "Families"
  },
  {
    name: "Universal Orlando Resort",
    description: "Thrilling theme parks featuring your favorite movies and characters",
    rating: 4.7,
    price: "$$$",
    duration: "Full Day",
    bestFor: "Adventure Seekers"
  },
  {
    name: "Orlando Science Center",
    description: "Interactive science museum perfect for curious minds of all ages",
    rating: 4.5,
    price: "$$",
    duration: "Half Day",
    bestFor: "Families"
  },
  {
    name: "Lake Eola Park",
    description: "Downtown Orlando's iconic park with swan boats and walking trails",
    rating: 4.4,
    price: "$",
    duration: "2-3 Hours",
    bestFor: "Everyone"
  },
  {
    name: "Orlando Magic Basketball",
    description: "Catch an NBA game at the Amway Center in downtown Orlando",
    rating: 4.6,
    price: "$$$",
    duration: "3-4 Hours",
    bestFor: "Sports Fans"
  },
  {
    name: "Wekiwa Springs State Park",
    description: "Crystal clear springs perfect for swimming, kayaking, and hiking",
    rating: 4.3,
    price: "$",
    duration: "Half Day",
    bestFor: "Nature Lovers"
  }
];

export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Things to Do in Orlando
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover endless possibilities in Orlando. From world-famous theme parks to hidden local gems, 
              find the perfect activities to make your Orlando vacation unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaCamera className="mr-2" />
                <span>200+ Activities</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaUsers className="mr-2" />
                <span>Family Friendly</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaHeart className="mr-2" />
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
            Endless Adventures Await in Orlando
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Orlando is more than just theme parks. Whether you're seeking family fun, outdoor adventures, 
            cultural experiences, or thrilling entertainment, you'll find activities that match your interests and create lasting memories.
          </p>
        </div>

        {/* Activity Categories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Activity Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activityCategories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={`${category.name} Orlando activities`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category.count} Activities
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{category.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.activities.map((activity, actIndex) => (
                        <span key={actIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{activity.name}</h3>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{activity.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Price:</span>
                      <span className="text-gray-600 ml-1">{activity.price}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Duration:</span>
                      <span className="text-gray-600 ml-1">{activity.duration}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-semibold text-gray-900">Best for:</span>
                    <span className="ml-1">{activity.bestFor}</span>
                  </div>
                  <Link
                    href={`/explore/theme-parks/${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Guide */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Times for Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                activities: ["Theme parks", "Outdoor activities", "Festivals"],
                weather: "Pleasant 70-80°F",
                tip: "Peak season, book early"
              },
              {
                season: "Summer",
                activities: ["Water parks", "Indoor attractions", "Evening events"],
                weather: "Hot 85-95°F",
                tip: "Stay hydrated, plan indoor activities"
              },
              {
                season: "Fall",
                activities: ["Comfortable outdoor activities", "Cultural events", "Golf"],
                weather: "Mild 70-85°F",
                tip: "Perfect weather for all activities"
              },
              {
                season: "Winter",
                activities: ["All activities", "Holiday events", "Theme parks"],
                weather: "Cool 60-75°F",
                tip: "Best weather, smaller crowds"
              }
            ].map((season, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{season.season}</h3>
                <p className="text-sm text-gray-600 mb-2">{season.weather}</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  {season.activities.map((activity, actIndex) => (
                    <li key={actIndex}>• {activity}</li>
                  ))}
                </ul>
                <p className="text-xs text-blue-600 font-medium">{season.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Planning Tips */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orlando Activity Planning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Planning Your Activities</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Book popular attractions in advance</li>
                <li>• Consider multi-day passes for theme parks</li>
                <li>• Plan indoor activities for summer afternoons</li>
                <li>• Check for combo deals and packages</li>
                <li>• Allow travel time between activities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Money-Saving Tips</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Look for online discounts and coupons</li>
                <li>• Visit during off-peak seasons</li>
                <li>• Consider annual passes for locals</li>
                <li>• Check for free activities and events</li>
                <li>• Book activities together for package deals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Orlando?</h2>
          <p className="text-xl mb-6">Start planning your perfect Orlando adventure with our comprehensive activity guides.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Attractions
            </Link>
            <Link
              href="/events"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 