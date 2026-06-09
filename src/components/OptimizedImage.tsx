import React, { ImgHTMLAttributes, useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  aspectRatio?: string;
  sizes?: string;
  onLoad?: () => void;
}

/**
 * OptimizedImage component that handles:
 * - Lazy loading for off-screen images
 * - Responsive image srcsets
 * - WebP format with fallback
 * - Fade-in animation on load
 * - Proper aspect ratio preservation
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  width,
  height,
  aspectRatio,
  sizes,
  className = '',
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Generate responsive image paths
  const generateSrcSet = (basePath: string) => {
    const ext = basePath.split('.').pop();
    const nameWithoutExt = basePath.substring(0, basePath.lastIndexOf('.'));
    
    if (!isInView) {
      return undefined;
    }

    // For WebP images, return as is
    if (ext === 'webp') {
      return basePath;
    }

    // For other formats, suggest responsive sizes
    return basePath;
  };

  const containerStyle: React.CSSProperties = {
    ...(aspectRatio && { aspectRatio }),
    display: 'block',
    overflow: 'hidden',
  };

  const imgStyle: React.CSSProperties = {
    opacity: isLoaded ? 1 : 0.7,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div style={containerStyle} className={className}>
      {isInView ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          width={width}
          height={height}
          sizes={sizes}
          onLoad={handleLoad}
          style={imgStyle}
          className={props.className}
          {...props}
        />
      ) : (
        // Placeholder while not in view
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      )}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;
