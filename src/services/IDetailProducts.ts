import IProducts from './IProducts'

interface IDetailProducts extends IProducts {
  category: string,
  author: string,
  description: string
}

export default IDetailProducts