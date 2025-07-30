import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaHeart, FaCalendarAlt, FaExternalLinkAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function BrewlandoWizardsPage() {
  const eventDetails = {
    title: "Brewlando Wizards - Magic: The Gathering",
    description: "Join Orlando's premier Magic: The Gathering community every Wednesday for Commander and Cube games at Brewlando Brewing. Whether you're a seasoned planeswalker or just getting started, everyone is welcome!",
    location: "Brewlando Brewing, Orlando, FL",
    time: "Every Wednesday, 6:00 PM - 11:00 PM",
    rating: 4.9,
    category: "Gaming",
    website: "https://brewlandowizards.com/",
    contact: "brewlandowizards@gmail.com"
  };

  const gameTypes = [
    {
      title: "Commander (EDH)",
      description: "Our bread and butter. 100-card singleton decks with legendary commanders leading the charge. Perfect for epic multiplayer battles.",
      icon: "🎮"
    },
    {
      title: "Cube Draft",
      description: "Experience the thrill of drafting from our carefully curated cube. Every pick matters, every game is different.",
      icon: "🎲"
    }
  ];

  const whatToExpect = [
    "Casual Commander (EDH) games",
    "Cube draft events",
    "Friendly, welcoming atmosphere",
    "Players of all skill levels",
    "Great beer and food from Brewlando",
    "Loaner decks available for new players"
  ];

  const testimonials = [
    {
      text: "The best Magic community I've ever been part of. Everyone is so welcoming and the games are always fun!",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "Perfect place to learn Commander. The experienced players are really helpful and patient with newcomers.",
      author: "Mike R.",
      rating: 5
    },
    {
      text: "Great atmosphere, great beer, great games. What more could you ask for?",
      author: "David L.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Brewlando Wizards
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Orlando's Premier Magic: The Gathering Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={eventDetails.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Visit Website
                <FaExternalLinkAlt className="ml-2 w-4 h-4" />
              </a>
              <a 
                href={`mailto:${eventDetails.contact}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-6 h-6 ${i < Math.floor(eventDetails.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="ml-3 text-lg text-gray-600">{eventDetails.rating}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Brewlando Wizards
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                We're not a mystical sports team or sorcerer troupe—we're the Magic: The Gathering community that gathers every Wednesday at Brewlando Brewing in Orlando. Whether you're a seasoned planeswalker or you've never cast a spell before, Magic has never been as much fun as when you're playing with friends.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                That's why we gather every week - to tell stories of spectacular victories, crushing defeats, and total buffoonery. Stories where lifelong friendships are forged over cardboard. Whatever your deck, whatever your story, we'd love to have you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <FaMapMarkerAlt className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">{eventDetails.location}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <FaClock className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">When We Play</h3>
                    <p className="text-gray-600">{eventDetails.time}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Category</span>
                    <p className="text-gray-900">{eventDetails.category}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Location</span>
                    <p className="text-gray-900">{eventDetails.location}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Schedule</span>
                    <p className="text-gray-900">{eventDetails.time}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Contact</span>
                    <a href={`mailto:${eventDetails.contact}`} className="text-purple-600 hover:text-purple-800">
                      {eventDetails.contact}
                    </a>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Website</span>
                    <a href={eventDetails.website} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 flex items-center">
                      Visit Website
                      <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Play
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gameTypes.map((game, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-4xl mb-4">{game.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{game.title}</h3>
                <p className="text-gray-600">{game.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatToExpect.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Players Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            New Players Welcome!
          </h2>
          <p className="text-xl mb-8">
            Don't have a deck? No problem! We have loaner decks available and experienced players who love to help newcomers learn the game. Just show up and we'll get you playing in no time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Loaner Decks</h3>
              <p>We have decks available for new players to try out different strategies.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Friendly Community</h3>
              <p>Our experienced players are always happy to help newcomers learn the ropes.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-4">🍺</div>
              <h3 className="text-xl font-bold mb-2">Great Atmosphere</h3>
              <p>Enjoy craft beer and good food while playing your favorite card game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Join the Fun?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Come play with us every Wednesday at 6 PM! Whether you're a seasoned planeswalker or just getting started, everyone is welcome at our weekly Magic: The Gathering nights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={eventDetails.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              Visit Our Website
              <FaExternalLinkAlt className="ml-2 w-4 h-4" />
            </a>
            <a 
              href={`mailto:${eventDetails.contact}`}
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Contact Us
            </a>
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