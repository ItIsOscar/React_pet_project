

import LineCard from "./lineCardProduct/lineCard"
import SquadCard from "./squadCardProduct/squadCardProduct"
import "./productList.scss"
import { useState } from "react"
import listStatusController from "../../../shared/controlles/listStatus.controller"

export default function ProductList({list}) {
  let [status, setStatus] = useState(listStatusController.getCurrentValue())
  listStatusController.setState = setStatus
  let productsJSX = list.map((obj, inx) => {
    if(status == "line" ) {
      return <LineCard product={obj} key={inx} />
    } else {
      return <SquadCard product={obj} key={inx} />
    }
  })

  return (
    <div className={status == "line" ? "productList_line" : "productList_squad"}>
      {productsJSX}
    </div>
  )
}

