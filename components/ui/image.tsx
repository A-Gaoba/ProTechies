"use client"

import { useState, useEffect } from "react"
import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageProps extends NextImageProps {
  wrapperClassName?: string
}

export default function Image({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  priority = false,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // If not mounted yet, render a placeholder
  if (!isMounted) {
    return (
      <div
        className={cn("relative overflow-hidden bg-gray-200 dark:bg-gray-800 animate-pulse", wrapperClassName)}
        style={{ width, height }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {isLoading && !priority && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" aria-hidden="true" />
      )}

      {isError ? (
        <div
          className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
          style={{ width, height }}
        >
          <span className="text-sm">Failed to load image</span>
        </div>
      ) : (
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "transition-opacity duration-300",
            isLoading && !priority ? "opacity-0" : "opacity-100",
            className,
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setIsError(true)
          }}
          priority={priority}
          {...props}
        />
      )}
    </div>
  )
}
