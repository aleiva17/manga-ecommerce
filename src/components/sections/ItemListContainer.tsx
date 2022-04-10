import ItemCard from './ItemCard'
import IDetailProducts from '../services/IDetailProducts'

interface IItemListContainer {
  products: IDetailProducts[],
  addProduct: Function
}

const ItemListContainer = ({ products, addProduct }:IItemListContainer) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mx-12 mb-12'>
      {
        products.map(product => <ItemCard 
            key={product.id} 
            name={product.name} 
            imgUrl={product.imgUrl} 
            stock={product.stock} 
            price={product.price}
            addProductToCart={ addProduct } 
        />)
      }
    </div>
  )
}

export default ItemListContainer