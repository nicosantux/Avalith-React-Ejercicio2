import React, { useState, useContext } from 'react'

import { ProductContext } from '../context/ProductsProvider'
import styles from '../css/form.module.css'

import Input from './Input'

const AddProductForm = () => {
  const { products, setProducts } = useContext(ProductContext)
  const [formValid, setFormValid] = useState(null)
  const [form, setForm] = useState({
    category: '',
    description: '',
    id: products.length + 1,
    image: '',
    price: '',
    title: '',
  })

  const validateInputs = () => {
    if (
      form.category.trim().length > 0 &&
      form.description.trim().length > 0 &&
      form.image.trim().length > 0 &&
      form.title.trim().length > 0 &&
      !Number.isNaN(Number(form.price)) &&
      form.price.trim().length > 0
    ) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formValid) {
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(form),
      }).then(() => {
        setProducts([...products, form])
        setForm({
          category: '',
          description: '',
          id: products.length + 1,
          image: '',
          price: '',
          title: '',
        })
        setFormValid(null)
      })
    } else {
      setFormValid(false)
    }
  }

  return (
    <div className={styles.container} id="add_product">
      <h1 className={styles.title}>Agregar un producto</h1>

      <form action="" autoComplete="off" className={styles.form_container} onSubmit={handleSubmit}>
        <Input
          id="title"
          label="Título"
          name="title"
          type="text"
          validateInputs={validateInputs}
          value={form.title}
          onChange={handleChange}
        />
        <Input
          id="category"
          label="Categoría"
          name="category"
          type="text"
          validateInputs={validateInputs}
          value={form.category}
          onChange={handleChange}
        />
        <Input
          id="price"
          label="Precio"
          name="price"
          type="text"
          validateInputs={validateInputs}
          value={form.price}
          onChange={handleChange}
        />
        <Input
          id="image"
          label="URL Imagen"
          name="image"
          type="text"
          validateInputs={validateInputs}
          value={form.image}
          onChange={handleChange}
        />
        <Input
          id="description"
          label="Descripción"
          name="description"
          type="text"
          validateInputs={validateInputs}
          value={form.description}
          onChange={handleChange}
        />
        <p className={styles.error}>
          {formValid === false && '* Completa el formulario correctamente'}
        </p>
        <button className={styles.btn} type="submit">
          Agregar Producto
        </button>
      </form>
    </div>
  )
}

export default AddProductForm
