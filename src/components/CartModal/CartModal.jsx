import { useCartContext } from '../../context/CartContext.jsx'

/**
 * CartModal — modale d'affichage du panier.
 * Contrôlée par React (pas de bootstrap.Modal JS).
 *
 * Props :
 *   isOpen  : boolean  — afficher ou masquer la modale
 *   onClose : function — appelée pour fermer la modale
 *
 * =============================================================
 * TODO Étape 6 — useContext
 * Remplacer les 4 lignes de placeholders par :
 *   const { cart, removeFromCart, clearCart, cartTotal } = useCartContext()
 *
 * Puis :
 *   - Dans le .map() → afficher item.title, item.qty, item.price
 *   - Bouton "Supprimer" → onClick={() => removeFromCart(item.id)}
 *   - Bouton "Vider le panier" → onClick={clearCart}
 * =============================================================
 */
export default function CartModal({ isOpen, onClose }) {
  // TODO Étape 6 — remplacer par useCartContext()
  const cart = []
  const removeFromCart = () => {}
  const clearCart = () => {}
  const cartTotal = 0

  if (!isOpen) return null

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              <i className="bi bi-cart3 me-2"></i>Mon panier
            </h5>
            <button className="btn-close" onClick={onClose} aria-label="Fermer" />
          </div>

          <div className="modal-body">
            {cart.length === 0 ? (
              <p className="text-center text-muted py-4">
                <i className="bi bi-cart-x fs-1 d-block mb-2"></i>
                Votre panier est vide.
              </p>
            ) : (
              <ul className="list-group list-group-flush">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      {/* TODO Étape 6 : afficher item.title, item.qty et item.price */}
                      <span className="fw-semibold">Titre du produit</span>
                      <br />
                      <small className="text-muted">Qté : 0 × 0.00 $</small>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={undefined /* TODO : removeFromCart(item.id) */}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="modal-footer justify-content-between">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={undefined /* TODO : clearCart */}
              disabled={cart.length === 0}
            >
              <i className="bi bi-trash3 me-1"></i>Vider le panier
            </button>
            <div className="d-flex align-items-center gap-3">
              <span className="fw-bold fs-5">
                Total : {cartTotal.toFixed(2)} $
              </span>
              <button className="btn btn-secondary" onClick={onClose}>
                Fermer
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
