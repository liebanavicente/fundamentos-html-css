import Link from "next/link";

export default function NotFound() {
  return (
    <main className="login-page">
      <section className="login-box">
        <h1>
          #404 <span>no encontrada</span>
        </h1>
        <p className="muted">Esta página no existe. Hasta los enlaces fallan: comprueba que la ruta esté bien escrita.</p>
        <Link className="button primary" href="/lecciones">
          Ir a las lecciones
        </Link>
      </section>
    </main>
  );
}
