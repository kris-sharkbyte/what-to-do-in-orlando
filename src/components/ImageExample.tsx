import OptimizedImage from './OptimizedImage';

// Example usage of optimized images
export default function ImageExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Hero image with priority loading */}
      <OptimizedImage
        src="/optimized/disney-world.webp"
        alt="Walt Disney World Resort"
        width={800}
        height={600}
        priority={true}
        className="rounded-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      {/* Regular image with lazy loading */}
      <OptimizedImage
        src="/optimized/universal-orlando.webp"
        alt="Universal Orlando Resort"
        width={600}
        height={400}
        className="rounded-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      {/* Responsive image with custom quality */}
      <OptimizedImage
        src="/optimized/seaworld-orlando.webp"
        alt="SeaWorld Orlando"
        width={500}
        height={300}
        quality={90}
        className="rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
} 