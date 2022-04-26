import { Link } from 'react-router-dom'

interface IItem {
  id: string,
  name: string,
  imgUrl: string,
  stock: number,
  price: number
}

const ItemCard = ({ id, name, imgUrl, stock, price }: IItem) => {
  return (
    <div className="flex flex-col items-center w-100">
      <h2 className="text-center font-semibold text-xl mb-1">{ name }</h2>
      <img className="h-[280px]" src={ imgUrl } alt={ `Portada de ${ name }` } />
      <small className="py-1">Stock: { stock }</small>
      <p className="font-semibold pb-1">Precio: ${ price }</p>

      <Link to={`/item/${id}`} className="text-center bg-indigo-600 hover:bg-indigo-500 text-white rounded-md py-1 transition duration-300 w-4/5 md:w-3/5">Ver detalle</Link>
    </div>
  )
}

export default ItemCard