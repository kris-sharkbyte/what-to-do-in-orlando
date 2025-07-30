# WTDI - What To Do In Orlando

A comprehensive travel blog website for Orlando, Florida built with Next.js 15, Tailwind CSS, and optimized for SEO. This site provides detailed guides for theme parks, attractions, restaurants, hotels, and travel planning in the Orlando area.

## Features

- **SEO Optimized**: Built with Next.js 15 for excellent search engine optimization
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Comprehensive Navigation**: Dropdown menus for easy exploration
- **Google Analytics Ready**: Pre-configured for tracking and insights
- **Google AdSense Ready**: Optimized for monetization
- **Firebase Hosting**: Configured for easy deployment
- **Fast Performance**: Static export for optimal loading speeds

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Deployment**: Firebase Hosting
- **Analytics**: Google Analytics
- **Monetization**: Google AdSense

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase CLI (for deployment)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd what-to-do-in-orlando
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Google Analytics

1. Replace `GA_MEASUREMENT_ID` in `src/app/layout.tsx` with your actual Google Analytics measurement ID.

### Google AdSense

1. Replace `YOUR_PUBLISHER_ID` in `src/app/layout.tsx` with your actual AdSense publisher ID.

### SEO Settings

Update the metadata in `src/app/layout.tsx`:

- Replace `your-google-verification-code` with your Google Search Console verification code
- Update the `metadataBase` URL to match your domain
- Customize Open Graph images and descriptions

## Deployment to Firebase

### 1. Build the Project

```bash
npm run build
```

This will create a static export in the `out` directory.

### 2. Initialize Firebase (First Time Only)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

When prompted:

- Select your Firebase project
- Use `out` as your public directory
- Configure as a single-page app: **No**
- Don't overwrite `firebase.json`

### 3. Deploy

```bash
npm run deploy
```

Or manually:

```bash
firebase deploy
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── explore/
│       └── theme-parks/
│           └── page.tsx    # Theme parks page
├── components/
│   └── Navigation.tsx      # Main navigation component
```

## Content Categories

The site is organized into these main sections:

- **Explore**: Theme parks, attractions, outdoor activities, shopping, entertainment, cultural sites
- **Things To Do**: Family activities, adventure & sports, water activities, nightlife, seasonal events, tours
- **Stay**: Hotels & resorts, vacation rentals, bed & breakfast, campgrounds, luxury accommodations
- **Dine**: Restaurants, theme park dining, local favorites, fine dining, food tours, cafes
- **Events**: Upcoming events, festivals, concerts, sports events, holiday events
- **Plan**: Travel planning, transportation, weather, maps & directions, travel tips, accessibility

## SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Ready for rich snippets
- **Canonical URLs**: Proper URL structure
- **Sitemap**: Auto-generated for search engines
- **Performance**: Optimized for Core Web Vitals

## Customization

### Adding New Pages

1. Create new directories in `src/app/` following the URL structure
2. Add `page.tsx` files with proper metadata exports
3. Update navigation in `src/components/Navigation.tsx`

### Styling

The site uses Tailwind CSS v4. Custom styles can be added to `src/app/globals.css`.

### Content Management

All content is currently static. For dynamic content, consider:

- Adding a CMS like Contentful or Strapi
- Implementing a database with Firebase Firestore
- Using markdown files for blog posts

## Performance Optimization

- Static export for fast loading
- **Image Optimization**: Automatic WebP conversion and compression
- **Responsive Images**: Multiple sizes generated automatically
- **Lazy Loading**: Images load only when needed
- **Minimal JavaScript Bundle**: Optimized for Core Web Vitals
- **CDN-Ready**: Optimized for global distribution

### Image Optimization

The project includes automatic image optimization:

1. **Pre-build Optimization**: Images are automatically optimized before each build
2. **WebP Conversion**: All images are converted to WebP format for smaller file sizes
3. **Responsive Sizes**: Multiple image sizes are generated for different screen sizes
4. **Compression**: Images are compressed while maintaining quality

To optimize images manually:

```bash
npm run optimize-images
```

**Supported Formats**: JPG, JPEG, PNG, WebP
**Output Format**: WebP (with fallbacks)
**Quality**: 85% (configurable)

## Analytics and Monetization

### Google Analytics Setup

1. Create a Google Analytics 4 property
2. Get your measurement ID
3. Replace `GA_MEASUREMENT_ID` in the layout file

### Google AdSense Setup

1. Apply for Google AdSense
2. Get your publisher ID
3. Replace `YOUR_PUBLISHER_ID` in the layout file
4. Add ad units to your content

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ for Orlando travelers**
