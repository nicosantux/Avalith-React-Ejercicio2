import React, { useState, useEffect } from 'react'

import Spinner from '../components/Spinner'

const ProductContext = React.createContext()

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {loading ? <Spinner /> : children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductsProvider }
