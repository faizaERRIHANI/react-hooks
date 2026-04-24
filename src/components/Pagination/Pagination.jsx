/**
 * Pagination — navigation entre les pages de produits.
 *
 * Props :
 *   currentPage  : number   — page courante (1-based)
 *   totalPages   : number   — nombre total de pages
 *   onPageChange : function — appelée avec le nouveau numéro de page
 *
 * =============================================================
 * TODO Étape 3
 * Relier les boutons à onPageChange :
 *   Précédent → onPageChange(currentPage - 1)
 *   Suivant   → onPageChange(currentPage + 1)
 * Désactiver Précédent quand currentPage === 1
 * Désactiver Suivant   quand currentPage === totalPages
 * =============================================================
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <nav className="mt-4 d-flex justify-content-center align-items-center gap-3">
      <button
        className="btn btn-outline-secondary"
        disabled={currentPage === 1}
        onClick={undefined /* TODO : onPageChange(currentPage - 1) */}
      >
        <i className="bi bi-chevron-left me-1"></i>Précédent
      </button>

      <span className="text-muted small">
        Page {currentPage} / {totalPages}
      </span>

      <button
        className="btn btn-outline-secondary"
        disabled={currentPage === totalPages}
        onClick={undefined /* TODO : onPageChange(currentPage + 1) */}
      >
        Suivant<i className="bi bi-chevron-right ms-1"></i>
      </button>
    </nav>
  )
}
