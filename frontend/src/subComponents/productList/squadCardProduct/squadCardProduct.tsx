
import { Link } from "react-router-dom"
import "./squadCardProduct.scss"
import { productModel } from "../../../shared/mock/db/product.list.mock"

export default function SquadCard({product} : {
  product: productModel
}) {
  let characteristicsXJS = product.characteristics.map((el) => (
    <h3>{el.value}</h3>
  ))
  return (
    <Link to={"/cardProduct/" + product.id} className="squadCard">
      <img src={product.pic}/>
      <h2>{product.name}</h2>
      <section className="characteristics">
        {characteristicsXJS}
      </section>
        <h3>{product.cost.value + " " + product.cost.currency}</h3>
        {/* <h3>{product.seller.name}</h3> */}
    </Link>
  )
}