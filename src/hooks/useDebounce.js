import { useState, useEffect } from 'react'

/**
 * useDebounce — retourne une copie "retardée" de `value`.
 * La valeur ne se met à jour qu'après `delay` ms sans changement.
 *
 * @param {any}    value — la valeur à déboncer (ex : searchQuery)
 * @param {number} delay — délai en millisecondes (ex : 400)
 * @returns {any}  debouncedValue
 *
 * =============================================================
 * TODO Étape 4
 * 1. Créer un état `debouncedValue` initialisé à `value`
 * 2. Ajouter un useEffect déclenché par [value, delay] :
 *      a. Démarrer un setTimeout qui met à jour debouncedValue après `delay` ms
 *      b. Retourner une fonction de nettoyage qui appelle clearTimeout
 *         (sans ce cleanup, chaque frappe accumule des timers !)
 * 3. Retourner debouncedValue
 * =============================================================
 */
export function useDebounce(value, delay) {
  // TODO
}
