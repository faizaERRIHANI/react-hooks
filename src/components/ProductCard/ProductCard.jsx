function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card h-100">
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price} €</p>
        <p className="card-text">
          <small>⭐ {product.rating}</small>
        </p>
        <button
          className="btn btn-primary w-100"
          onClick={() => onAddToCart(product)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}
export default ProductCard