import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlane, FaMapMarkerAlt, FaCalendarAlt, FaCar, FaCloudSun, FaWheelchair } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Orlando Travel Planning | Transportation, Weather & Tips | WTDI",
  description: "Plan your perfect Orlando vacation. Get travel tips, transportation info, weather guides, and everything you need to know for your Central Florida trip.",
  keywords: "Orlando travel planning, Orlando transportation, Orlando weather, Orlando travel tips, Orlando vacation planning, Orlando travel guide, Orlando maps",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/plan",
  },
  openGraph: {
    title: "Orlando Travel Planning - Transportation, Weather & Tips",
    description: "Plan your perfect Orlando vacation. Get travel tips, transportation info, weather guides, and everything you need to know for your Central Florida trip.",
    url: "https://what-to-do-in-orlando.web.app/plan",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/planning/orlando-planning.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando travel planning and vacation tips",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Travel Planning - Transportation, Weather & Tips",
    description: "Plan your perfect Orlando vacation. Get travel tips, transportation info, weather guides, and everything you need to know for your Central Florida trip.",
    images: ["/images/planning/orlando-planning.jpg"],
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

const planningCategories = [
  {
    name: "Travel Planning",
    description: "Essential tips and guides for planning your Orlando vacation",
    image: "/images/planning/travel-planning.jpg",
    icon: "📋",
    count: "50+",
    href: "/plan/travel-planning",
    topics: ["Itinerary Planning", "Budget Tips", "Booking Strategies", "Packing Lists"]
  },
  {
    name: "Transportation",
    description: "Getting around Orlando by car, public transit, and rideshare",
    image: "/images/planning/transportation.jpg",
    icon: "🚗",
    count: "10+",
    href: "/plan/transportation",
    topics: ["Car Rentals", "Public Transit", "Rideshare", "Parking"]
  },
  {
    name: "Weather",
    description: "Orlando weather patterns and best times to visit",
    image: "/images/planning/weather.jpg",
    icon: "🌤️",
    count: "12",
    href: "/plan/weather",
    topics: ["Seasonal Weather", "Rainy Season", "Hurricane Season", "Best Months"]
  },
  {
    name: "Maps & Directions",
    description: "Interactive maps and navigation guides for Orlando",
    image: "/images/planning/maps-directions.jpg",
    icon: "🗺️",
    count: "20+",
    href: "/plan/maps",
    topics: ["Interactive Maps", "Area Guides", "Navigation Tips", "Landmarks"]
  },
  {
    name: "Travel Tips",
    description: "Insider tips and advice for a smooth Orlando vacation",
    image: "/images/planning/travel-tips.jpg",
    icon: "💡",
    count: "100+",
    href: "/plan/travel-tips",
    topics: ["Money Saving", "Time Management", "Crowd Avoidance", "Local Secrets"]
  },
  {
    name: "Accessibility",
    description: "Accessibility information and services for visitors with disabilities",
    image: "/images/planning/accessibility.jpg",
    icon: "♿",
    count: "25+",
    href: "/plan/accessibility",
    topics: ["Wheelchair Access", "Service Animals", "Special Needs", "Accessible Attractions"]
  }
];

const essentialInfo = [
  {
    category: "Getting There",
    items: [
      { title: "Orlando International Airport (MCO)", description: "Main airport with domestic and international flights" },
      { title: "Orlando Sanford Airport (SFB)", description: "Secondary airport with budget airline options" },
      { title: "Car Rentals", description: "Available at both airports and throughout the city" },
      { title: "Shuttle Services", description: "Transportation to hotels and attractions" }
    ]
  },
  {
    category: "Getting Around",
    items: [
      { title: "Rental Cars", description: "Most convenient for families and theme park visits" },
      { title: "Public Transit", description: "LYNX bus system and SunRail commuter train" },
      { title: "Rideshare", description: "Uber and Lyft available throughout the area" },
      { title: "Theme Park Transportation", description: "Free shuttles from many hotels" }
    ]
  },
  {
    category: "Best Times to Visit",
    items: [
      { title: "Peak Season", description: "March-April (Spring Break) and June-August (Summer)" },
      { title: "Off-Peak Season", description: "January-February and September-October" },
      { title: "Holiday Periods", description: "Christmas, New Year, and major holidays are busiest" },
      { title: "Weather Considerations", description: "Hurricane season runs June-November" }
    ]
  }
];

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plan Your Orlando Vacation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Everything you need to know to plan the perfect Orlando trip. From transportation and weather to insider tips, 
              we'll help you create an unforgettable Central Florida vacation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaPlane className="mr-2" />
                <span>Travel Tips</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaCar className="mr-2" />
                <span>Transportation</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaCloudSun className="mr-2" />
                <span>Weather Guide</span>
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
            Your Complete Orlando Planning Guide
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Planning a trip to Orlando doesn't have to be overwhelming. Our comprehensive guides cover everything from 
            transportation and weather to money-saving tips and accessibility information to ensure your vacation is perfect.
          </p>
        </div>

        {/* Planning Categories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Planning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningCategories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={`${category.name} Orlando planning`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category.count} Resources
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
                      {category.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Essential Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {essentialInfo.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Planning Timeline */}
        <div className="bg-teal-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Planning Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                timeframe: "6-12 Months",
                tasks: ["Book flights", "Reserve hotels", "Plan major attractions"],
                priority: "High"
              },
              {
                timeframe: "3-6 Months",
                tasks: ["Book theme park tickets", "Make dining reservations", "Plan itinerary"],
                priority: "High"
              },
              {
                timeframe: "1-3 Months",
                tasks: ["Book tours/experiences", "Arrange transportation", "Check weather"],
                priority: "Medium"
              },
              {
                timeframe: "1 Week Before",
                tasks: ["Confirm reservations", "Pack essentials", "Download apps"],
                priority: "Medium"
              }
            ].map((period, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{period.timeframe}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  period.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {period.priority} Priority
                </span>
                <ul className="text-sm text-gray-600 space-y-1 mt-3">
                  {period.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>• {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Guide */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orlando Weather Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Winter (Dec-Feb)",
                weather: "60-75°F",
                description: "Pleasant weather, smaller crowds",
                activities: ["Theme parks", "Outdoor activities", "Golf"]
              },
              {
                season: "Spring (Mar-May)",
                weather: "70-85°F",
                description: "Peak season, spring break crowds",
                activities: ["Theme parks", "Festivals", "Outdoor dining"]
              },
              {
                season: "Summer (Jun-Aug)",
                weather: "85-95°F",
                description: "Hot and humid, afternoon storms",
                activities: ["Water parks", "Indoor attractions", "Evening events"]
              },
              {
                season: "Fall (Sep-Nov)",
                weather: "75-85°F",
                description: "Comfortable weather, hurricane season",
                activities: ["All activities", "Cultural events", "Outdoor dining"]
              }
            ].map((season, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{season.season}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{season.weather}</p>
                <p className="text-sm text-gray-600 mb-3">{season.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {season.activities.map((activity, actIndex) => (
                    <li key={actIndex}>• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Money-Saving Tips */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Money-Saving Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Strategies</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Book flights 2-3 months in advance for best prices</li>
                <li>• Consider package deals for hotels and tickets</li>
                <li>• Look for off-peak season discounts</li>
                <li>• Check for AAA, military, or senior discounts</li>
                <li>• Book directly with hotels for better rates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">During Your Trip</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Use grocery stores for snacks and drinks</li>
                <li>• Take advantage of free hotel breakfasts</li>
                <li>• Look for happy hour specials at restaurants</li>
                <li>• Use public transportation when possible</li>
                <li>• Check for free activities and events</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Orlando Trip?</h2>
          <p className="text-xl mb-6">Start planning your perfect Orlando vacation with our comprehensive guides and resources.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan/travel-planning"
              className="bg-white text-teal-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Planning
            </Link>
            <Link
              href="/explore"
              className="bg-white text-teal-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Attractions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 