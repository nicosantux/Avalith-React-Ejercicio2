import React from 'react'

import AddProductForm from './components/AddProductForm'
import Catalogue from './components/Catalogue'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Catalogue />
      <AddProductForm />
    </div>
  )
}

export default App
