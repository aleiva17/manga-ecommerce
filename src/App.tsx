import { useEffect, useState } from 'react'
import ItemListContainer from './components/sections/ItemListContainer'
import ProductsFetch from './components/services/ProductsFetch'
import IProducts from './components/services/IProducts'
import Header from './components/layout/Header/Header'
import Loader from './components/sections/Loader'

const App = () => {
  const [quantityProducts, setQuantityProducts] = useState(0)
  const [products, setProducts] = useState<IProducts[] | undefined>();

  useEffect(() => {
    ProductsFetch.getProducts().then(prods => {
      setProducts(prods)
    })
  }, [])

  const handleAddProduct = (cant: number) => {
    setQuantityProducts(quantityProducts + cant)
  }

  return (
    <>
      <Header quantityProducts={ quantityProducts } />
      <h1 className='text-center text-5xl font-semibold my-12'>Nuestros productos</h1>
      {
        products !== undefined ?
          <ItemListContainer products={products} addProduct={ handleAddProduct } /> :
          <Loader />
      }
    </>
  )
}

export default App
