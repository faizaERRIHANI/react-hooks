import { useCartContext } from '../../context/CartContext.jsx'

export default function CartModal({ isOpen, onClose }) {
  const { cartItems, removeFromCart, clearCart, cartTotal } = useCartContext()

  if (!isOpen) return null

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Votre panier</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <p>Votre panier est vide.</p>
            ) : (
              <ul className="list-group">
                {cartItems.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{item.title} × {item.quantity}</span>
                    <span>
                      {(item.price * item.quantity).toFixed(2)} €
                      <button
                        className="btn btn-sm btn-danger ms-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✕
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <div className="fw-bold mt-3">Total : {cartTotal} €</div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Fermer
            </button>
            {cartItems.length > 0 && (
              <button type="button" className="btn btn-outline-danger" onClick={clearCart}>
                Vider le panier
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}