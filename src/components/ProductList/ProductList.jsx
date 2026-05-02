import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../ProductCard/ProductCard'
import { useCartContext } from '../../context/CartContext.jsx'

function ProductList({ searchQuery, page, onPageChange }) {
  const { products, loading, pageCount } = useProducts(searchQuery, page)
  const { addToCart } = useCartContext()  // Étape 6 — récupération de la fonction

  if (loading) return <p>Chargement...</p>

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <div className="col" key={product.id}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          {Array.from({ length: pageCount }, (_, i) => (
            <li key={i} className={`page-item ${page === i+1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default ProductList