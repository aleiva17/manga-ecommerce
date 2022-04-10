import { useState, useEffect } from 'react'
import IDetailProducts from '../services/IDetailProducts'
import ProductsFetch from '../services/ProductsFetch'
import Loader from './Loader'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [item, setItem] = useState<IDetailProducts>()
  const { id }= useParams()

  useEffect(() => {
    id !== undefined && ProductsFetch.getProductsById(parseInt(id)).then(prod => {
      setItem(prod)
    })
  }, [])

  return (
    <>
      {
        item === undefined ? <Loader /> :
        <section className='flex flex-col flex-wrap justify-center items-center gap-4 m-8'>
          <ItemDetail id={item.id} name={item.name} author={item.author} category={item.category} description={item.description} imgUrl={item.imgUrl} price={item.price} stock={item.stock} />
        </section>
      }
    </>
  )
}

export default ItemDetailContainer