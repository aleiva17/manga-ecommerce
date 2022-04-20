import IDetailProducts from "./IDetailProducts";

interface ICartProducts extends IDetailProducts {
  quantityToBuy: number
}

export default ICartProducts