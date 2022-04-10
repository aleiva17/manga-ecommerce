import IProducts from './IProducts'

interface IDetailProducts extends IProducts {
  category: "manga" | "light novel",
  author: string,
  description: string
}

export default IDetailProducts