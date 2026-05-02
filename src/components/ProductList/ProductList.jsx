import ProductCard from '../ProductCard/ProductCard'

const products = [
  { id: 1, title: 'Produit test', price: 9.99,
    thumbnail: 'https://placehold.co/300x200', rating: 4.5 }
]

function ProductList({ onPageChange }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map(product => (
        <div className="col" key={product.id}>
          <ProductCard product={product} onAddToCart={(p) => console.log(p)} />
        </div>
      ))}
    </div>
  )
}
export default ProductList