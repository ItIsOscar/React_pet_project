import { useState } from "react"
import { Link } from "react-router-dom"

import basket_border from "../../../shared/assets/basket_border.svg"
import basket_full from "../../../shared/assets/basket_full.svg"
import userMock from "../../../shared/mock/users/user.methods.mock"

export default function BasketLink() {
  let [isHover, setHover] = useState<boolean>(false)
  let [basketCount, setBasketCount] = useState<number>(userMock.user.basket.length)

  function setterBasketCount(): void {
    setBasketCount(userMock.user.basket.length)
  }

  userMock.setBasketCount = setterBasketCount
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