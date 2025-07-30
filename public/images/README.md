# Image Organization Structure

This folder contains all images for the Orlando travel blog, organized by category for easy management and SEO optimization.

## Folder Structure

```
public/images/
├── logo/                 # Brand logo and assets
│   ├── wtdi-logo.png
│   ├── wtdi-logo-white.png
│   └── favicon.ico
├── theme-parks/           # Theme park images
│   ├── disney-world/
│   ├── universal-orlando/
│   ├── seaworld-orlando/
│   └── legoland-florida/
├── attractions/           # Other attractions
│   ├── international-drive/
│   ├── orlando-science-center/
│   └── cultural-sites/
├── hotels/               # Hotel and accommodation images
│   ├── luxury/
│   ├── budget/
│   └── near-theme-parks/
├── restaurants/          # Dining images
│   ├── fine-dining/
│   ├── casual/
│   ├── theme-park-dining/
│   └── local-favorites/
├── events/               # Event images
│   ├── festivals/
│   ├── concerts/
│   ├── sports/
│   └── seasonal/
├── activities/           # Activity images
│   ├── outdoor/
│   ├── water-sports/
│   ├── shopping/
│   └── nightlife/
├── blog/                 # Blog post images
│   ├── travel-tips/
│   ├── guides/
│   └── reviews/
├── destinations/         # Location images
│   ├── downtown-orlando/
│   ├── winter-park/
│   └── kissimmee/
└── general/             # General site images
    ├── hero-images/
    ├── icons/
    └── backgrounds/
```

## Image Naming Convention

- Use kebab-case: `disney-world-castle.jpg`
- Include dimensions for responsive images: `disney-world-castle-800x600.jpg`
- Add descriptive alt text in filenames: `universal-studios-harry-potter-ride.jpg`

## Image Formats

- **WebP** (preferred): Best compression, modern format
- **JPEG**: For photos with complex colors
- **PNG**: For images requiring transparency
- **SVG**: For icons and simple graphics

## Image Sizes

- **Hero Images**: 1920x1080px (16:9 ratio)
- **Card Images**: 800x600px (4:3 ratio)
- **Thumbnail Images**: 400x300px (4:3 ratio)
- **Icon Images**: 64x64px or 128x128px

## SEO Best Practices

1. **Descriptive Filenames**: Use keywords in image names
2. **Alt Text**: Always include meaningful alt text
3. **Compression**: Optimize images for web (under 500KB for hero images)
4. **Responsive**: Provide multiple sizes for different devices

## Usage Examples

```tsx
// Hero image
<Image
  src="/images/theme-parks/disney-world/disney-world-castle-hero.jpg"
  alt="Walt Disney World Cinderella Castle at sunset"
  width={1920}
  height={1080}
  priority={true}
/>

// Card image
<Image
  src="/images/restaurants/fine-dining/restaurant-interior.jpg"
  alt="Elegant restaurant interior with modern decor"
  width={800}
  height={600}
/>

// Blog image
<Image
  src="/images/blog/travel-tips/best-time-visit-orlando.jpg"
  alt="Orlando skyline during golden hour"
  width={1200}
  height={800}
/>
```
