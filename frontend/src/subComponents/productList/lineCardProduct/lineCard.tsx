import "./lineCard.scss"
import { Link } from "react-router-dom"
import { Subject, debounceTime, throttleTime } from 'rxjs'
import React, { useState, useRef, RefObject, MouseEvent } from "react"
import heart_p_b from "../../../shared/assets/heart_p_b.svg"
import heart_p_f from "../../../shared/assets/heart_p_f.svg"

import userMock from "../../../shared/mock/users/user.methods.mock"
import { PRODUCT } from "../../../shared/mock/products/product.list.mock"
import { USER } from "../../../shared/mock/users/users.list.mock"

export default function LineCard({product}: {
  product: PRODUCT
}) {
  let [isfavourite, setIsFavourite] = useState<boolean>(false)

  let idTimerDefense = useRef<any>(null) // need change type to setTimeOut

  let seller: USER = userMock.user
  let characteristicsXJS: JSX.Element[] = product.characteristics.map(model => (
    <h4 key={model.type}>{model.value}</h4>
  ))

  function stopPropagationAndDefault(event: MouseEvent): void { 
    event.stopPropagation()
    event.preventDefault()
  }

  function changeFavouriteList(): void {
    userMock.setFavourite(product.id, isfavourite)
  }

  function setFavourite(clickEvent: MouseEvent<HTMLButtonElement>): void { 
    stopPropagationAndDefault(clickEvent)
    setIsFavourite(!isfavourite)
    clearTimeout(idTimerDefense.current)
    idTimerDefense.current = setTimeout(() => {
      changeFavouriteList()
    }, 600);
  }

  return (
    <Link to={"/cardProduct/" + product.id} className="lineCard">
      <div className="pic_info">
        <img src={product.pic}/>
        <ul>
          <li>{product.name}</li>
          <li>{product.cost.value + " " + product.cost.currency}</li>
          <li>{seller.name}</li>
        </ul>
      </div>
      <div className="characteristics">
        {characteristicsXJS}
      </div>
      <button className={`but ${isfavourite ? "active" : "unActive"}`} 
        onClick={clickEvent => {
          setFavourite(clickEvent)
        }}>
        <img src={isfavourite ? heart_p_f : heart_p_b}/>
      </button>
    </Link>
  )
}