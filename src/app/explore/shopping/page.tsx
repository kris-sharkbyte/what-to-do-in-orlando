import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingBag, FaMapMarkerAlt, FaClock, FaStar, FaCreditCard } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Orlando Shopping | Malls, Outlets & Retail | WTDI",
  description: "Discover the best shopping in Orlando. From luxury malls to outlet centers, find everything you need at Orlando's premier shopping destinations.",
  keywords: "Orlando shopping, Orlando malls, Orlando outlets, Orlando retail, Orlando shopping centers, Orlando stores, Orlando shopping districts",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/explore/shopping",
  },
  openGraph: {
    title: "Orlando Shopping - Malls, Outlets & Retail",
    description: "Discover the best shopping in Orlando. From luxury malls to outlet centers, find everything you need at Orlando's premier shopping destinations.",
    url: "https://what-to-do-in-orlando.web.app/explore/shopping",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/images/shopping/orlando-shopping.jpg",
        width: 1200,
        height: 630,
        alt: "Orlando shopping malls and retail centers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Shopping - Malls, Outlets & Retail",
    description: "Discover the best shopping in Orlando. From luxury malls to outlet centers, find everything you need at Orlando's premier shopping destinations.",
    images: ["/images/shopping/orlando-shopping.jpg"],
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

const shoppingDestinations = [
  {
    name: "The Mall at Millenia",
    description: "Luxury shopping destination featuring high-end retailers like Louis Vuitton, Gucci, and Apple Store.",
    image: "/images/shopping/mall-at-millenia.jpg",
    category: "Luxury Mall",
    rating: 4.6,
    price: "$$$",
    hours: "10:00 AM - 9:00 PM",
    location: "Millenia District",
    stores: ["Louis Vuitton", "Gucci", "Apple", "Bloomingdale's", "Macy's"]
  },
  {
    name: "Orlando International Premium Outlets",
    description: "Premium outlet shopping with over 180 stores offering designer brands at discounted prices.",
    image: "/images/shopping/orlando-outlets.jpg",
    category: "Outlet Center",
    rating: 4.4,
    price: "$$",
    hours: "9:00 AM - 10:00 PM",
    location: "Vineland Road",
    stores: ["Nike", "Adidas", "Coach", "Michael Kors", "Kate Spade"]
  },
  {
    name: "Disney Springs",
    description: "Disney-themed shopping and entertainment complex with unique boutiques and dining options.",
    image: "/images/shopping/disney-springs.jpg",
    category: "Entertainment Retail",
    rating: 4.5,
    price: "$$",
    hours: "10:00 AM - 11:00 PM",
    location: "Walt Disney World",
    stores: ["World of Disney", "Lego Store", "Uniqlo", "Sephora", "Zara"]
  },
  {
    name: "Florida Mall",
    description: "Central Florida's largest shopping center with over 250 stores and restaurants.",
    image: "/images/shopping/florida-mall.jpg",
    category: "Shopping Mall",
    rating: 4.3,
    price: "$$",
    hours: "10:00 AM - 9:00 PM",
    location: "South Orlando",
    stores: ["Macy's", "Nordstrom", "H&M", "Zara", "Sephora"]
  },
  {
    name: "Winter Park Village",
    description: "Charming outdoor shopping center with boutique stores and upscale dining options.",
    image: "/images/shopping/winter-park-village.jpg",
    category: "Boutique Retail",
    rating: 4.2,
    price: "$$",
    hours: "10:00 AM - 9:00 PM",
    location: "Winter Park",
    stores: ["Anthropologie", "Free People", "Lululemon", "Williams-Sonoma", "Pottery Barn"]
  },
  {
    name: "Pointe Orlando",
    description: "Entertainment and shopping complex featuring restaurants, bars, and retail stores.",
    image: "/images/shopping/pointe-orlando.jpg",
    category: "Entertainment Retail",
    rating: 4.1,
    price: "$$",
    hours: "11:00 AM - 11:00 PM",
    location: "International Drive",
    stores: ["H&M", "Forever 21", "Victoria's Secret", "Bath & Body Works", "Sunglass Hut"]
  }
];

export default function ShoppingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orlando Shopping
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the best shopping destinations in Orlando. From luxury malls to outlet centers, find everything you need at Central Florida's premier retail locations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaShoppingBag className="mr-2" />
                <span>500+ Stores</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaCreditCard className="mr-2" />
                <span>Tax-Free Shopping</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <FaClock className="mr-2" />
                <span>Extended Hours</span>
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
            Shop 'Til You Drop in Orlando
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Orlando is a shopper's paradise with everything from luxury boutiques to outlet centers. 
            With no state income tax on clothing and shoes, plus extended shopping hours, you'll find the perfect retail therapy experience.
          </p>
        </div>

        {/* Shopping Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {shoppingDestinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={destination.image}
                  alt={`${destination.name} Orlando shopping destination`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{destination.rating}/5</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{destination.price}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex items-center mb-1">
                    <FaClock className="mr-2" />
                    {destination.hours}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {destination.location}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Featured Stores:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.stores.slice(0, 3).map((store, storeIndex) => (
                      <span key={storeIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {store}
                      </span>
                    ))}
                    {destination.stores.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{destination.stores.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={`/explore/shopping/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Shopping Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Luxury Shopping", count: "50+", icon: "💎", description: "High-end designer stores" },
              { name: "Outlet Centers", count: "200+", icon: "🏷️", description: "Discounted brand names" },
              { name: "Entertainment Retail", count: "100+", icon: "🎭", description: "Shopping with experiences" },
              { name: "Boutique Stores", count: "75+", icon: "🛍️", description: "Unique local shops" }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-2">{category.count} stores</p>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Tips */}
        <div className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orlando Shopping Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Money-Saving Tips</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• No state sales tax on clothing and shoes</li>
                <li>• Look for outlet center coupons and deals</li>
                <li>• Visit during off-peak hours for better selection</li>
                <li>• Check for tourist discount programs</li>
                <li>• Consider shopping passes for multiple locations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Shopping Times</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Weekdays are typically less crowded</li>
                <li>• Early morning for outlet centers</li>
                <li>• Evening hours for mall shopping</li>
                <li>• Avoid weekends during peak tourist season</li>
                <li>• Check for extended holiday hours</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tax-Free Shopping Info */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax-Free Shopping in Florida</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">👕</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clothing & Shoes</h3>
              <p className="text-gray-600">No state sales tax on clothing and footwear under $60 per item</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🛍️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">School Supplies</h3>
              <p className="text-gray-600">Tax-free shopping on school supplies during designated periods</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Back-to-School</h3>
              <p className="text-gray-600">Annual tax-free shopping event for back-to-school items</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop Orlando?</h2>
          <p className="text-xl mb-6">Discover more shopping destinations and plan your perfect retail adventure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore/attractions"
              className="bg-white text-pink-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              More Attractions
            </Link>
            <Link
              href="/dine"
              className="bg-white text-pink-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Dining Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 