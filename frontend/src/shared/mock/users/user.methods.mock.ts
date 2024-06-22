import USERS_LIST from "./users.list.mock"

class UserMethods {
  user = USERS_LIST[0]
  setFavourite(inx: number, isInFavoutite: boolean) {
    let favouriteList = this.user.favourite
    if(isInFavoutite) {
      let DeletedinxInList = favouriteList.findIndex(listInx => listInx == inx)
      favouriteList.splice(DeletedinxInList, 1)
    } else {
      favouriteList.push(inx)
    }
  }
  setBasket(inx: number, isInBasket: boolean) {
    console.log(inx, isInBasket)
    let basketList = this.user.basket
    if(isInBasket) {
      let DeletedinxInList = basketList.findIndex(listInx => listInx == inx)
      basketList.splice(DeletedinxInList, 1)
    } else {
      basketList.push(inx)
    }
  }
  // findProductsById = (id: number) => {
  //   return this.user.find((el) => el.id == id)
  // }
}
let userMock = new UserMethods
export default userMock