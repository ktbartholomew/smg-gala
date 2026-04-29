"use client";

import { galleryImages, type GalleryImage } from "@/app/gallery-images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-slideshow-image";
import type { SlideshowRef } from "react-slideshow-image";

const nearbySlideRadius = 3;

function shuffleImages(images: readonly GalleryImage[]) {
  const shuffled = [...images];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

function isNearActiveSlide(index: number, activeIndex: number, total: number) {
  const distance = Math.abs(index - activeIndex);
  const wrappedDistance = total - distance;

  return Math.min(distance, wrappedDistance) <= nearbySlideRadius;
}

function GalleryArrow({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";

  return (
    <button className="gallery-arrow" onClick={onClick} type="button">
      <span className="sr-only">
        {isPrevious ? "Previous gallery image" : "Next gallery image"}
      </span>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d={
            isPrevious
              ? "M14.8 5.2 8 12l6.8 6.8"
              : "M9.2 5.2 16 12l-6.8 6.8"
          }
        />
      </svg>
    </button>
  );
}

export default function EventGallery() {
  const slideshowRef = useRef<SlideshowRef>(null);
  const [slides, setSlides] = useState<GalleryImage[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setSlides(shuffleImages(galleryImages));
  }, []);

  if (!slides) {
    return (
      <div className="gallery-shell gallery-loading" aria-hidden="true">
        <div className="gallery-image-placeholder" />
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="gallery-shell gallery-empty">
        Gallery photos will be available here soon.
      </div>
    );
  }

  return (
    <div className="gallery-shell">
      <Fade
        arrows={false}
        autoplay
        canSwipe
        cssClass="gallery-fade"
        duration={4000}
        easing="ease"
        indicators={false}
        infinite
        onChange={(_, to) => setActiveIndex(to)}
        onStartChange={(_, to) => setActiveIndex(to)}
        pauseOnHover={false}
        ref={slideshowRef}
        transitionDuration={900}
      >
        {slides.map((image, index) => {
          const shouldLoad = isNearActiveSlide(
            index,
            activeIndex,
            slides.length,
          );

          return (
            <div
              className="gallery-slide"
              data-active={index === activeIndex}
              key={image.id}
            >
              <div className="gallery-stage">
                <div className="gallery-image-frame">
                  {shouldLoad ? (
                    <Image
                      alt={image.alt}
                      className="gallery-image"
                      decoding="async"
                      height={image.slideHeight}
                      loading={index === activeIndex ? "eager" : "lazy"}
                      sizes="(max-width: 768px) calc(100vw - 2rem), 980px"
                      src={image.slideSrc}
                      unoptimized
                      width={image.slideWidth}
                    />
                  ) : (
                    <div className="gallery-image-placeholder" />
                  )}
                  <div className="gallery-frame-controls">
                    <GalleryArrow
                      direction="previous"
                      onClick={() => slideshowRef.current?.goBack()}
                    />
                    <GalleryArrow
                      direction="next"
                      onClick={() => slideshowRef.current?.goNext()}
                    />
                  </div>
                </div>
                <a
                  className="gallery-download-link"
                  href={image.originalSrc}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open full-size image
                </a>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
