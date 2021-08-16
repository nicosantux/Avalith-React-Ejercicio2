import React from 'react'

import styles from '../css/product.module.css'

const Product = ({ description, image, title, price }) => {
  console.log(image)

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img alt={title} className={styles.image} src={image} />
      </div>
      <div className={styles.product}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>${price}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.btn_container}>
          <button className={styles.btn}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Product
