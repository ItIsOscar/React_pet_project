import userMock from "../users/user.methods.mock"
import USERS_LIST from "../users/users.list.mock"
import PRODUCT_LIST from "./product.list.mock"

class ProductsMethods {
  products = PRODUCT_LIST
  
  findProductsById = (id: number) => {
    return this.products.find((el) => el.id == id)
  }
}
let productsMock = new ProductsMethods
export default productsMock