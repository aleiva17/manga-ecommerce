import IDetailProducts from "../services/IDetailProducts"

const ItemDetail = ({ id, name, imgUrl, stock, price, category, author, description }: IDetailProducts) => {
  return(
    <>
      <h1 className="text-3xl font-bold text-center my-4">{ name }</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center md:justify-end">
          <img className="max-w-[400px]" src={imgUrl} alt={name} />
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
        </div>
      </section>
    </>
  )
}

export default ItemDetail