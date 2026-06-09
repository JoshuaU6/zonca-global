import React, { VideoHTMLAttributes } from 'react';

interface OptimizedVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  priority?: boolean;
}

/**
 * OptimizedVideo component that handles:
 * - Lazy loading support
 * - Priority loading for critical videos
 * - Native browser video optimization
 */
export const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  priority = false,
  ...props
}) => {
  return (
    <video
      src={src}
      preload={priority ? 'auto' : 'metadata'}
      {...props}
    />
  );
};

export default OptimizedVideo;
