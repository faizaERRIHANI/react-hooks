import { useState } from 'react'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [page, setPage] = useState(1)

  return (
    <>
      <NavBar
        searchQuery={searchQuery}
        onSearchChange={(e) => { setSearchQuery(e.target.value); setPage(1) }}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main className="container my-4">
        <ProductList searchQuery={searchQuery} page={page} onPageChange={setPage} />
      </main>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </>
  )
}