import { useState } from 'react'
import ItemListContainer from './components/sections/ItemListContainer'
import ItemCount from './components/sections/ItemCount'
import Header from './components/layout/Header/Header'

const App = () => {
  const [quantityProducts, setQuantityProducts] = useState(0)

  const handleAddProduct = (cant: number) => {
    setQuantityProducts(quantityProducts + cant)
  }

  return (
    <>
      <Header quantityProducts={ quantityProducts } />
      <ItemListContainer greetings={ 'Nuestros productos' } />
      <div className='flex justify-center'>
        <ItemCount name="Steel Ball Run 01" imgUrl="http://www.editorialivrea.com/ESP/jojosbizarreadventure/jojo7-steelballrun01.jpg" stock={ 10 } addProductToCart={ handleAddProduct } />
      </div>
    </>
  )
}

export default App
