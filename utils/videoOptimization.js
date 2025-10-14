export class VideoOptimizer {
  constructor() {
    this.videoCache = new Map();
    this.preloadQueue = [];
    this.maxPreload = 2; // Preload next 2 videos
  }

  // Preload video for better performance
  async preloadVideo(src) {
    if (this.videoCache.has(src)) {
      return this.videoCache.get(src);
    }

    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = src;
      video.muted = true;
      video.playsInline = true;

      video.onloadedmetadata = () => {
        this.videoCache.set(src, video);
        resolve(video);
      };

      video.onerror = reject;
    });
  }

  // Optimize video sources based on device and connection
  getOptimizedVideoSources(originalSources) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isSlowConnection = typeof navigator !== 'undefined' 
      ? navigator.connection 
        ? navigator.connection.saveData || 
          (navigator.connection.effectiveType && 
           ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType))
        : false
      : false;

    return originalSources.map(src => {
      if (isMobile || isSlowConnection) {
        // Return lower quality versions for mobile/slow connections
        return src.replace('.mp4', '-mobile.mp4');
      }
      return src;
    });
  }

  // Lazy load videos
  async lazyLoadVideo(element, src) {
    if (!element || !src) return;

    try {
      await this.preloadVideo(src);
      element.src = src;
      element.load();
    } catch (error) {
      console.warn('Failed to load video:', src, error);
    }
  }

  // Preload next videos in sequence
  preloadNextVideos(currentIndex, videoSources) {
    // Clear previous preload queue
    this.preloadQueue.forEach(video => {
      video.removeAttribute('src');
      video.load();
    });
    this.preloadQueue = [];

    // Preload next videos
    for (let i = 1; i <= this.maxPreload; i++) {
      const nextIndex = (currentIndex + i) % videoSources.length;
      const nextSrc = videoSources[nextIndex];
      
      if (!this.videoCache.has(nextSrc)) {
        this.preloadVideo(nextSrc).catch(console.warn);
      }
    }
  }

  // Clean up resources
  cleanup() {
    this.videoCache.clear();
    this.preloadQueue = [];
  }
}

// Singleton instance
export const videoOptimizer = new VideoOptimizer();

// Video quality configurations
export const VideoQuality = {
  DESKTOP: {
    width: 1920,
    height: 1080,
    bitrate: '2500k'
  },
  MOBILE: {
    width: 1280,
    height: 720,
    bitrate: '1500k'
  },
  SLOW_CONNECTION: {
    width: 854,
    height: 480,
    bitrate: '800k'
  }
};

// Utility to get appropriate video quality
export const getVideoQuality = () => {
  if (typeof window === 'undefined') return VideoQuality.DESKTOP;

  const isMobile = window.innerWidth < 768;
  const connection = navigator.connection;

  if (connection) {
    if (connection.saveData || ['slow-2g', '2g'].includes(connection.effectiveType)) {
      return VideoQuality.SLOW_CONNECTION;
    }
  }

  return isMobile ? VideoQuality.MOBILE : VideoQuality.DESKTOP;
};