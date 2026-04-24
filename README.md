# React Shop — TP Hooks React

Boutique en ligne pédagogique pour mettre en œuvre les hooks React fondamentaux :
`useState` · `useEffect` · `useContext` · `useCallback` · `useMemo` · hooks personnalisés.

---

## Mise en place

### 1. Cloner le dépôt

```bash
git clone https://github.com/<organisation>/react-shop-tp.git
cd react-shop-tp
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173) dans le navigateur.  
Vous devez voir la NavBar « React Shop », une zone principale vide et le Footer.

---

## Restitution du travail

À la fin de chaque étape, effectuer un commit avec le message indiqué.  
À la fin du TP, pousser votre travail sur la branche `main` :

```bash
git push origin main
```

> Pour chaque question ci-dessous, **compléter ce fichier README.md**
> avec votre réponse : capture d'écran, extrait de code ou explication.  
> Remplacer les blocs `<!-- RÉPONSE -->` par votre contenu.

---

## Étape 1 — `useState` : état de l'application

**Fichier à modifier :** `src/App.jsx`

Remplacer les trois variables figées par de vrais appels `useState`, puis câbler
les callbacks `onSearchChange`, `onCartClick`, `onPageChange` et `onClose`.

**Commit :** `step1: wire App state with useState`

---

### Q1.1 — À quoi sert le hook `useState` ?

Expliquer en 2-3 phrases le rôle de `useState` et pourquoi React nécessite ce
hook plutôt qu'une simple variable JavaScript.

<!-- RÉPONSE Q1.1 -->

---

### Q1.2 — Montrer votre implémentation des trois `useState`

Coller ici l'extrait de code correspondant aux trois déclarations d'état dans `App.jsx`.

```jsx
// RÉPONSE Q1.2 — vos trois useState ici

```

---

### Q1.3 — Capture d'écran : la modale s'ouvre et se ferme

Cliquer sur le bouton « Panier » puis sur « Fermer ».  
Joindre une capture montrant la modale ouverte (panier vide).

<!-- RÉPONSE Q1.3 — insérer l'image ci-dessous -->
![Modale ouverte](docs/screenshots/step1-modal.png)

---

## Étape 2 — Composants `ProductCard` et `ProductList`

**Fichiers à modifier :** `src/components/ProductCard/ProductCard.jsx`  
et `src/components/ProductList/ProductList.jsx`

1. Dans `ProductCard`, câbler le `onClick` du bouton « Ajouter au panier ».
2. Dans `ProductList`, remplacer le texte TODO par la grille Bootstrap de `ProductCard`.

> Pour tester sans l'API, utiliser ces données fictives dans `ProductList` :
>
> ```js
> const products = [
>   { id: 1, title: 'Produit test', price: 9.99, thumbnail: 'https://placehold.co/300x200', rating: 4.5 }
> ]
> ```

**Commit :** `step2: render ProductCard with Add to Cart`

---

### Q2.1 — Qu'est-ce que le « props drilling » ?

Expliquer en 2-3 phrases. Pourquoi pose-t-il problème quand l'arbre de composants est profond ?

<!-- RÉPONSE Q2.1 -->

---

### Q2.2 — Montrer le rendu de la grille

Coller ici la partie JSX du `.map()` dans `ProductList`.

```jsx
// RÉPONSE Q2.2 — votre map ici

```

---

### Q2.3 — Capture d'écran : la grille avec le produit fictif

<!-- RÉPONSE Q2.3 -->
![Grille de produits](docs/screenshots/step2-grid.png)

---

## Étape 3 — `useEffect` : chargement des données

**Fichier à modifier :** `src/hooks/useProducts.js`  
et `src/components/ProductList/ProductList.jsx` (brancher le hook + Pagination)

Implémenter `useProducts(searchQuery, page)` qui récupère les produits depuis :

- `https://dummyjson.com/products?limit=12&skip=N` (navigation)
- `https://dummyjson.com/products/search?q=MOT&limit=12&skip=N` (recherche)

