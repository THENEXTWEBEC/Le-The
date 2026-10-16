/* eslint-disable @next/next/no-img-element -- Static export serves pre-generated WebP widths without an image server. */
import { responsiveSrcSet } from "@/lib/paths";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function ResponsiveImage({ src, alt, sizes, fill, width, height, priority = false }: Props) {
  return <img
    src={src}
    srcSet={responsiveSrcSet(src)}
    alt={alt}
    sizes={sizes}
    width={width}
    height={height}
    loading={priority ? "eager" : "lazy"}
    fetchPriority={priority ? "high" : undefined}
    decoding="async"
    style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%" } : undefined}
  />;
}
