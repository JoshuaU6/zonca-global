import React, { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * OptimizedImage component that handles:
 * - Native lazy loading with browser support
 * - Priority loading for critical images
 * - Simple and reliable image optimization
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
};

export default OptimizedImage;
