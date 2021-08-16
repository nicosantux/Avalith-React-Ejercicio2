import React, { useContext } from 'react'

import { ProductContext } from '../context/ProductsProvider'
import styles from '../css/catalogue.module.css'

import Product from './Product'

const Catalogue = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className={styles.container} id="catalogue">
      <h1 className={styles.title}>Catálogo de productos</h1>

      <div className={styles.catalogue}>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              description={product.description}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Catalogue
