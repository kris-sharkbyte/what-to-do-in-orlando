import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { FaCalendarAlt, FaUser, FaMapMarkerAlt, FaClock, FaExternalLinkAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Brewlando Wizards: Orlando's Premier Magic: The Gathering Community | WTDI",
  description: "Discover Orlando's most laid-back Magic: The Gathering community playing Commander and Cube at Brewlando every Wednesday. Join 20-30 players for beer, games, and good times in Orlando's local gaming scene.",
  keywords: "Brewlando Wizards, Magic The Gathering Orlando, MTG Orlando, Commander EDH Orlando, Orlando gaming community, Orlando card games, Brewlando Brewing, Orlando local events, Orlando gaming groups, Magic The Gathering community Orlando, Orlando board games, Orlando card gaming, Orlando local activities, Orlando entertainment, Orlando nightlife, Orlando local scene, Orlando community events, Orlando gaming meetups, Orlando Magic players, Orlando Commander players, Orlando EDH community, Orlando cube draft, Orlando gaming venue, Orlando craft beer gaming, Orlando local gaming, Orlando Magic The Gathering events, Orlando gaming culture, Orlando local entertainment, Orlando community gaming, Orlando gaming scene, Orlando local gaming community",
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
    canonical: '/blog/2025/07/30/brewlando-wizards',
  },
  openGraph: {
    title: "Brewlando Wizards: Orlando's Premier Magic: The Gathering Community",
    description: "Discover Orlando's most laid-back Magic: The Gathering community playing Commander and Cube at Brewlando every Wednesday. Join 20-30 players for beer, games, and good times.",
    url: 'https://what-to-do-in-orlando.web.app/blog/2025/07/30/brewlando-wizards',
    siteName: 'WTDI - What To Do In Orlando',
    images: [
      {
        url: '/images/blog/2025/07/30/brewlando-wizards/brewlando-wizards.jpg',
        width: 1200,
        height: 630,
        alt: 'Brewlando Wizards Magic: The Gathering community in Orlando',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-01-14T00:00:00.000Z',
    modifiedTime: '2024-01-14T00:00:00.000Z',
    authors: ['WTDI - What To Do In Orlando'],
    section: 'Local Events',
    tags: ['Magic The Gathering', 'Orlando Gaming', 'Local Events', 'Commander', 'EDH', 'Brewlando'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brewlando Wizards: Orlando's Premier Magic: The Gathering Community",
    description: "Discover Orlando's most laid-back Magic: The Gathering community playing Commander and Cube at Brewlando every Wednesday. Join 20-30 players for beer, games, and good times.",
    images: ['/images/blog/2025/07/30/brewlando-wizards/brewlando-wizards.jpg'],
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
  other: {
    'article:published_time': '2024-01-14T00:00:00.000Z',
    'article:modified_time': '2024-01-14T00:00:00.000Z',
    'article:section': 'Local Events',
    'article:tag': 'Magic The Gathering, Orlando Gaming, Local Events, Commander, EDH, Brewlando',
  },
};

export default function BrewlandoWizardsBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/2025/07/30/brewlando-wizards/brewlando-wizards.jpg"
            alt="Brewlando Wizards Magic: The Gathering community"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center text-sm mb-4">
              <FaUser className="w-4 h-4 mr-2" />
              <span>Orlando Guide Team</span>
              <span className="mx-2">•</span>
              <FaCalendarAlt className="w-4 h-4 mr-2" />
              <span>January 14, 2024</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Brewlando Wizards: Orlando's Premier Magic: The Gathering Community
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover Orlando's most laid-back Magic: The Gathering community playing Commander and Cube at Brewlando every Wednesday. Join 20-30 players for beer, games, and good times.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Orlando is known for its world-famous theme parks, but there's a hidden gem in the local gaming scene that deserves attention: the Brewlando Wizards. This vibrant Magic: The Gathering community has been gathering every Wednesday at Brewlando Brewing, creating a unique blend of craft beer culture and strategic card gaming that's become a staple of Orlando's entertainment landscape.
            </p>

            <div className="my-12">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/blog/2025/07/30/brewlando-wizards/DSCF3902.jpg"
                  alt="Magic: The Gathering gameplay at Brewlando"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <p className="text-sm text-gray-500 text-center mt-2">Magic: The Gathering gameplay in action at Brewlando Brewing</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              More Than Just Card Games
            </h2>
            
            <p className="text-gray-600 mb-6">
              The Brewlando Wizards aren't just another gaming group—they're a community that believes the best games happen when you're surrounded by friends who love the game as much as you do. Whether you're a veteran player with a collection that could fill a library, or someone who's just curious about what all the fuss is about, you'll find a spot at their table.
            </p>

            <p className="text-gray-600 mb-8">
              "We're not a mystical sports team or sorcerer troupe," explains one of the group's organizers. "We're the Magic: The Gathering community that gathers every Wednesday at Brewlando Brewing in Orlando. Whether you're a seasoned planeswalker or you've never cast a spell before, Magic has never been as much fun as when you're playing with friends."
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Brewlando Wizards Special</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">•</span>
                  <span><strong>Casual Atmosphere:</strong> The focus is on fun over competition, making it perfect for players of all skill levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">•</span>
                  <span><strong>Commander (EDH) Focus:</strong> Their bread and butter format featuring 100-card singleton decks with legendary commanders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">•</span>
                  <span><strong>Cube Draft Events:</strong> Experience the thrill of drafting from their carefully curated cube collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">•</span>
                  <span><strong>New Player Friendly:</strong> Loaner decks available and experienced players eager to help newcomers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">•</span>
                  <span><strong>Great Location:</strong> Brewlando Brewing provides excellent craft beer and food options</span>
                </li>
              </ul>
            </div>

            <div className="my-12">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/blog/2025/07/30/brewlando-wizards/DSCF1443-Enhanced-NR.jpg"
                  alt="Brewlando Wizards community members"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <p className="text-sm text-gray-500 text-center mt-2">Community members enjoying games and camaraderie at Brewlando</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Gaming Experience
            </h2>

            <p className="text-gray-600 mb-6">
              Every Wednesday from 6:00 PM to 11:00 PM, the Brewlando Wizards transform the brewery into a gaming haven. The atmosphere is relaxed and welcoming, with players ranging from "I just learned what a mana cost is" to "I have a spreadsheet tracking my collection."
            </p>

            <p className="text-gray-600 mb-8">
              The group primarily focuses on Commander (EDH), the most popular casual format in Magic: The Gathering. This format allows for epic multiplayer battles where each player leads with a legendary creature as their commander. The singleton deck construction rule (only one copy of each card except basic lands) creates unique and varied gameplay experiences.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Commander (EDH) - The Heart of the Community
            </h3>

            <p className="text-gray-600 mb-6">
              Commander is the perfect format for the Brewlando Wizards' philosophy. It's designed for multiplayer games that emphasize social interaction, creative deck building, and memorable moments. The format's inherent variance and the singleton rule mean that every game is different, creating stories of spectacular victories, crushing defeats, and total buffoonery.
            </p>

            <p className="text-gray-600 mb-8">
              "That's why we gather every week," says a regular player. "To tell stories of spectacular victories, crushing defeats, and total buffoonery. Stories where lifelong friendships are forged over cardboard. Whatever your deck, whatever your story, we'd love to have you."
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cube Draft - Strategic Excellence
            </h3>

            <p className="text-gray-600 mb-8">
              For players looking for a different challenge, the group also offers Cube draft events. A Cube is a carefully curated collection of cards designed for drafting, creating a unique limited format experience. Every pick matters, every game is different, and the strategic depth is unmatched.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Venue: Brewlando Brewing
            </h2>

            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-24">
                <Image
                  src="/images/blog/2025/07/30/brewlando-wizards/brewlando-logo-black.png"
                  alt="Brewlando Brewing logo"
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              The choice of venue is no accident. Brewlando Brewing provides the perfect atmosphere for the gaming community. The craft brewery offers excellent beer selections, delicious food options, and a welcoming environment that enhances the social aspect of gaming.
            </p>

            <p className="text-gray-600 mb-8">
              The combination of great beer, good food, and strategic gameplay creates an experience that's uniquely Orlando. It's the kind of place where you can enjoy a craft IPA while planning your next move, or discuss deck strategies over a delicious meal.
            </p>

            <div className="bg-purple-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <span className="text-sm font-medium text-gray-500">Location</span>
                    <p className="text-gray-900">Brewlando Brewing, Orlando, FL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClock className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <span className="text-sm font-medium text-gray-500">Schedule</span>
                    <p className="text-gray-900">Every Wednesday, 6:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Community Impact
            </h2>

            <p className="text-gray-600 mb-6">
              The Brewlando Wizards have become more than just a gaming group—they're a cornerstone of Orlando's local entertainment scene. By providing a welcoming space for Magic: The Gathering enthusiasts, they're helping to grow the gaming community in Central Florida.
            </p>

            <p className="text-gray-600 mb-8">
              The group's commitment to inclusivity and new player support has helped introduce many people to the world of Magic: The Gathering. Their loaner deck program and patient teaching approach make it easy for newcomers to jump into the game without feeling intimidated.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why This Matters for Orlando
            </h2>

            <p className="text-gray-600 mb-6">
              Orlando is often associated with tourism and theme parks, but the city has a thriving local culture that includes gaming communities like the Brewlando Wizards. These groups provide residents and visitors alike with authentic local experiences that go beyond the typical tourist attractions.
            </p>

            <p className="text-gray-600 mb-8">
              For visitors looking to experience Orlando like a local, events like the Brewlando Wizards offer a unique opportunity to connect with the community and enjoy a different side of the city. It's the kind of experience that creates lasting memories and genuine connections.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Getting Involved
            </h2>

            <p className="text-gray-600 mb-6">
              Interested in joining the Brewlando Wizards? The process is simple: just show up on any Wednesday evening. The group welcomes players of all skill levels, and experienced players are always happy to help newcomers learn the ropes.
            </p>

            <p className="text-gray-600 mb-8">
              Don't have a deck? No problem! The group has loaner decks available for new players to try out different strategies. The focus is on having fun and building community, so there's no pressure to have the perfect deck or know all the rules immediately.
            </p>

            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join?</h3>
              <p className="text-gray-600 mb-6">
                The Brewlando Wizards meet every Wednesday from 6:00 PM to 11:00 PM at Brewlando Brewing in Orlando. Whether you're a seasoned planeswalker or just getting started, everyone is welcome at their weekly Magic: The Gathering nights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://brewlandowizards.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Visit Their Website
                  <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="mailto:brewlandowizards@gmail.com"
                  className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors inline-flex items-center justify-center"
                >
                  Contact the Group
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Future of Gaming in Orlando
            </h2>

            <p className="text-gray-600 mb-6">
              Groups like the Brewlando Wizards represent the growing trend of local gaming communities that provide social connections and entertainment beyond traditional venues. As Orlando continues to develop its local culture, these community-driven events become increasingly important.
            </p>

            <p className="text-gray-600 mb-8">
              The success of the Brewlando Wizards demonstrates that there's a demand for authentic, community-driven entertainment options in Orlando. Their model of combining gaming with local business partnerships (like Brewlando Brewing) creates a sustainable and enjoyable experience for everyone involved.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion
            </h2>

            <p className="text-gray-600 mb-6">
              The Brewlando Wizards exemplify what makes Orlando special beyond its famous attractions. They represent the city's diverse community, its commitment to local businesses, and its ability to create unique entertainment experiences that bring people together.
            </p>

            <p className="text-gray-600 mb-8">
              Whether you're a Magic: The Gathering enthusiast looking for a new community, a visitor wanting to experience Orlando like a local, or someone curious about the gaming scene, the Brewlando Wizards offer an authentic and welcoming experience that's worth checking out.
            </p>

            <p className="text-gray-600">
              So next time you're in Orlando on a Wednesday evening, consider stopping by Brewlando Brewing to see the Wizards in action. You might just discover a new favorite way to spend your evenings in the City Beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog/2025/07/30/brewlando-wizards/PXL_20250319_224337621.MP.jpg"
                  alt="Orlando local events"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">Events</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">
                  Orlando's Best Local Events and Activities
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the best local events and activities that make Orlando special beyond the theme parks.
                </p>
                <Link href="/blog/local-events" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog/2025/07/30/brewlando-wizards/DSCF3902.jpg"
                  alt="Orlando craft beer scene"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">Dining</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">
                  Orlando's Craft Beer Scene
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore Orlando's thriving craft beer scene and the best breweries in the area.
                </p>
                <Link href="/blog/craft-beer" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog/2025/07/30/brewlando-wizards/DSCF1443-Enhanced-NR.jpg"
                  alt="Orlando local communities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">Community</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">
                  Local Orlando Communities to Join
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Find your tribe in Orlando with these welcoming local communities and groups.
                </p>
                <Link href="/blog/craft-beer" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-8 mr-3">
                  <Image
                    src="/images/logo/wtdi-logo.png"
                    alt="WTDI Logo"
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <h3 className="text-xl font-bold">WTDI</h3>
              </div>
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