import { useState } from "react"
import { Link } from "react-router-dom"

import basket_border from "../../../shared/assets/basket_border.svg"
import basket_full from "../../../shared/assets/basket_full.svg"
import userAPIMock from "../../../shared/mock/user.api.mock"

export default function BasketLink() {
  let [isHover, setHover] = useState<boolean>(false)
  let [basketCount, setBasketCount] = useState<number>(userAPIMock.getAuthUser().basket.length)//TODO: to do backent logic

  function setterBasketCount(): void {
    setBasketCount(userAPIMock.getAuthUser().basket.length)
  }

  userAPIMock.setBasketCount = setterBasketCount
  return (
    <Link to={"./basket"} 
      className="topButtons"
      onMouseOver={() => {setHover(true)}}
      onMouseOut={() => {setHover(false)}} 
    >
      <span className="count">{basketCount}</span>
      <img src={isHover ? basket_full : basket_border} />
      <h2>Корзина</h2>
    </Link>
  )
}