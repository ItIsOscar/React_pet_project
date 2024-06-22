
import PRODUCT_LIST, { PRODUCT } from "./product.list.mock"

class ProductsMethods {
  products = PRODUCT_LIST
  
  findProductsById = (id: number | string): PRODUCT => {
    return this.products.find((el) => el.id == id)! //Возможен костыль
  }
}
let productsMock = new ProductsMethods
export default productsMock