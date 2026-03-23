"use client";

import { useEffect, useState } from "react";

interface Props {
  images: { src: string; alt: string }[];
}

export default function ProjectImage({ images }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
