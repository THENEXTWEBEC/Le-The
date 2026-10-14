import Image from "next/image";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return <span className="logo-window"><Image src="/images/logo-le-the-ecuador.png" alt="Le Thé Ecuador" fill sizes="112px" priority={priority} /></span>;
}
