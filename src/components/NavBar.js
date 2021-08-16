import React from 'react'

import styles from '../css/navbar.module.css'

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a className={styles.link} href="#catalogue">
          Catálogo
        </a>
        <a className={styles.link} href="#add_product">
          Agregar producto
        </a>
      </nav>
    </header>
  )
}

export default NavBar
