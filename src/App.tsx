import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {
  const [quantityProducts, setQuantityProducts] = useState(0)

  return (
    <>
      <NavBar quantityProducts={ quantityProducts } />
      <ItemListContainer greetings={ 'Nuestros productos' } />
    </>
  )
}

export default App
