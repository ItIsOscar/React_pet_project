import "./lineCard.scss"
import { Link } from "react-router-dom"
import { Subject, debounceTime, throttleTime } from 'rxjs'
import React, { useState, useRef, RefObject, MouseEvent } from "react"
import heart_p_b from "../../../shared/assets/heart_p_b.svg"
import heart_p_f from "../../../shared/assets/heart_p_f.svg"

import userAPIMock from "../../../shared/mock/user.api.mock"
import { productModel } from "../../../shared/mock/db/product.list.mock"
import { userModel } from "../../../shared/mock/db/users.list.mock"

interface ILineCard {
  product: productModel
}

export default function LineCard({product}: ILineCard) {
  let [isfavourite, setIsFavourite] = useState<boolean>(false)

  let idTimerDefense = useRef<NodeJS.Timeout | null>(null)

  let seller: userModel = product.seller
  let characteristicsXJS: JSX.Element[] = product.characteristics.map(model => (
    <h4 key={model.type}>{model.value}</h4>
  ))

  function stopPropagationAndDefault(event: MouseEvent): void { 
    event.stopPropagation()
    event.preventDefault()
  }

  function changeFavouriteList(): void {
    userAPIMock.setFavourite(product.id, isfavourite)
  }

  function setFavourite(clickEvent: MouseEvent<HTMLButtonElement>): void { 
    stopPropagationAndDefault(clickEvent)
    setIsFavourite(!isfavourite)
    clearTimeout(idTimerDefense.current!)
    idTimerDefense.current = setTimeout(() => {
      changeFavouriteList()
    }, 600);
  }

  return (
    <Link to={"/cardProduct/" + product.id} className="lineCard">
      <section className="pic_info">
        <img src={product.pic}/>
        <ul>
          <li>{product.name}</li>
          <li>{product.cost.value + " " + product.cost.currency}</li>
          <li>{seller.name}</li>
        </ul>
      </section>
      <section className="characteristics">
        {characteristicsXJS}
      </section>
      <button className={`favouriteBut ${isfavourite ? "active" : "unActive"}`} 
        onClick={clickEvent => {
          setFavourite(clickEvent)
        }}>
        <img src={isfavourite ? heart_p_f : heart_p_b}/>
      </button>
    </Link>
  )
}