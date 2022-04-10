import { useState, useEffect } from 'react'
import IDetailProducts from '../services/IDetailProducts'
import ProductsFetch from '../services/ProductsFetch'
import Loader from './Loader'
import ItemDetail from './ItemDetail'

interface IItemDetailContainer {
  id: number
}

const ItemDetailContainer = ({ id }: IItemDetailContainer) => {
  const [item, setItem] = useState<IDetailProducts>()

  useEffect(() => {
    ProductsFetch.getProductsById(id).then(prod => {
      setItem(prod)
    })
  }, [])

  return (
    <section className='flex flex-col flex-wrap justify-center items-center gap-4 m-8'>
      {
        item !== undefined ? 
          <ItemDetail id={item.id} name={item.name} author={item.author} category={item.category} description={item.description} imgUrl={item.imgUrl} price={item.price} stock={item.stock} /> :
          <Loader />
      }
      
    </section>
  )
}

export default ItemDetailContainer