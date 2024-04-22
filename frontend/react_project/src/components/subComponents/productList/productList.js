

import LineCard from "../shared/lineCardProduct/lineCard"
import SquadCard from "../shared/squadCardProduct/squadCardProduct"
import "./productList.scss"

export default function ProductList({status, list}) {
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

