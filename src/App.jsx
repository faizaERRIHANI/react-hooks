import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ProductList from './components/ProductList/ProductList.jsx'
import CartModal from './components/CartModal/CartModal.jsx'

export default function App() {
  // =============================================================
  // TODO Étape 1 — useState
  // Remplacer les trois lignes ci-dessous par de vrais appels useState :
  //   const [searchQuery, setSearchQuery] = useState('')
  //   const [isCartOpen, setIsCartOpen] = useState(false)
  //   const [currentPage, setCurrentPage] = useState(1)
  // =============================================================
  const searchQuery = ''
  const isCartOpen = false
  const currentPage = 1

  // =============================================================
  // TODO Étape 4 — useDebounce
  // Importer useDebounce depuis './hooks/useDebounce.js'
  // const debouncedQuery = useDebounce(searchQuery, 400)
  // =============================================================

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar
        searchQuery={searchQuery}
        onSearchChange={(_value) => {
          // TODO Étape 1 : appeler setSearchQuery(_value) et setCurrentPage(1)
        }}
        onCartClick={() => {
          // TODO Étape 1 : appeler setIsCartOpen(true)
        }}
      />

      <main className="flex-grow-1 container py-4">
        <ProductList
          searchQuery={searchQuery /* TODO Étape 4 : remplacer par debouncedQuery */}
          currentPage={currentPage}
          onPageChange={(_page) => {
            // TODO Étape 1 : appeler setCurrentPage(_page)
          }}
        />
      </main>

      <Footer />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => {
          // TODO Étape 1 : appeler setIsCartOpen(false)
        }}
      />
    </div>
  )
}
