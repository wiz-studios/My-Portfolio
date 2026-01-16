"use client"

import Image from "next/image"
import { useState } from "react"

type ProjectPreviewImageProps = {
  src: string
  fallbackSrc: string
  alt: string
  sizes?: string
  className?: string
}

export function ProjectPreviewImage({
  src,
  fallbackSrc,
  alt,
  sizes,
  className,
}: ProjectPreviewImageProps) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc)
        }
      }}
    />
  )
}
