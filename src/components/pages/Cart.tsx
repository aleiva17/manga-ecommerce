import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { NavLink } from 'react-router-dom'

import { writeBatch, Timestamp, query, where, getDocs, collection, documentId, addDoc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/index"

const Cart = () => {
  const cartContext = useContext(CartContext)
  const [showCode, setShowCode] = useState(false)
  const [stockError, setStockError] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [buyerName, setBuyerName] = useState("")
  const [buyerEmail, setBuyerEmail] = useState("")
  const [buyerPhone, setBuyerPhone] = useState("")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyerName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyerEmail(e.target.value)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyerPhone(e.target.value)
  }

  const createOrder = () => {
    const objectOrder = {
      buyer: {
        name: buyerName,
        email: buyerEmail,
        phone: buyerPhone
      },
      items: cartContext?.cart,
      date: Timestamp.fromDate(new Date()),
      total: cartContext?.getTotal()
    }
    const ids = cartContext?.cart.map(prod => prod.id)
    const batch = writeBatch(firestoreDb)
    const collectionRef = collection(firestoreDb, "products")

    const outOfStock:any[] = []

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
      .then(response => {
        response.docs.forEach(doc => {
          const dataDoc = doc.data()
          const prodQuantity = cartContext?.cart.find(prod => prod.id === doc.id)?.quantityToBuy

          if (prodQuantity !== undefined && dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
          }
          else {
            outOfStock.push({ id: doc.id, ...dataDoc })
          }
        })
      }).then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(firestoreDb, "orders")
          return addDoc(collectionRef, objectOrder)
        }
        else {
          return Promise.reject({ name: "Out Of Stock", products: outOfStock })
        }
      }).then(({ id }) => {
        batch.commit()
        setShowCode(true)
        setOrderId(id)
      }).catch(error => {
        setStockError(true)
      })
  }

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
      <div className="flex flex-col gap-4 my-4">
        <div>
          <p>Nombre</p>
          <input onChange={ e => handleNameChange(e) } className="text-2xl rounded-full h-10 w-5/6 md:w-80 px-4 border-2" type="text" />
        </div>
        <div>
          <p>Correo electrónico</p>
          <input onChange={ e => handleEmailChange(e) } className="text-2xl rounded-full h-10 w-5/6 md:w-80 px-4 border-2" type="text" />
        </div>
        <div>
          <p>Número telefónico</p>
          <input onChange={ e => handlePhoneChange(e) } className="text-2xl rounded-full h-10 w-5/6 md:w-80 px-4 border-2" type="text" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={ () => cartContext?.clear() } 
          className="transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-600 px-4 py-2 text-white">
          Vaciar carrito
        </button>
        {
          (buyerEmail.length !== 0 && buyerName.length !== 0 && buyerPhone.length !== 0) && 
          <button
            onClick={ createOrder } 
            className="transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-600 px-4 py-2 text-white">
            Comprar
          </button>
        }
      </div>
      {
        showCode && <p className="font-semibold mt-4">Su ID de compra es: <span className="text-green-500">{ orderId }</span></p>
      }
      {
        stockError && <p className="font-semibold text-red-500">Error: Tiene productos fuera de stock. Actualice la página</p>
      }
    </main>
  )
}

export default Cart