import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaUtensils, FaMapMarkerAlt, FaStar, FaDollarSign, FaClock, FaUsers } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Orlando Restaurants & Dining | Best Places to Eat | WTDI",
  description: "Discover the best restaurants in Orlando. From fine dining to casual eateries, find delicious food and dining experiences throughout Central Florida.",
  keywords: "Orlando restaurants, Orlando dining, Orlando food, Orlando restaurants near Disney, Orlando fine dining, Orlando casual dining, Orlando local restaurants",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/dine",
  },
  openGraph: {
    title: "Orlando Restaurants & Dining - Best Places to Eat",
    description: "Discover the best restaurants in Orlando. From fine dining to casual eateries, find delicious food and dining experiences throughout Central Florida.",
    url: "https://what-to-do-in-orlando.web.app/dine",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/dining/orlando-restaurants.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando restaurants and dining",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Restaurants & Dining - Best Places to Eat",
    description: "Discover the best restaurants in Orlando. From fine dining to casual eateries, find delicious food and dining experiences throughout Central Florida.",
    images: ["/images/dining/orlando-restaurants.jpg"],
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

const diningCategories = [
  {
    name: "Restaurants",
    description: "Full-service restaurants with diverse cuisines and atmospheres",
    image: "/images/dining/restaurants.jpg",
    icon: "🍽️",
    count: "500+",
    href: "/dine/restaurants",
    cuisines: ["American", "Italian", "Asian", "Mexican"]
  },
  {
    name: "Theme Park Dining",
    description: "Unique dining experiences within Orlando's theme parks",
    image: "/images/dining/theme-park-dining.jpg",
    icon: "🎢",
    count: "100+",
    href: "/dine/theme-park-dining",
    cuisines: ["Character Dining", "Themed Restaurants", "Quick Service", "Fine Dining"]
  },
  {
    name: "Local Favorites",
    description: "Beloved local spots and hidden gems",
    image: "/images/dining/local-favorites.jpg",
    icon: "❤️",
    count: "200+",
    href: "/dine/local-favorites",
    cuisines: ["Southern", "Seafood", "BBQ", "Farm-to-Table"]
  },
  {
    name: "Fine Dining",
    description: "Upscale restaurants for special occasions",
    image: "/images/dining/fine-dining.jpg",
    icon: "🍷",
    count: "50+",
    href: "/dine/fine-dining",
    cuisines: ["Steakhouse", "Seafood", "International", "Wine Pairing"]
  },
  {
    name: "Food Tours",
    description: "Guided culinary experiences and tasting tours",
    image: "/images/dining/food-tours.jpg",
    icon: "🚶‍♂️",
    count: "20+",
    href: "/dine/food-tours",
    cuisines: ["Walking Tours", "Tasting Experiences", "Cultural Tours", "VIP Access"]
  },
  {
    name: "Cafes & Coffee",
    description: "Casual cafes, coffee shops, and bakeries",
    image: "/images/dining/cafes-coffee.jpg",
    icon: "☕",
    count: "150+",
    href: "/dine/cafes",
    cuisines: ["Coffee", "Pastries", "Light Meals", "Desserts"]
  }
];

const popularRestaurants = [
  {
    name: "Victoria & Albert's",
    description: "Disney's most prestigious fine dining restaurant with award-winning cuisine",
    rating: 4.9,
    price: "$$$$",
    cuisine: "Fine Dining",
    location: "Disney's Grand Floridian Resort",
    specialties: ["Tasting Menu", "Wine Pairing", "Chef's Table", "Romantic Atmosphere"]
  },
  {
    name: "The Ravenous Pig",
    description: "Award-winning gastropub featuring seasonal American cuisine and craft beer",
    rating: 4.7,
    price: "$$$",
    cuisine: "American Gastropub",
    location: "Winter Park",
    specialties: ["Craft Beer", "Seasonal Menu", "House-Made Charcuterie", "Local Ingredients"]
  },
  {
    name: "Se7en Bites",
    description: "Beloved bakery and cafe known for Southern comfort food and pastries",
    rating: 4.6,
    price: "$$",
    cuisine: "Southern Comfort",
    location: "Mills 50 District",
    specialties: ["Biscuits & Gravy", "Pastries", "Southern Classics", "Breakfast All Day"]
  },
  {
    name: "Capa at Four Seasons",
    description: "Rooftop steakhouse with stunning views and Spanish-inspired cuisine",
    rating: 4.8,
    price: "$$$$",
    cuisine: "Steakhouse",
    location: "Four Seasons Resort",
    specialties: ["Dry-Aged Steaks", "Spanish Tapas", "Rooftop Views", "Wine List"]
  },
  {
    name: "Domu",
    description: "Modern ramen house with creative Japanese-inspired dishes",
    rating: 4.5,
    price: "$$",
    cuisine: "Japanese",
    location: "East End Market",
    specialties: ["Ramen", "Small Plates", "Craft Cocktails", "Local Sourcing"]
  },
  {
    name: "The Polite Pig",
    description: "Fast-casual barbecue restaurant with house-smoked meats and craft beer",
    rating: 4.4,
    price: "$$",
    cuisine: "BBQ",
    location: "Disney Springs",
    specialties: ["House-Smoked Meats", "Craft Beer", "Southern Sides", "Quick Service"]
  }
];

export default function DinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orlando Dining & Restaurants
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Savor the flavors of Orlando. From world-class fine dining to beloved local spots, 
              discover the diverse culinary scene that makes Central Florida a food lover's paradise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaUtensils className="mr-2" />
                <span>1000+ Restaurants</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaUsers className="mr-2" />
                <span>All Cuisines</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaClock className="mr-2" />
                <span>Open Late</span>
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
            Taste the Best of Orlando
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Orlando's dining scene is as diverse as its attractions. From celebrity chef restaurants to hidden local gems, 
            theme park dining experiences to international cuisines, you'll find culinary adventures to satisfy every palate and budget.
          </p>
        </div>

        {/* Dining Categories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dining Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diningCategories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={`${category.name} Orlando dining`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category.count} Options
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
                      {category.cuisines.map((cuisine, cuisineIndex) => (
                        <span key={cuisineIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {cuisine}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Restaurants */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRestaurants.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{restaurant.name}</h3>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{restaurant.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Price:</span>
                      <span className="text-gray-600 ml-1">{restaurant.price}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Cuisine:</span>
                      <span className="text-gray-600 ml-1">{restaurant.cuisine}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      {restaurant.location}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.slice(0, 3).map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                      {restaurant.specialties.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{restaurant.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/dine/restaurants/${restaurant.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cuisine Guide */}
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orlando Cuisine Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cuisine: "American",
                description: "Classic comfort food and modern American fare",
                examples: ["Burgers", "Steaks", "BBQ", "Southern"]
              },
              {
                cuisine: "International",
                description: "Global flavors from around the world",
                examples: ["Italian", "Asian", "Mexican", "Mediterranean"]
              },
              {
                cuisine: "Theme Park",
                description: "Unique dining experiences within attractions",
                examples: ["Character Dining", "Themed Restaurants", "Quick Service"]
              },
              {
                cuisine: "Local Favorites",
                description: "Beloved spots and hidden gems",
                examples: ["Farm-to-Table", "Craft Beer", "Artisanal", "Family-Owned"]
              }
            ].map((cuisine, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cuisine.cuisine}</h3>
                <p className="text-sm text-gray-600 mb-3">{cuisine.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {cuisine.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Dining Tips */}
        <div className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orlando Dining Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Reservation Tips</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Book popular restaurants 2-4 weeks in advance</li>
                <li>• Theme park restaurants require early reservations</li>
                <li>• Check for special dining packages</li>
                <li>• Consider off-peak dining times</li>
                <li>• Look for restaurant week specials</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dining Etiquette</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Dress appropriately for fine dining</li>
                <li>• Tip 18-20% for good service</li>
                <li>• Check for dress codes in advance</li>
                <li>• Be patient during peak dining hours</li>
                <li>• Consider dietary restrictions when booking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Dine in Orlando?</h2>
          <p className="text-xl mb-6">Discover the best restaurants and plan your perfect dining experience in Orlando.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dine/restaurants"
              className="bg-white text-orange-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Restaurants
            </Link>
            <Link
              href="/dine/food-tours"
              className="bg-white text-orange-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Food Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 