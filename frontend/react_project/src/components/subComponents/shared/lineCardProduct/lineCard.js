import { Link } from "react-router-dom"
import "./lineCard.scss"

export default function LineCard({product}) {
  let characteristicsXJS = product.characteristics.map((el) => (
    <h4 key={el.type}>{el.value}</h4>
  ))
  return (
    <Link to={"/cardProduct/" + product.id} action="replace" className="lineCard">
      <div className="pic_info">
        <img src={product.pic}/>
        <ul>
          <li>{product.name}</li>
          <li>{product.cost}</li>
          <li>{product.seller}</li>
        </ul>
      </div>
      <div className="characteristics">
        {characteristicsXJS}
      </div>
    </Link>
  )
}