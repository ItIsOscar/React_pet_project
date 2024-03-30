import { products } from "../../../assets/date"

import LineCard from "../shared/lineCardProduct/lineCard"
import SquadCard from "../shared/squadCardProduct/squadCardProduct"
import "./productList.scss"

export default function ProductList({status, productType}) {
  // let productList = fetch(`http://localhost:3000/api/productList/${productType}`, {
  //   method: "GET"
  // }) 

  let productsXJS = products.map((obj, inx) => {  //productList.map
    if(status == "line" ) {
      return <LineCard product={obj} key={inx} />
    } else {
      return <SquadCard product={obj} key={inx} />
    }
  })

  return (
    <div className={status == "line" ? "productList_line" : "productList_squad"}>
      {productsXJS}
    </div>
  )
}

