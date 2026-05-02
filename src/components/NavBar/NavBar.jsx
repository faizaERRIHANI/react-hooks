import { useCartContext } from '../../context/CartContext.jsx'

/**
 * NavBar — barre de navigation principale.
 * Composant fourni — ne pas modifier la structure HTML.
 *
 * Props :
 *   searchQuery    : string   — valeur courante de la recherche
 *   onSearchChange : function — appelée à chaque frappe
 *   onCartClick    : function — appelée au clic sur le bouton panier
 */
export default function NavBar({ searchQuery, onSearchChange, onCartClick }) {
  // Étape 6 — useContext : récupération du nombre d'articles dans le panier
  const { cartCount } = useCartContext()

  return (
    <nav className="navbar navbar-dark bg-dark px-3 gap-3">
      <span className="navbar-brand fw-bold fs-4">
        <i className="bi bi-shop me-2"></i>React Shop
      </span>

      <input
  type="text"
  className="form-control"
  placeholder="Rechercher un produit..."
  value={searchQuery}
  onChange={onSearchChange}
/>

      <button
        className="btn btn-outline-light position-relative"
        onClick={onCartClick}
        aria-label="Ouvrir le panier"
      >
        <i className="bi bi-cart3 me-1"></i>Panier
        {cartCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  )
}