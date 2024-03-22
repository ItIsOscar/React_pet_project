import { product } from "../../assets/date"
import LineCard from "../shared/lineCardProduct/lineCard"
import SquadCard from "../shared/squadCardProduct/squadCardProduct"
import "./productList.scss"

export default function ProductList({status}) {
  
  let products = product.map((obj) => {
    if(status == "line" ) {
      return <LineCard 
      pic={obj.pic}
      name={obj.name} 
      cost={obj.cost} 
      seller={obj.seller} 
      characteristics={obj.characteristics} />
    } else {
      return <SquadCard 
      pic={obj.pic}
      name={obj.name} 
      cost={obj.cost} 
      seller={obj.seller} 
      characteristics={obj.characteristics} />
    }
  })

  return (
    <div className={status == "line" ? "productList_line" : "productList_squad"}>
      {products}
    </div>
  )
}

