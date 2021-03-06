import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import Notify from "../../services/Notify"
import IDetailProducts from "../../services/IDetailProducts"
import CartContext from "../../context/CartContext"

const ItemDetail = ({ id, name, imgUrl, stock, price, category, author, description }: IDetailProducts) => {
  const [quantity, setQuantity] = useState(0)
  const cartContext = useContext(CartContext)

  const handleBuy = () => {
    const product = {
      id, name, imgUrl, stock, price, category, author, description
    }
    cartContext?.addItem({...product, quantityToBuy: quantity})
    Notify.showAddSuccess();
    setQuantity(0);
  }

  const onAdd = (quantityToAdd: number) => {
    setQuantity(quantityToAdd)
  }

  return(
    <>
      <h1 className="text-3xl font-bold text-center my-4">{ name }</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center md:justify-end max-h-[720px]">
          <img className="object-contain" src={imgUrl} alt={name} /> 
        </div>
        <div className="flex flex-col justify-start gap-4">
          <p className="text-lg"><span className="font-bold">Precio:</span> ${price}</p>
          <div>
            <p className="font-bold">Descripción:</p>
            <p>{description}</p>
          </div>
          <p><span className="font-bold">Autor:</span> {author}</p>
          <p><span className="font-bold">Categoría:</span> {category}</p>
          <p><span className="font-bold">Stock:</span> {stock} unidad(es)</p>
          <p><span className="font-bold">ID del producto:</span> {id}</p>
          <div className="flex flex-col justify-center w-full md:w-3/4 lg:w-1/2">
            <p className="mb-2"><span className="font-bold">Cantidad: </span></p>
            <div className="flex flex-col items-center md:items-start gap-2 w-full mb-4">
              <ItemCount onAdd={onAdd} quantity={quantity} stock={stock} />
              {
                quantity > 0 && (
                  <>
                    <button onClick={ handleBuy } className="bg-yellow-500 hover:bg-yellow-400 text-white rounded-md py-1 px-4 transition duration-300 w-4/5 md:w-3/5 text-center">Agregar al carrito</button>
                    <Link to="/cart" onClick={ handleBuy } className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-md py-1 px-4 transition duration-300 w-4/5 md:w-3/5 text-center">Comprar Ahora</Link>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ItemDetail