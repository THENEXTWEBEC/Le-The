import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/catalogo/${product.slug}`} className="card-image" aria-label={`Ver ${product.name}`}>
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      </Link>
      <div className="card-copy">
        <div className="card-meta">{product.kind} <span>·</span> {product.flavor}</div>
        <h3><Link href={`/catalogo/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.description}</p>
        <Link href={`/catalogo/${product.slug}`} className="text-link">Conocer este té <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
