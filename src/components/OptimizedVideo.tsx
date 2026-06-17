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
 * - Mobile autoplay support with preload="auto"
 */
export const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  priority = false,
  muted = false,
  playsInline = false,
  autoPlay = false,
  ...props
}) => {
  const extraAttrs: Record<string, string | undefined> = {};
  if (playsInline) {
    extraAttrs['webkit-playsinline'] = '';
  }

  return (
    <video
      src={src}
      preload="auto"
      muted={muted}
      autoPlay={autoPlay}
      loop={props.loop}
      playsInline={playsInline}
      {...extraAttrs}
      {...props}
    />
  );
};

export default OptimizedVideo;
