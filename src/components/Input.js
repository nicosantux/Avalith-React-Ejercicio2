import React from 'react'

import styles from '../css/input.module.css'

const Input = ({ type, name, value, onChange, label, validateInputs }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        id={name}
        name={name}
        placeholder=" "
        type={type}
        value={value}
        onChange={onChange}
        onKeyUp={validateInputs}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export default Input
