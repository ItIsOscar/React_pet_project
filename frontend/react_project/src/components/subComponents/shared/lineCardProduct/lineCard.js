import "./lineCard.scss"
import { Link } from "react-router-dom"
import { Subject, debounceTime } from 'rxjs'
import { useState } from "react"
import heart_p_b from "../../../../assets/heart_p_b.svg"
import heart_p_f from "../../../../assets/heart_p_f.svg"

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

  let handleClick = new Subject()

  handleClick.pipe(
    debounceTime(3000)
  ).subscribe(value => {
    console.log(value)
    // setIsFavourite(value)
  })

  function setFavourite(e) {
    stopPropagation(e)
    setIsFavourite(!isfavourite)
    // userMock.setFavourite(product.id, isfavourite)
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
        onClick={e => {
          setFavourite(e)
          handleClick.next(!isfavourite) 
        }}>
        <img src={isfavourite ? heart_p_f : heart_p_b}/>
      </button>
    </Link>
  )
}