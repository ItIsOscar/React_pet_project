import { Link } from "react-router-dom"
import { Subject } from 'rxjs'
import "./lineCard.scss"
import { useState } from "react"

export default function LineCard({product}) {
  // let [isfavourite, setIsFavourite] = useState(false)
  let characteristicsXJS = product.characteristics.map((el) => (
    <h4 key={el.type}>{el.value}</h4>
  ))
  let isfavourite = new Subject()
  isfavourite.subscribe((value) => {
    
  })
  function setClick(e) {
    e.stopPropagation()
    e.preventDefault()
    isfavourite.next(true)
  }
  return (
    <Link to={"/cardProduct/" + product.id} className="lineCard">
      <div className="pic_info">
        <img src={product.pic}/>
        <ul>
          <li>{product.name}</li>
          <li>{product.cost.value + " " + product.cost.currency}</li>
          <li>{product.seller.name}</li>
        </ul>
      </div>
      <div className="characteristics">
        {characteristicsXJS}
      </div>
      <button className={`but ${isfavourite ? "active" : ""}`} 
      onClick={setClick}>

      </button>
    </Link>
  )
}