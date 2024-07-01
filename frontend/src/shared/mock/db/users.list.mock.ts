import { productModel } from "../db/product.list.mock"

type productId = number
export type userModel = {
  name: string
  pic?: string
  number: string
  discription: string
  stall: productId[]
  favourite: productId[] 
  basket: productId[] 
}

let USERS_LIST: userModel[] = [
  {
    name: "USA Agenty",
    // pic: ,
    number: "+99804525409",
    discription: "РАвыаоыврыфпвравфыа",
    stall: [],
    favourite: [],
    basket: [] 
    // products: products
  },
  {
    name: "Ваня",
    // pic: ,
    number: "+9989506409",
    discription: "РАвыаоыврыфпвравфыа",
    stall: [],
    favourite: [] ,
    basket: []
    // products: null
  }
]

export default USERS_LIST