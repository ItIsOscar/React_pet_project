import { productModel } from "./db/product.list.mock"
import USERS_LIST, { userModel } from "./db/users.list.mock"
import productsAPIMock from "./prouduct.api.mock"

class UserMethods {
  private user = USERS_LIST[0]

  getAuthUser(): userModel {
    return this.user
  }

  setFavouriteCount?: () => void
  setFavourite(inx: number, isInFavoutite: boolean): void {
    let favouriteList = this.user.favourite
    if(isInFavoutite) {
      let DeletedinxInList = favouriteList.findIndex(listInx => listInx == inx)
      favouriteList.splice(DeletedinxInList, 1)
    } else {
      favouriteList.push(inx)
    }
    this.setFavouriteCount!()
  }

  getFavourite(): Promise<productModel[]> {
    return new Promise((resolve, reject) => {
      let favouriteList: productModel[] = []
      this.user.favourite.forEach(favouriteID => {
        favouriteList.push(productsAPIMock.getProductsByID(favouriteID)!)
      })
      resolve(favouriteList)
    })
  }

  setBasketCount?: () => void
  setBasket(inx: number, isInBasket: boolean): void {
    let basketList = this.user.basket
    if(isInBasket) {
      let DeletedinxInList = basketList.findIndex(listInx => listInx == inx)
      basketList.splice(DeletedinxInList, 1)
    } else {
      basketList.push(inx)
    }
    this.setBasketCount!()
  }

  getBasket(): productModel[] {
    let basketList: productModel[] = []
    this.user.basket.forEach(inx => {
      basketList.push(productsAPIMock.getProductsByID(inx)!)
    })
    return basketList
  }

  getStall(): productModel[] {
    let stallList: productModel[] = []
    this.user.stall.forEach(stallID => stallID == productsAPIMock.getProductsByID(stallID)!.id && 
    stallList.push(productsAPIMock.getProductsByID(stallID)!))
    return stallList
  }
}
let userAPIMock = new UserMethods
export default userAPIMock