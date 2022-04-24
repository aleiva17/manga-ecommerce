import CartContext from "../../context/CartContext"
import { useContext } from "react"
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const cartContext = useContext(CartContext)

  if (cartContext?.cart.length === 0) {
    return (
      <main className="flex flex-col items-center">
        <h1 className="text-center text-5xl font-semibold my-12">
          No tienes productos en el carrito.
        </h1>
        <p className="text-center text-2xl">
          Haz <NavLink className="font-semibold text-primary-classic hover:text-primary-light" to="/">CLICK AQUÍ</NavLink> para volver a la página principal.
        </p>
      </main>
    )
  }
  
  return (
    <main className="flex flex-col items-center">
      <h1 className='text-center text-5xl font-semibold my-12'>Carrito de compras</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4">
                      Acción
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Nombre
                    </th>
                    <th scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4">
                      Cantidad
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Precio
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartContext?.cart.map(prod => (
                      <tr key={ prod.id } className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <button onClick={ () => cartContext.removeItem(prod.id) } className="h-10 px-5 m-2 text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>  
                          </button>
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          { prod.name }
                        </td>
                        <td className="text-center text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          { prod.quantityToBuy }
                        </td>
                        <td className="text-center text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          { prod.price }
                        </td>
                        <td className="text-center font-semibold text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          { prod.quantityToBuy * prod.price }
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl font-bold">
        Total a pagar: <span className="text-green-500">${ cartContext?.getTotal() }</span>
      </p>
    </main>
  )
}

export default Cart