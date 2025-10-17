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
      rootMargin: '100px 0px', // Increased for earlier loading
      threshold: 0.01
    });
  }

  // Get optimized image sources for carousel - ADD THIS METHOD
  getOptimizedImageSources(imageUrls, options = {}) {
    if (typeof window === 'undefined') return imageUrls;

    const {
      quality = 70, // Lower quality for faster loading
      width = 1920,
      height = 1080
    } = options;

    return imageUrls.map(url => this.optimizeImageUrl(url, { quality, width, height }));
  }

  // Optimize image URL
  optimizeImageUrl(url, options = {}) {
    if (!url) return url;
    
    const {
      width = 1920,
      height = 1080,
      quality = 70,
      format = 'webp'
    } = options;

    // For local images, use query parameters for optimization if supported
    // If using Next.js, consider using next/image instead
    if (url.startsWith('/') && !url.includes('?')) {
      // Simple optimization for local images
      return url;
    }

    // If using a CDN that supports image optimization
    if (url.includes('cdn.') || url.includes('cloudinary') || url.includes('imgix')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}w=${width}&h=${height}&q=${quality}&format=${format}&fit=cover`;
    }

    return url;
  }

  // Preload single image
  async preloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = this.optimizeImageUrl(url, { quality: 30, width: 800 }); // Lower quality for preload
      img.onload = () => resolve(url);
      img.onerror = () => reject(url);
      
      // Timeout for slow connections
      setTimeout(() => reject(url), 5000);
    });
  }

  // Preload next images in sequence
  async preloadNextImages(currentIndex, imageUrls) {
    const nextIndex = (currentIndex + 1) % imageUrls.length;
    const nextImageUrl = imageUrls[nextIndex];
    
    try {
      await this.preloadImage(nextImageUrl);
    } catch (error) {
      console.warn('Failed to preload next image:', nextImageUrl);
    }
  }

  // Preload multiple images
  async preloadImages(urls) {
    const preloadPromises = urls.map(url => this.preloadImage(url));
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
    const lqip = this.optimizeImageUrl(src, { quality: 10, width: 100 });
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

  // Get image dimensions
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

  // Cleanup
  cleanup() {
    if (this.observer) {
      this.observer.disconnect();
    }
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