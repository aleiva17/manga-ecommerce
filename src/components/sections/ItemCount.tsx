import { useState } from "react"

interface IItemCount {
  stock: number
  quantity: number
  onAdd: Function
}

const ItemCount = ({stock, quantity, onAdd}:IItemCount) => {
  
  const handleDecrease = () => {
    if (quantity === 0) return
    onAdd(quantity - 1)
  }

  const handleIncrease = () => {
    if (stock === 0 || quantity + 1 > stock) return
    onAdd(quantity + 1)
  }

  return (
    <div className="flex justify-around border-solid border-2 border-indigo-600 text-accent-classic w-4/5 md:w-3/5 rounded-md py-1 mb-2">
      <button className="hover:text-accent-light" onClick={ handleDecrease }>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
      </button>
      <span className="text-txt-secondary">{ quantity }</span>
        
      <button className="hover:text-accent-light" onClick={ handleIncrease }>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  )
}

export default ItemCount