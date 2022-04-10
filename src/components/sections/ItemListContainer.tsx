import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from './ItemCard'
import IDetailProducts from '../services/IDetailProducts'
import ProductsFetch from '../services/ProductsFetch'
import Loader from './Loader'


const ItemListContainer = () => {
  const [products, setProducts] = useState<IDetailProducts[] | undefined>();
  const { id } = useParams();

  useEffect(() => {
    setProducts(undefined)
    if (id === undefined) {
      ProductsFetch.getProducts().then(prods => {
        setProducts(prods)
      })
    }
    else {
      ProductsFetch.getProductsByCategory(capitalize(id)).then(prods => {
        setProducts(prods)
      })
    }
  }, [id])
  
  const capitalize = (word: string) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <>
      {
        products === undefined ? <main className='flex justify-center items-center'>
          <Loader />
        </main> :
        <main>
          <h1 className='text-center text-5xl font-semibold my-12'>{ id !== undefined ? capitalize(id) : "Nuestros productos" }</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mx-12 mb-12'>
          {
            products.map(product => <ItemCard 
              key={product.id} 
              id = {product.id}
              name={product.name} 
              imgUrl={product.imgUrl} 
              stock={product.stock} 
              price={product.price}
            />) 
          }
          </div>
        </main>
      }
    </>
  )
}

export default ItemListContainer