**Commit :** `step3: fetch products with useEffect, pagination`

---

### Q3.1 — Pourquoi utiliser `useEffect` pour les appels réseau ?

Expliquer pourquoi on ne peut pas placer un `fetch()` directement dans le corps
du composant (ou du hook). Quel problème cela provoquerait-il ?

<!-- RÉPONSE Q3.1 -->

---

### Q3.2 — Quel est le rôle du tableau de dépendances `[searchQuery, page]` ?

Que se passerait-il si ce tableau était vide `[]` ?  
Et si on l'omettait complètement ?

<!-- RÉPONSE Q3.2 -->

---

### Q3.3 — Montrer votre implémentation du `useEffect` dans `useProducts`

```js
// RÉPONSE Q3.3 — votre useEffect ici

```

---

### Q3.4 — Capture d'écran : les produits s'affichent, la pagination fonctionne

Joindre une capture montrant la page 2 chargée.

<!-- RÉPONSE Q3.4 -->
![Produits page 2](docs/screenshots/step3-page2.png)

---

## Étape 4 — Hook personnalisé `useDebounce`

**Fichier à modifier :** `src/hooks/useDebounce.js` et `src/App.jsx`

Implémenter `useDebounce(value, delay)` puis l'utiliser dans `App.jsx` :

```js
const debouncedQuery = useDebounce(searchQuery, 400)
```

Passer `debouncedQuery` (et non `searchQuery`) à `ProductList`.

**Commit :** `step4: add useDebounce custom hook`

---

### Q4.1 — Qu'est-ce que le debounce et pourquoi est-il utile ici ?

Décrire ce qui se passerait sans debounce quand l'utilisateur tape rapidement.

<!-- RÉPONSE Q4.1 -->

---

### Q4.2 — Quel est le rôle de la fonction de nettoyage (cleanup) retournée par `useEffect` ?

Expliquer pourquoi `return () => clearTimeout(timer)` est indispensable dans ce cas précis.

<!-- RÉPONSE Q4.2 -->

---

### Q4.3 — Montrer votre implémentation complète de `useDebounce`

```js
// RÉPONSE Q4.3 — useDebounce complet

```

---

### Q4.4 — Preuve du debounce dans les DevTools réseau

Ouvrir l'onglet Réseau du navigateur, taper rapidement « phone » lettre par lettre.
Joindre une capture montrant qu'une seule requête est envoyée après la pause.

<!-- RÉPONSE Q4.4 -->
![Debounce réseau](docs/screenshots/step4-debounce.png)

---

## Étape 5 — Hook personnalisé `useCart` : `useCallback` + `useMemo`

**Fichiers à modifier :** `src/hooks/useCart.js` et `src/context/CartContext.jsx`

Implémenter `useCart()` avec :

- `useState` pour l'état du panier (initialisé depuis `localStorage`)
- `useEffect` pour synchroniser le panier vers `localStorage`
- `addToCart`, `removeFromCart`, `clearCart` avec `useCallback`
- `cartCount` et `cartTotal` avec `useMemo`

Puis brancher `useCart()` dans `CartContext.jsx`.

**Commit :** `step5: implement useCart with localStorage`

---

### Q5.1 — Pourquoi utiliser `useCallback` pour `addToCart`, `removeFromCart` et `clearCart` ?

Quel problème survient si ces fonctions sont recréées à chaque rendu ?
En quoi cela est-il particulièrement problématique quand elles sont passées via un contexte ?

<!-- RÉPONSE Q5.1 -->

---

### Q5.2 — Pourquoi utiliser `useMemo` pour `cartCount` et `cartTotal` ?

Quelle est la différence entre `useMemo` et `useCallback` ?

<!-- RÉPONSE Q5.2 -->

---

### Q5.3 — Montrer votre implémentation de `addToCart` avec `useCallback`

Attention : si le produit est déjà dans le panier, incrémenter la quantité plutôt
que d'ajouter un doublon.

```js
// RÉPONSE Q5.3 — addToCart avec useCallback

```

