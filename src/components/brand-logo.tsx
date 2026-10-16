import Image from "next/image";
import { assetPath } from "@/lib/paths";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return <span className="logo-window"><Image src={assetPath("/images/logo-le-the-ecuador-transparente.webp")} alt="Le Thé Ecuador" fill sizes="112px" priority={priority} /></span>;
}
