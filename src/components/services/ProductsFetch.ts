import IProducts from "./IProducts";

const db = [
  {id: 1, name: "Steel Ball Run 01", imgUrl: "http://www.editorialivrea.com/ESP/jojosbizarreadventure/jojo7-steelballrun01.jpg", stock: 10, price: 12},
  {id: 2, name: "Steel Ball Run 02", imgUrl: "http://www.editorialivrea.com/ESP/jojosbizarreadventure/jojo7-steelballrun02.jpg", stock: 10, price: 12},
  {id: 3, name: "Steel Ball Run 03", imgUrl: "http://www.editorialivrea.com/ESP/jojosbizarreadventure/jojo7-steelballrun03.jpg", stock: 10, price: 12},
  {id: 4, name: "Vagabond 01", imgUrl: "http://www.editorialivrea.com/ESP/vagabond/vagabond01hs.jpg", stock: 10, price: 10},
  {id: 5, name: "Vagabond 02", imgUrl: "http://www.editorialivrea.com/ESP/vagabond/vagabond02hs.jpg", stock: 10, price: 10},
  {id: 6, name: "Vagabond 03", imgUrl: "http://www.editorialivrea.com/ESP/vagabond/vagabond03hs.jpg", stock: 10, price: 10},
  {id: 7, name: "Reign of the Seven Spellblades 01", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91oCKyrVDVL.jpg", stock: 10, price: 8},
  {id: 8, name: "Reign of the Seven Spellblades 02", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91DgHAgSxRL.jpg", stock: 10, price: 8},
  {id: 9, name: "Reign of the Seven Spellblades 03", imgUrl: "https://img.game-news24.com/2021/09/Reign-of-the-Seven-Spellblades-Volume-3-Review.jpeg", stock: 10, price: 8}
]

class ProductsFetch {
  static getProducts(): Promise<IProducts[]> {
    return new Promise (resolve => {
      setTimeout(() => {
        resolve(db)
      }, 2000)
    });
  }
}

export default ProductsFetch