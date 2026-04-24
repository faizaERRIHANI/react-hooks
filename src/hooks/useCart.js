import { useState, useEffect, useCallback, useMemo } from 'react'

const STORAGE_KEY = 'react-shop-cart'

/**
 * useCart — gère le tableau du panier avec persistance localStorage.
 *
 * @returns {{
 *   cart         : Array,          — liste des articles { ...product, qty }
 *   addToCart    : (product) => void,
 *   removeFromCart : (id) => void,
 *   clearCart    : () => void,
 *   cartCount    : number,         — nombre total d'articles (somme des qty)
 *   cartTotal    : number          — prix total (somme de price × qty)
 * }}
 *
 * =============================================================
 * TODO Étape 5
 *
 * 1. useState — initialiser cart depuis localStorage :
 *      JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
 *
 * 2. useEffect([cart]) — synchroniser cart → localStorage :
 *      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
 *
 * 3. addToCart avec useCallback :
 *      Si le produit est déjà dans le panier → incrémenter qty
 *      Sinon → ajouter { ...product, qty: 1 }
 *      Penser à utiliser setCart(prev => ...) pour la mise à jour fonctionnelle
 *
 * 4. removeFromCart avec useCallback :
 *      Filtrer les articles dont l'id est différent de celui passé
 *
 * 5. clearCart avec useCallback :
 *      Vider le tableau : setCart([])
 *
 * 6. cartCount avec useMemo([cart]) :
 *      cart.reduce((somme, item) => somme + item.qty, 0)
 *
 * 7. cartTotal avec useMemo([cart]) :
 *      cart.reduce((somme, item) => somme + item.price * item.qty, 0)
 *
 * 8. Retourner tous les éléments ci-dessus
 * =============================================================
 */
export function useCart() {
  // TODO

  return {
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    cartCount: 0,
    cartTotal: 0,
  }
}
