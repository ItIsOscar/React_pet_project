import { Link } from "react-router-dom"
import delivery_border from "../../../shared/assets/delivery_border.svg"
import delivery_full from "../../../shared/assets/delivery_full.svg"
import { useState } from "react"


export default function DeliveryLink() {
  let [isHover, setHover] = useState(false)

  return (
    <Link to={"./delivery"} 
      className="topButtons"
      onMouseOver={() => {setHover(true)}}
      onMouseOut={() => {setHover(false)}} 
    >
      <img src={isHover ? delivery_full : delivery_border} />
      <h2>Доставка</h2>
    </Link>
  )
}