import "./lineCard.scss"
import { Link } from "react-router-dom"
import { Subject } from 'rxjs'
import { useState } from "react"

import userMock from "../../../../shared/mock/users/user.methods.mock"

export default function LineCard({product}) {
  let [isfavourite, setIsFavourite] = useState(false)

  let seller = userMock.user

  let characteristicsXJS = product.characteristics.map((el) => (
    <h4 key={el.type}>{el.value}</h4>
  ))

  function stopPropagation(e) {
    e.stopPropagation()
    e.preventDefault()
  }

  function setFavourite(e) {
    stopPropagation(e)
    setIsFavourite(!isfavourite)
    userMock.setFavourite(product.id, isfavourite)
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
      <button className={`but ${isfavourite ? "active" : ""}`} 
      onClick={setFavourite}>
        <img />
      </button>
    </Link>
  )
}