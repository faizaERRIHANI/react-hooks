import { useState, useEffect } from 'react'

const BASE_URL = 'https://dummyjson.com/products'
export const PAGE_SIZE = 12

/**
 * useProducts — récupère les produits depuis l'API dummyjson.
 *
 * Endpoints :
 *   • Pagination : GET /products?limit=12&skip=N
 *   • Recherche  : GET /products/search?q=mot&limit=12&skip=N
 *
 * Réponse API : { products: [...], total: 194, skip: 0, limit: 12 }
 *
 * @param {string} searchQuery — mot-clé de recherche (vide = parcourir)
 * @param {number} page        — numéro de page, 1-based
 * @returns {{ products: Array, total: number, loading: boolean, error: string|null }}
 *
 * =============================================================
 * TODO Étape 3
 * 1. Déclarer 4 états : products (tableau), total (nombre),
 *    loading (booléen), error (null ou chaîne)
 *
 * 2. Ajouter un useEffect déclenché par [searchQuery, page] :
 *      a. Mettre loading à true et error à null
 *      b. Calculer skip = (page - 1) * PAGE_SIZE
 *      c. Construire l'URL :
 *           - Si searchQuery non vide → `${BASE_URL}/search?q=${searchQuery}&limit=${PAGE_SIZE}&skip=${skip}`
 *           - Sinon               → `${BASE_URL}?limit=${PAGE_SIZE}&skip=${skip}`
 *      d. Appeler fetch(url), convertir en JSON
 *      e. Mettre à jour products et total
 *      f. En cas d'erreur → mettre à jour error
 *      g. Dans un bloc finally → mettre loading à false
 *
 * 3. Retourner { products, total, loading, error }
 * =============================================================
 */
export function useProducts(searchQuery, page) {
  // TODO

  return { products: [], total: 0, loading: false, error: null }
}
