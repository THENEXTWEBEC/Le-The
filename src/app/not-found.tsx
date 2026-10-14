import Link from "next/link";

export default function NotFound() {
  return <div className="container not-found"><p className="eyebrow">Página no encontrada</p><h1>Volvamos a empezar.</h1><p>Ese enlace ya no está disponible o aún no existe.</p><Link href="/" className="button button-primary">Ir al inicio</Link></div>;
}
