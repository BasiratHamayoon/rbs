// Image optimization utility with lazy loading and caching
export class ImageOptimizer {
  constructor() {
    this.cache = new Map();
    this.observer = null;
    this.initIntersectionObserver();
  }

  // Initialize intersection observer for lazy loading
  initIntersectionObserver() {
    if (typeof window === 'undefined') return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          this.loadImage(img);
          this.observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
  }

  // Optimize image URL with WebP and quality parameters
  optimizeImageUrl(url, options = {}) {
    if (!url) return '/fallback-construction.jpg';
    
    const {
      width = 400,
      height = 300,
      quality = 80,
      format = 'webp'
    } = options;

    // If using a CDN that supports image optimization
    if (url.includes('cdn.') || url.includes('cloudinary') || url.includes('imgix')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}w=${width}&h=${height}&q=${quality}&format=${format}&fit=crop`;
    }

    // For local images, return original (consider using next/image in Next.js)
    return url;
  }

  // Preload images
  async preloadImages(urls) {
    const preloadPromises = urls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = this.optimizeImageUrl(url);
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
      });
    });

    return Promise.allSettled(preloadPromises);
  }

  // Lazy load image with cache
  lazyLoadImage(imgElement, src, fallback = '/fallback-construction.jpg') {
    if (!this.observer) return;

    const cacheKey = src;
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      imgElement.src = this.cache.get(cacheKey);
      imgElement.classList.remove('lazy');
      return;
    }

    // Set low-quality placeholder first
    const lqip = this.optimizeImageUrl(src, { quality: 10, width: 50 });
    imgElement.src = lqip;
    imgElement.classList.add('lazy');

    // Store original source for loading
    imgElement.dataset.src = this.optimizeImageUrl(src);
    imgElement.dataset.fallback = fallback;

    this.observer.observe(imgElement);
  }

  // Load image when in viewport
  loadImage(imgElement) {
    const src = imgElement.dataset.src;
    const fallback = imgElement.dataset.fallback;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      imgElement.src = src;
      imgElement.classList.remove('lazy');
      this.cache.set(src, src);
    };

    img.onerror = () => {
      console.warn(`Failed to load image: ${src}, using fallback`);
      imgElement.src = fallback;
      imgElement.classList.remove('lazy');
      this.cache.set(src, fallback);
    };
  }

  // Get image dimensions for proper loading
  async getImageDimensions(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => resolve({ width: 400, height: 300 });
      img.src = src;
    });
  }

  // Clear cache
  clearCache() {
    this.cache.clear();
  }

  // Preload critical images
  preloadCriticalImages() {
    const criticalImages = [
      '/Gallery/1.jpg',
      '/Gallery/5.jpg',
      '/Gallery/8.jpg',
      '/Gallery/12.jpg'
    ];

    return this.preloadImages(criticalImages);
  }
}

// Singleton instance
export const imageOptimizer = new ImageOptimizer();

// Fallback images mapping
export const fallbackImages = {
  Residential: "/Gallery/1.jpg",
  Commercial: "/Gallery/5.jpg",
  Hospitality: "/Gallery/8.jpg",
  Institutional: "/Gallery/12.jpg",
  Healthcare: "/Gallery/16.jpg",
  Infrastructure: "/Gallery/20.jpg",
  Houses: "/Projects/house1.jpg",
  Bathrooms: "/Projects/bath1.jpg",
  Kitchens: "/Projects/kitchen1.jpg",
  Stores: "/Projects/store1.jpg",
  Restaurants: "/Projects/resturent1.jpg",
  Buildings: "/Projects/buil1.jpg",
  Hospitals: "/Projects/hos1.jpg",
  Hotels: "/Projects/resturent1.jpg",
  default: "/fallback-construction.jpg"
};

export const getFallbackImage = (category) => {
  return fallbackImages[category] || fallbackImages.default;
};