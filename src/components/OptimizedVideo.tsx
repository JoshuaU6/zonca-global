import React, { VideoHTMLAttributes, useState, useEffect, useRef } from 'react';

interface OptimizedVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src'> {
  src: string;
  poster?: string;
  priority?: boolean;
  aspectRatio?: string;
}

/**
 * OptimizedVideo component that handles:
 * - Lazy loading for off-screen videos
 * - Preload control (metadata only until visible)
 * - Proper aspect ratio preservation
 * - Responsive sizing
 */
export const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  poster,
  priority = false,
  aspectRatio = '16/9',
  className = '',
  ...props
}) => {
  const [isInView, setIsInView] = useState(priority);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (priority || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [priority]);

  const containerStyle: React.CSSProperties = {
    aspectRatio,
    display: 'block',
    overflow: 'hidden',
    backgroundColor: '#000',
  };

  return (
    <div style={containerStyle} className={className}>
      <video
        ref={videoRef}
        src={isInView ? src : undefined}
        poster={poster}
        preload={isInView ? 'metadata' : 'none'}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedVideo;
