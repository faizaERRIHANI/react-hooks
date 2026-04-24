/**
 * Footer — pied de page de l'application.
 * Composant fourni — ne pas modifier.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center small">
        <p className="mb-1">
          <i className="bi bi-shop me-1"></i>
          <strong>React Shop</strong> — TP Hooks React
        </p>
        <p className="text-secondary mb-0">
          Données fournies par{' '}
          <a
            href="https://dummyjson.com"
            target="_blank"
            rel="noreferrer"
            className="text-secondary"
          >
            dummyjson.com
          </a>{' '}
          · {year}
        </p>
      </div>
    </footer>
  )
}
