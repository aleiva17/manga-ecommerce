import { createContext, useState } from "react";
import ICartProducts from '../services/ICartProducts'

type CartContextProviderProps = {
  children: React.ReactNode
}

type CartContextType = {
  cart: ICartProducts[]
  setCart: React.Dispatch<React.SetStateAction<ICartProducts[]>>
  addItem: (product: ICartProducts) => void
  getQuantity: () => number
  clear: () => void
  isInCart: (id: number) => boolean
  removeItem: (id: number) => void
}

const CartContext = createContext<CartContextType | null>({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<ICartProducts[]>([])

  const addItem = (product: ICartProducts) => {
    if (!isInCart(product.id)) {
      setCart([...cart, product])
    }
    else {
      const products: ICartProducts[]= []
      
      cart.forEach(prod => {
        if (prod.id !== product.id) {
          products.push(prod)
        }
        else {
          const newProd = prod
          newProd.quantityToBuy += product.quantityToBuy
          products.push(newProd) 
        }
      })

      setCart(products)
    }
  }

  const removeItem = (id: number) => {
    const products = cart.filter(prod => prod.id !== id)
    setCart(products)
  }

  const clear = () => {
    setCart([])
  }

  const getQuantity = () => {
    let count = 0
    cart.forEach(prod => {
      count += prod.quantityToBuy
    })
    return count
  }

  const isInCart = (id: number) => {
    return cart.some(prod => prod.id === id)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      getQuantity,
      setCart,
      clear,
      isInCart,
      removeItem
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext