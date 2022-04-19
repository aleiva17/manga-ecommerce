import { useState } from "react"
import { Link } from 'react-router-dom'
import ItemCount from "./ItemCount"

interface IItem {
  id: number,
  name: string,
  imgUrl: string,
  stock: number,
  price: number
}

const ItemCard = ({ id, name, imgUrl, stock, price }: IItem) => {
  const [productStock, setProductStock] = useState(stock)
  const [quantity, setQuantity] = useState(0)
  
  const onAdd = (quantityToAdd: number) => {
    setQuantity(quantityToAdd)
  }

  const handleAddToCart = () => {
    setProductStock(productStock - quantity)
    setQuantity(0)
  }

  return (
    <div className="flex flex-col items-center w-100">
      <h2 className="text-center font-semibold text-xl mb-1">{ name }</h2>
      <img className="h-[280px]" src={ imgUrl } alt={ `Portada de ${ name }` } />
      <small className="py-1">Stock: { productStock }</small>
      <p className="font-semibold pb-1">Precio: ${ price }</p>
      
      <ItemCount stock={productStock} quantity={quantity} onAdd={onAdd} />

      <Link to={`/item/${id}`} className="text-center border-solid border-2 border-accent-classic text-accent-classic rounded-md w-4/5 md:w-3/5 py-1 hover:bg-accent-classic hover:text-txt-primary transition duration-300 mb-2">Ver detalle</Link>

      <button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-md py-1 transition duration-300 w-4/5 md:w-3/5" onClick={ handleAddToCart }>Agregar al carrito</button>
    </div>
  )
}

export default ItemCard