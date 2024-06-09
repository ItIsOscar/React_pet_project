import { PRODUCT } from "../products/product.list.mock"

type productId = number
export type USER = {
  name: string
  pic: null
  number: string
  discription: string
  favourite: productId[] 
  basket: productId[] 
}

let USERS_LIST: USER[] = [
  {
    name: "USA Agenty",
    pic: null,
    number: "+99804525409",
    discription: "РАвыаоыврыфпвравфыа",
    favourite: [],
    basket: [] 
    // products: products
  },
  {
    name: "Ваня",
    pic: null,
    number: "+9989506409",
    discription: "РАвыаоыврыфпвравфыа",
    favourite: [] ,
    basket: []
    // products: null
  }
]

export default USERS_LIST