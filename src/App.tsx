import { useEffect, useState } from 'react'
import ItemListContainer from './components/sections/ItemListContainer'
import ProductsFetch from './components/services/ProductsFetch'
import IDetailProducts from './components/services/IDetailProducts'
import Header from './components/layout/Header/Header'
import Loader from './components/sections/Loader'
import ItemDetailContainer from './components/sections/ItemDetailContainer'

const App = () => {
  const [quantityProducts, setQuantityProducts] = useState(0)
  const [products, setProducts] = useState<IDetailProducts[] | undefined>();

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
      {/* <h1 className='text-center text-5xl font-semibold my-12'>Nuestros productos</h1> */}
      {/* {
        products !== undefined ?
          <ItemListContainer products={products} addProduct={ handleAddProduct } /> :
          <Loader />
      } */}
      <ItemDetailContainer id={1} />
    </>
  )
}

export default App
