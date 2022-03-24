
interface IItemsListContainer {
  greetings: string
}

const ItemListContainer = ({ greetings }: IItemsListContainer) => {
  
  return (
    <h1 className="text-center text-5xl font-semibold my-12">{ greetings }</h1>
  )
}

export default ItemListContainer