import React from 'react'

import styles from '../css/spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <h2 className={styles.title}>Loading</h2>
    </div>
  )
}

export default Spinner
