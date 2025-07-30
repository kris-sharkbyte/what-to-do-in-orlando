# SEO Standards & Best Practices for WTDI - What To Do In Orlando

## Table of Contents

1. [Overview](#overview)
2. [Page-Level SEO](#page-level-seo)
3. [Content Strategy](#content-strategy)
4. [Keyword Strategy](#keyword-strategy)
5. [Technical SEO](#technical-seo)
6. [Local SEO](#local-seo)
7. [Image Optimization](#image-optimization)
8. [Performance Optimization](#performance-optimization)
9. [Monitoring & Analytics](#monitoring--analytics)
10. [Implementation Checklist](#implementation-checklist)

## Overview

This document outlines the SEO standards and best practices for WTDI - What To Do In Orlando, ensuring consistent optimization across all pages and content types.

### Primary Goals

- Rank for Orlando tourism and travel-related keywords
- Provide valuable, user-focused content
- Optimize for local search intent
- Maintain fast loading times and excellent user experience

## Page-Level SEO

### Metadata Structure

Every page should include comprehensive metadata:

```typescript
export const metadata: Metadata = {
  title: "Primary Keyword | Secondary Keyword | Brand Name",
  description:
    "Compelling 150-160 character description with primary keyword naturally integrated",
  keywords:
    "primary keyword, secondary keyword, related terms, local variations",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  metadataBase: new URL("https://what-to-do-in-orlando.web.app"),
  alternates: {
    canonical: "/page-url",
  },
  openGraph: {
    title: "Engaging Social Media Title",
    description: "Social media optimized description",
    url: "https://what-to-do-in-orlando.web.app/page-url",
    siteName: "WTDI - What To Do In Orlando",
    images: [
      {
        url: "/path/to/image.jpg",
        width: 1200,
        height: 630,
        alt: "Descriptive alt text",
      },
    ],
    locale: "en_US",
    type: "website", // or 'article' for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Optimized Title",
    description: "Twitter optimized description",
    images: ["/path/to/image.jpg"],
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
```

### URL Structure

Follow these URL patterns:

- **Homepage**: `/`
- **Category Pages**: `/explore/theme-parks`
- **Detail Pages**: `/explore/theme-parks/disney-world`
- **Blog Posts**: `/blog/YYYY/MM/DD/post-slug`
- **Static Pages**: `/about`, `/contact`, `/privacy`

### Heading Hierarchy

Use proper heading structure:

- **H1**: One per page, includes primary keyword
- **H2**: Main sections, includes secondary keywords
- **H3**: Subsections, includes long-tail keywords
- **H4-H6**: Supporting content structure

## Content Strategy

### Content Types & SEO Focus

#### 1. Attraction Pages

- **Primary Keywords**: "Disney World Orlando", "Universal Studios Orlando"
- **Secondary Keywords**: "Orlando theme parks", "Orlando attractions"
- **Content Elements**:
  - Detailed attraction information
  - Tips and insider knowledge
  - Practical visitor information
  - High-quality images with descriptive alt text

#### 2. Blog Posts

- **Primary Keywords**: Topic-specific + "Orlando"
- **Secondary Keywords**: Related activities, local context
- **Content Elements**:
  - Engaging headlines with keywords
  - Comprehensive, valuable content
  - Internal linking to related pages
  - Author information and publication dates

#### 3. Category Pages

- **Primary Keywords**: "Orlando theme parks", "Orlando restaurants"
- **Secondary Keywords**: Specific categories and activities
- **Content Elements**:
  - Overview of category
  - Featured listings
  - Category-specific tips
  - Call-to-action elements

### Content Guidelines

#### Writing for SEO

1. **Natural Keyword Integration**: Include keywords naturally in content
2. **User Intent Focus**: Answer what users are searching for
3. **Comprehensive Coverage**: Provide complete, valuable information
4. **Local Context**: Always include Orlando-specific information
5. **Fresh Content**: Regular updates and new content creation

#### Content Length Guidelines

- **Homepage**: 500-800 words
- **Category Pages**: 800-1,200 words
- **Detail Pages**: 1,200-2,000 words
- **Blog Posts**: 1,500-3,000 words

## Keyword Strategy

### Primary Keywords (Orlando Tourism)

#### High-Volume Keywords

- "things to do in Orlando"
- "Orlando attractions"
- "Orlando theme parks"
- "Orlando vacation"
- "Orlando travel guide"
- "Orlando tourism"

#### Long-Tail Keywords

- "best restaurants in Orlando"
- "Orlando hotels near Disney"
- "Orlando local events"
- "Orlando insider tips"
- "Orlando vacation planning"
- "Orlando local activities"

### Secondary Keywords (Specific Categories)

#### Theme Parks

- "Disney World Orlando"
- "Universal Studios Orlando"
- "SeaWorld Orlando"
- "Orlando theme park tickets"
- "Orlando theme park tips"

#### Dining & Entertainment

- "Orlando restaurants"
- "Orlando dining"
- "Orlando nightlife"
- "Orlando entertainment"
- "Orlando local food"

#### Accommodation

- "Orlando hotels"
- "Orlando resorts"
- "Orlando vacation rentals"
- "Orlando accommodation"
- "Orlando lodging"

### Local SEO Keywords

#### Neighborhood-Specific

- "International Drive Orlando"
- "Downtown Orlando"
- "Winter Park Orlando"
- "Lake Buena Vista Orlando"
- "Kissimmee Orlando"

#### Activity-Specific

- "Orlando shopping"
- "Orlando golf"
- "Orlando outdoor activities"
- "Orlando cultural sites"
- "Orlando museums"

## Technical SEO

### Performance Optimization

#### Core Web Vitals

- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100 milliseconds
- **Cumulative Layout Shift (CLS)**: < 0.1

#### Image Optimization

```typescript
// Use Next.js Image component with proper optimization
<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text with keywords"
  width={800}
  height={600}
  priority={true} // For above-the-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>
```

#### Loading Optimization

- Use `priority` prop for above-the-fold images
- Implement lazy loading for below-the-fold content
- Optimize font loading with `next/font`
- Minimize JavaScript bundles

### Structured Data

Implement JSON-LD structured data for:

- **Local Business**: For Orlando-specific information
- **Organization**: For brand information
- **Article**: For blog posts
- **Event**: For local events and activities
- **Review**: For attraction and restaurant reviews

Example:

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WTDI - What To Do In Orlando",
  description:
    "Your complete guide to the best things to do in Orlando, Florida",
  url: "https://what-to-do-in-orlando.web.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5383,
    longitude: -81.3792,
  },
};
```

## Local SEO

### Orlando-Specific Optimization

#### Geographic Keywords

- Include "Orlando, Florida" in titles and descriptions
- Use neighborhood names: "International Drive", "Downtown Orlando"
- Include distance references: "near Disney World", "close to Universal"

#### Local Business Information

- Consistent NAP (Name, Address, Phone) across all pages
- Local business schema markup
- Google My Business optimization
- Local review integration

#### Local Content Strategy

- Orlando-specific tips and insider knowledge
- Local event coverage
- Seasonal Orlando content
- Local business partnerships and mentions

## Image Optimization

### Alt Text Guidelines

- Include primary keyword naturally
- Be descriptive and helpful
- Keep under 125 characters
- Don't keyword stuff

Examples:

- ✅ "Walt Disney World Magic Kingdom Cinderella Castle Orlando"
- ❌ "Disney World Orlando theme park attraction castle princess"

### Image File Optimization

- Use WebP format when possible
- Compress images appropriately
- Use responsive images with proper sizes
- Implement lazy loading

## Performance Optimization

### Loading Speed

- Optimize images and assets
- Minimize HTTP requests
- Use CDN for static assets
- Implement caching strategies

### Mobile Optimization

- Responsive design
- Touch-friendly navigation
- Fast mobile loading times
- Mobile-first content structure

## Monitoring & Analytics

### Key Metrics to Track

- **Organic Traffic**: Monitor growth from search
- **Keyword Rankings**: Track target keyword positions
- **Click-Through Rate**: Optimize meta descriptions
- **Bounce Rate**: Improve content quality
- **Page Load Speed**: Maintain fast performance

### Tools & Implementation

- Google Search Console
- Google Analytics 4
- Core Web Vitals monitoring
- Keyword tracking tools
- Competitor analysis

## Implementation Checklist

### For New Pages

- [ ] Comprehensive metadata with target keywords
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Optimized images with descriptive alt text
- [ ] Internal linking to related pages
- [ ] Structured data markup
- [ ] Fast loading times (< 3 seconds)
- [ ] Mobile-responsive design
- [ ] Canonical URL set
- [ ] Open Graph and Twitter Card metadata

### For Blog Posts

- [ ] Article-specific metadata
- [ ] Publication date and author information
- [ ] Related articles section
- [ ] Social sharing optimization
- [ ] Internal linking strategy
- [ ] Category and tag organization

### For Attraction/Detail Pages

- [ ] Comprehensive attraction information
- [ ] Practical visitor details (hours, prices, tips)
- [ ] High-quality images and media
- [ ] Local context and Orlando-specific information
- [ ] Call-to-action elements
- [ ] Review and rating integration

### Regular Maintenance

- [ ] Update content regularly
- [ ] Monitor and fix broken links
- [ ] Optimize underperforming pages
- [ ] Add new content based on keyword opportunities
- [ ] Review and update meta descriptions
- [ ] Monitor Core Web Vitals

## Content Calendar & SEO Planning

### Monthly SEO Tasks

1. **Keyword Research**: Identify new opportunities
2. **Content Planning**: Create SEO-optimized content calendar
3. **Performance Review**: Analyze page performance
4. **Competitor Analysis**: Monitor competitor strategies
5. **Technical Audit**: Check for technical SEO issues

### Quarterly SEO Tasks

1. **Comprehensive Site Audit**: Full technical and content review
2. **Keyword Strategy Update**: Adjust based on performance
3. **Content Gap Analysis**: Identify missing content opportunities
4. **Local SEO Review**: Update local business information
5. **Performance Optimization**: Implement speed improvements

## Orlando-Specific SEO Opportunities

### Seasonal Content

- **Spring**: Spring break activities, Easter events
- **Summer**: Summer vacation planning, water parks
- **Fall**: Halloween events, fall festivals
- **Winter**: Holiday events, winter activities

### Local Event Coverage

- Orlando Magic games
- Local festivals and events
- Seasonal attractions
- Community events

### Partnership Opportunities

- Local businesses
- Tourism organizations
- Event venues
- Local influencers

---

## Quick Reference

### Meta Description Template

```
[Primary Action] + [Primary Keyword] + [Location] + [Value Proposition]
Example: "Discover the best things to do in Orlando, Florida with our complete travel guide. From theme parks to local attractions, plan your perfect Orlando vacation."
```

### Title Tag Template

```
[Primary Keyword] + [Secondary Keyword] | [Brand Name]
Example: "Things to Do in Orlando | Theme Parks & Attractions | WTDI"
```

### Alt Text Template

```
[What it is] + [Location] + [Context]
Example: "Walt Disney World Cinderella Castle Orlando theme park"
```

This SEO standards document should be reviewed and updated quarterly to ensure alignment with current best practices and search engine algorithms.
