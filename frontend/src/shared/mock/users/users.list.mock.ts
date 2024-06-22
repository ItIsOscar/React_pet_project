import { PRODUCT } from "../products/product.list.mock"

type productId = number
export type USER = {
  name: string
  pic?: string
  number: string
  discription: string
  goodsForSale: productId[]
  favourite: productId[] 
  basket: productId[] 
}

let USERS_LIST: USER[] = [
  {
    name: "USA Agenty",
    // pic: ,
    number: "+99804525409",
    discription: "РАвыаоыврыфпвравфыа",
    goodsForSale: [],
    favourite: [],
    basket: [] 
    // products: products
  },
  {
    name: "Ваня",
    // pic: ,
    number: "+9989506409",
    discription: "РАвыаоыврыфпвравфыа",
    goodsForSale: [],
    favourite: [] ,
    basket: []
    // products: null
  }
]

export default USERS_LIST