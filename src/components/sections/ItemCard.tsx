import { useState } from "react"

interface IItem {
  name: string,
  imgUrl: string,
  stock: number,
  price: number,
  addProductToCart: Function
}

const ItemCard = ({ name, imgUrl, stock, price, addProductToCart }: IItem) => {
  const [productStock, setProductStock] = useState({ original: stock, actual:stock })
  const [quantity, setQuantity] = useState(0)

  const handleDecrease = () => {
    if (quantity === 0) return
    setQuantity(quantity - 1)
    setProductStock({ ...productStock, actual: productStock.actual + 1 })
  }

  const handleIncrease = () => {
    if (productStock.actual === 0) return
    setQuantity(quantity + 1)
    setProductStock({ ...productStock, actual: productStock.actual - 1 })
  }

  const handleAddToCart = () => {
    addProductToCart(quantity)
    setProductStock({ original: productStock.original - quantity, actual: productStock.original - quantity })
    setQuantity(0)
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center font-semibold text-xl mb-1">{ name }</h2>
      <img className="h-[280px]" src={ imgUrl } alt={ `Portada de ${ name }` } />
      <small className="py-1">Stock: { productStock.actual }</small>
      <p className="font-semibold pb-1">Precio: ${ price }</p>
      
      <div className="flex justify-around border-solid border-2 border-indigo-600 text-accent-classic w-full rounded-md py-1 mb-2">
        <button className="hover:text-accent-light" onClick={ handleDecrease }>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>

        <span className="text-txt-secondary">{ quantity }</span>
          
        <button className="hover:text-accent-light" onClick={ handleIncrease }>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      <button className="border-solid border-2 border-accent-classic text-accent-classic rounded-md w-full py-1 hover:bg-accent-classic hover:text-txt-primary" onClick={ handleAddToCart }>Agregar al carrito</button>
    </div>
  )
}

export default ItemCard