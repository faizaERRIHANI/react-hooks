import { useState } from 'react'
import { useDebounce } from './hooks/useDebounce'
import NavBar from './components/NavBar/NavBar'
import ProductList from './components/ProductList/ProductList'
import CartModal from './components/CartModal/CartModal'
import Footer from './components/Footer/Footer'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [page, setPage] = useState(1)

  const debouncedQuery = useDebounce(searchQuery, 400)  // ✅ INSIDE App

  return (
    <>
      <NavBar
        searchQuery={searchQuery}
        onSearchChange={(e) => { setSearchQuery(e.target.value); setPage(1) }}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main className="container my-4">
        <ProductList
          searchQuery={debouncedQuery}
          page={page}
          onPageChange={setPage}
        />
      </main>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </>
  )
}

export default App  // ✅ OBLIGATOIRE