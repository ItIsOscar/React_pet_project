

import LineCard from "./lineCardProduct/lineCard"
import SquadCard from "./squadCardProduct/squadCardProduct"
import "./productList.scss"
import { useState } from "react"
import listStatusController from "../../shared/controlles/listStatus.controller"
import { productModel } from "../../shared/mock/db/product.list.mock"

export default function ProductList({ list }: {
  list: productModel[]
}) {
  let [status, setStatus] = useState(listStatusController.getCurrentValue())

  listStatusController.setState = setStatus
  
  let productsJSX = list.map((obj: productModel, inx: number) => {
    if(status == "line" ) {
      return <LineCard product={obj} key={inx} />
    } else {
      return <SquadCard product={obj} key={inx} />
    }
  })

  return (
    <ul className={status == "line" ? "productList_line" : "productList_squad"}>
      {productsJSX}
    </ul>
  )
}

