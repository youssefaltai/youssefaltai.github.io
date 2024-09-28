"use client";

import Image from "next/image";

export default function ProjectGalleryImage({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <Image
      priority
      src={image}
      alt={alt}
      width={600}
      height={600}
      className="rounded-2xl object-cover object-center trans blur-transition"
      onLoad={(image) =>
        image.currentTarget.classList.remove("blur-transition")
      }
    />
  );
}
