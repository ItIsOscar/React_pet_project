import USERS_LIST from "./users.list.mock"

class UserMethods {
  user = USERS_LIST[0]
  setFavourite(inx, isInFavoutite) {
    let favouriteList = this.user.favourite
    if(isInFavoutite) {
      let DeletedinxInList = favouriteList.findIndex(listInx => listInx == inx)
      favouriteList.splice(DeletedinxInList, 1)
    } else {
      favouriteList.push(inx)
    }
  }
}
let userMock = new UserMethods
export default userMock