---

### Q5.4 — Preuve de la persistance localStorage

Ajouter 2-3 produits, rafraîchir la page (F5), vérifier que le panier est restauré.  
Joindre une capture de l'onglet Application > localStorage dans les DevTools.

<!-- RÉPONSE Q5.4 -->
![localStorage](docs/screenshots/step5-localstorage.png)

---

## Étape 6 — `useContext` : consommation du contexte

**Fichiers à modifier :**

- `src/components/NavBar/NavBar.jsx` — badge du panier
- `src/components/ProductList/ProductList.jsx` — `addToCart`
- `src/components/CartModal/CartModal.jsx` — affichage, suppression, vidage

**Commit :** `step6: consume CartContext in components`

---

### Q6.1 — Quel problème `useContext` résout-il par rapport au props drilling ?

Tracer le chemin qu'aurait dû suivre `addToCart` sans contexte (de `App` jusqu'à `ProductCard`).
Comparer avec le chemin avec `useContext`.

<!-- RÉPONSE Q6.1 -->

---

### Q6.2 — Montrer l'appel à `useCartContext()` dans `CartModal`

```jsx
// RÉPONSE Q6.2 — destructuration depuis useCartContext()

```

---

### Q6.3 — Montrer le rendu d'un article dans la liste du panier

Coller ici le JSX d'un `<li>` de la liste, avec le titre, la quantité, le prix et le bouton supprimer.

```jsx
// RÉPONSE Q6.3 — JSX d'un article du panier

```

---

### Q6.4 — Capture d'écran : panier fonctionnel

Ajouter au moins 2 produits différents (dont un en double), ouvrir la modale.  
Joindre une capture montrant : le badge correct sur le bouton, les articles listés
avec leurs quantités et le total affiché.

<!-- RÉPONSE Q6.4 -->
![Panier fonctionnel](docs/screenshots/step6-cart.png)

---

## Étape 7 — Finitions et vérifications

Vérifier l'ensemble des fonctionnalités et soigner les cas limites.

**Commit :** `step7: polish and final verification`

---

### Checklist finale

Cocher chaque case après vérification :

- [ ] La recherche est débouncée (une seule requête après 400 ms de pause)
- [ ] La pagination fonctionne en mode navigation (sans recherche)
- [ ] Ajouter le même produit deux fois → la quantité s'incrémente (pas de doublon)
- [ ] Le panier est restauré après rafraîchissement de la page (F5)
- [ ] Le badge de la NavBar affiche le nombre total d'articles correct
- [ ] La suppression d'un article met à jour le badge et le total
- [ ] « Vider le panier » vide la liste et le localStorage
- [ ] Le total affiché dans la modale est correct

---

### Q7.1 — Bilan : quel hook vous a semblé le plus difficile à comprendre et pourquoi ?

<!-- RÉPONSE Q7.1 -->

---

### Q7.2 — Capture d'écran finale

Joindre une capture de l'application complète et fonctionnelle (grille de produits visible,
badge du panier non nul).

<!-- RÉPONSE Q7.2 -->
![Application finale](docs/screenshots/step7-final.png)

---

## Référence rapide des hooks utilisés

| Hook | Fichier(s) | Rôle |
| --- | --- | --- |
| `useState` | `App.jsx`, `useProducts.js`, `useCart.js`, `useDebounce.js` | Gérer les états locaux |
| `useEffect` | `useProducts.js`, `useCart.js`, `useDebounce.js` | Effets de bord (fetch, localStorage, timer) |
| `useContext` | `NavBar.jsx`, `ProductList.jsx`, `CartModal.jsx` | Consommer le contexte panier |
| `useCallback` | `useCart.js` | Mémoriser les fonctions du panier |
| `useMemo` | `useCart.js` | Calculer `cartCount` et `cartTotal` |

## Ressources

- [Documentation React — Hooks](https://react.dev/reference/react)
- [API dummyjson.com/products](https://dummyjson.com/docs/products)
- [Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
