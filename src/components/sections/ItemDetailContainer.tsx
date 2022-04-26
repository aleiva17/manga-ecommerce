import { useState, useEffect } from 'react'
import IDetailProducts from '../../services/IDetailProducts'
import Loader from './Loader'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState<IDetailProducts>()
  const { id }= useParams()

  useEffect(() => {
    if (id === undefined) return;
    getDoc(doc(firestoreDb, 'products', id.toString())).then(res => {
      const product: any = { id: id, ...res.data() }
      setItem(product);
    })
  }, [id])

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