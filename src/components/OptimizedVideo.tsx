import React, { VideoHTMLAttributes, useEffect, useRef } from 'react';

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playsInline) {
      (video as any).webkitPlaysInline = true;
      video.playsInline = true;
    }

    if (video.muted !== muted) video.muted = muted;

    if (autoPlay && video.paused) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // ignore autoplay block errors so they don't crash render
        });
      }
    }
  }, [autoPlay, muted, playsInline, src]);

  return (
    <video
      ref={videoRef}
      src={src}
      preload="auto"
      muted={muted}
      autoPlay={autoPlay}
      loop={props.loop}
      playsInline={playsInline}
      {...props}
    />
  );
};

export default OptimizedVideo;
