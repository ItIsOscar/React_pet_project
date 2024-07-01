
import PRODUCT_LIST from "./db/product.list.mock"
import type { productModel as ProductModel } from "./db/product.list.mock"
class ProductsMethods {
  private products = PRODUCT_LIST
  getAllProducts() {
    return this.products
  }
  getProductsByID(id: number ): ProductModel | null  {
    let productByID: ProductModel = this.products.find(product => product.id == id)!
    if(typeof productByID == "undefined") {
      return null
    } else {
      return productByID
    }
    return productByID
  }
}
let productsAPIMock = new ProductsMethods
export default productsAPIMock