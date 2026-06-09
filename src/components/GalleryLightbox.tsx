import React, { useEffect, useState } from 'react';
import { OptimizedImage } from './OptimizedImage';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  images: string[];
  open: boolean;
  initialIndex: number;
  title: string;
  location: string;
  onClose: () => void;
}

export function GalleryLightbox({
  images,
  open,
  initialIndex,
  title,
  location,
  onClose,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (!open) return;
    setCurrentIndex(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose, open]);

  useEffect(() => {
    if (!open) return;
    const next = currentIndex + 1;
    const prev = currentIndex - 1;
    [prev, next].forEach((index) => {
      if (index >= 0 && index < images.length) {
        const preload = new Image();
        preload.src = images[index];
      }
    });
  }, [currentIndex, images, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex flex-col bg-black/95 text-white">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/70 p-3 text-white transition hover:bg-black"
        aria-label="Close gallery"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="relative mx-auto flex h-full w-full max-w-[1800px] flex-col overflow-hidden px-4 py-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{title}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-black">
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 p-3 text-white transition hover:bg-black"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="absolute inset-0 flex items-center justify-center">
            <OptimizedImage
              src={images[currentIndex]}
              alt={`${title} photo ${currentIndex + 1}`}
              className="max-h-[calc(100vh-260px)] w-full object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 p-3 text-white transition hover:bg-black"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex overflow-x-auto pb-2">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative mr-2 flex h-20 min-w-[90px] overflow-hidden rounded-2xl border transition-all last:mr-0 ${
                currentIndex === index ? 'border-primary ring-2 ring-primary/30' : 'border-white/10'
              }`}
            >
              <OptimizedImage
                src={src}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-white">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryLightbox;
