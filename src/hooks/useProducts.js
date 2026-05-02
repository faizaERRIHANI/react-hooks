import { useState, useEffect } from 'react'

export function useProducts(searchQuery, page) {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const LIMIT = 12

  useEffect(() => {
    setLoading(true)
    const skip = (page - 1) * LIMIT
    const url = searchQuery
      ? `https://dummyjson.com/products/search?q=${searchQuery}&limit=${LIMIT}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setTotal(data.total)
      })
      .finally(() => setLoading(false))
  }, [searchQuery, page])

  return { products, total, loading, pageCount: Math.ceil(total / LIMIT) }
}