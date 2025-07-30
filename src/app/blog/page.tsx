import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import { FaCalendarAlt, FaUser, FaArrowRight, FaStar } from 'react-icons/fa';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Brewlando Wizards: Orlando's Premier Magic: The Gathering Community",
      excerpt: "Discover Orlando's most laid-back Magic: The Gathering community playing Commander and Cube at Brewlando every Wednesday. Join 20-30 players for beer, games, and good times.",
      author: "Orlando Guide Team",
      date: "January 14, 2024",
      category: "Gaming",
      image: "/images/blog/2025/07/30/brewlando-wizards/brewlando-wizards.jpg",
      href: "/blog/2025/07/30/brewlando-wizards",
      featured: true,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Orlando's Theme Parks",
      excerpt: "Everything you need to know about visiting Walt Disney World, Universal Orlando, and other theme parks in the Orlando area.",
      author: "Orlando Guide Team",
      date: "January 10, 2024",
      category: "Theme Parks",
      image: "/images/blog/theme-parks-guide.jpg",
      href: "/blog/theme-parks-guide",
      featured: false,
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Hidden Gems: Local Orlando Restaurants You Need to Try",
      excerpt: "Beyond the theme parks, Orlando has a thriving food scene. Here are our favorite local spots that tourists often miss.",
      author: "Orlando Guide Team",
      date: "January 8, 2024",
      category: "Dining",
      image: "/images/blog/local-restaurants.jpg",
      href: "/blog/local-restaurants",
      featured: false,
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Family-Friendly Activities in Orlando Beyond the Parks",
      excerpt: "Looking for things to do in Orlando that don't involve theme parks? Here are some great family activities that won't break the bank.",
      author: "Orlando Guide Team",
      date: "January 5, 2024",
      category: "Family",
      image: "/images/blog/family-activities.jpg",
      href: "/blog/family-activities",
      featured: false,
      readTime: "7 min read"
    }
  ];

  const categories = [
    { name: "All Posts", href: "/blog", active: true },
    { name: "Gaming", href: "/blog/gaming" },
    { name: "Theme Parks", href: "/blog/theme-parks" },
    { name: "Dining", href: "/blog/dining" },
    { name: "Family", href: "/blog/family" },
    { name: "Events", href: "/blog/events" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orlando Travel Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the best things to do in Orlando, from theme parks to hidden gems, local events, and insider tips for the perfect Orlando vacation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Article
          </h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FaUser className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read Article
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <FaUser className="w-3 h-3 mr-1" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <FaCalendarAlt className="w-3 h-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={post.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More
                      <FaArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Orlando Travel Tips
          </h2>
          <p className="text-xl mb-8">
            Get the latest Orlando travel guides, attraction updates, and exclusive deals delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WTDI</h3>
              <p className="text-gray-400">
                What To Do In Orlando - Your complete guide to the best things to do in Orlando, Florida.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/explore/theme-parks" className="hover:text-white">Theme Parks</Link></li>
                <li><Link href="/explore/attractions" className="hover:text-white">Attractions</Link></li>
                <li><Link href="/explore/shopping" className="hover:text-white">Shopping</Link></li>
                <li><Link href="/explore/entertainment" className="hover:text-white">Entertainment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Plan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/stay/hotels" className="hover:text-white">Hotels</Link></li>
                <li><Link href="/dine/restaurants" className="hover:text-white">Restaurants</Link></li>
                <li><Link href="/events" className="hover:text-white">Events</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/plan/travel-planning" className="hover:text-white">Travel Tips</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Orlando Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 