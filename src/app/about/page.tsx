import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaHeart, FaStar, FaGlobe, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "About WTDI - What To Do In Orlando | Your Trusted Orlando Travel Guide",
  description: "Learn about WTDI - What To Do In Orlando, your trusted source for Orlando travel guides, theme park tips, restaurant recommendations, and insider knowledge about the best things to do in Orlando, Florida.",
  keywords: "about WTDI, Orlando travel guide, Orlando tourism, Orlando vacation planning, Orlando insider tips, Orlando local guide, Orlando attractions guide, Orlando theme parks guide, Orlando restaurants guide, Orlando hotels guide, Orlando travel blog, Orlando vacation tips, Orlando tourism information, Orlando travel advice, Orlando local recommendations, Orlando tourist guide, Orlando vacation planning, Orlando travel planning, Orlando tourism guide, Orlando attractions information, Orlando theme parks information, Orlando restaurants information, Orlando hotels information, Orlando travel resources, Orlando vacation resources, Orlando tourism resources, Orlando travel help, Orlando vacation help, Orlando tourism help, Orlando travel support, Orlando vacation support, Orlando tourism support",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://what-to-do-in-orlando.web.app'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About WTDI - What To Do In Orlando | Your Trusted Orlando Travel Guide",
    description: "Learn about WTDI - What To Do In Orlando, your trusted source for Orlando travel guides, theme park tips, restaurant recommendations, and insider knowledge about the best things to do in Orlando, Florida.",
    url: 'https://what-to-do-in-orlando.web.app/about',
    siteName: 'WTDI - What To Do In Orlando',
    images: [
      {
        url: '/images/logo/wtdi-logo.png',
        width: 1200,
        height: 630,
        alt: 'WTDI - What To Do In Orlando About Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About WTDI - What To Do In Orlando | Your Trusted Orlando Travel Guide",
    description: "Learn about WTDI - What To Do In Orlando, your trusted source for Orlando travel guides, theme park tips, restaurant recommendations, and insider knowledge about the best things to do in Orlando, Florida.",
    images: ['/images/logo/wtdi-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AboutPage() {
  const teamValues = [
    {
      icon: FaHeart,
      title: "Passion for Orlando",
      description: "We're passionate about sharing the magic of Orlando with visitors from around the world."
    },
    {
      icon: FaShieldAlt,
      title: "Trusted Information",
      description: "All our recommendations are based on firsthand experiences and thorough research."
    },
    {
      icon: FaLightbulb,
      title: "Insider Knowledge",
      description: "Get access to local insights and tips that only Orlando experts can provide."
    },
    {
      icon: FaUsers,
      title: "Community Focused",
      description: "We're committed to helping visitors and locals alike discover the best of Orlando."
    }
  ];

  const stats = [
    { number: "50+", label: "Theme Parks & Attractions" },
    { number: "200+", label: "Restaurants Reviewed" },
    { number: "100+", label: "Hotels & Resorts" },
    { number: "1000+", label: "Happy Visitors Helped" }
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
              About WTDI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted guide to the best things to do in Orlando, Florida. We're passionate about helping visitors discover the magic of the Theme Park Capital of the World.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At WTDI - What To Do In Orlando, we believe that every visitor to Orlando deserves to experience the magic, excitement, and wonder that makes this city the world's most visited tourist destination. Our mission is to provide comprehensive, accurate, and insider knowledge about all the incredible things to do in Orlando, from world-famous theme parks to hidden local gems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Provide detailed guides to Orlando's theme parks and attractions</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Share insider tips and local recommendations</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Review restaurants, hotels, and entertainment options</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Help visitors plan the perfect Orlando vacation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose WTDI</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaStar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Local expertise and insider knowledge</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Comprehensive coverage of all Orlando attractions</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Up-to-date information and seasonal tips</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Honest, unbiased reviews and recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl">Helping thousands of visitors discover the best of Orlando</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're guided by these core principles in everything we do to help you discover the best of Orlando.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orlando Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Orlando?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Orlando, Florida is more than just a tourist destination – it's a place where dreams come true, where families create lasting memories, and where visitors from around the world experience the magic of the Theme Park Capital of the World. With its year-round sunshine, world-class attractions, and welcoming atmosphere, Orlando offers something for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Magic of Orlando</h3>
              <p className="text-gray-600 mb-4">
                From the enchanting world of Walt Disney World Resort to the thrilling adventures at Universal Orlando Resort, Orlando is home to some of the most iconic and beloved attractions in the world. Each theme park offers unique experiences that transport visitors to different worlds and create unforgettable memories.
              </p>
              <p className="text-gray-600">
                Beyond the theme parks, Orlando boasts a vibrant dining scene, luxury hotels and resorts, exciting entertainment options, and beautiful natural attractions. Whether you're seeking thrills on roller coasters, fine dining experiences, or peaceful nature walks, Orlando has something for every type of traveler.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Connection to Orlando</h3>
              <p className="text-gray-600 mb-4">
                As passionate Orlando enthusiasts, we've spent countless hours exploring every corner of this magical city. We've experienced the thrill of new roller coasters, discovered hidden local restaurants, and learned the best times to visit each attraction to maximize your enjoyment.
              </p>
              <p className="text-gray-600">
                Our deep connection to Orlando drives us to share our knowledge and help visitors plan the perfect vacation. We understand that every trip to Orlando is special, and we're committed to ensuring that your experience is nothing short of magical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore Orlando?
          </h2>
          <p className="text-xl mb-8">
            Start planning your perfect Orlando vacation with our comprehensive guides and insider tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/explore/theme-parks"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Theme Parks
            </Link>
            <Link 
              href="/plan/travel-planning"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Plan Your Trip
            </Link>
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
            <p>&copy; 2024 WTDI - What To Do In Orlando. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 