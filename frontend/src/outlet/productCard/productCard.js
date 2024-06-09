import "./productCard.scss"
import Comments from "../../subComponents/comment/comment"
import { Link, useLoaderData } from "react-router-dom"
import userMock from "../../shared/mock/users/user.methods.mock"
import { useState } from "react"

function ProductTitle({product}) {
  
  let characteristics = product.characteristics.map((el, inx) => (
    <li key={inx}>{el.type + ': ' + el.value}</li>
  ))  
  return (
    <div className="title"> 
      <img src={product.pic}/>
      <div>
        <h2>{product.name}</h2>
        <div className="characteristicsList">
          <ul>{characteristics}</ul>
        </div>
      </div>
    </div>
  )
}

function Description({description}) {
  return (
    <div className="description">
      <p>{description}</p>
    </div>
  )
}

function Seller({id ,saller}) {
  let [isInBasket, setIsInBasket] = useState(false)

  function changeOnBasket() {
    userMock.setBasket(id, isInBasket)
    console.log(userMock.user)
    setIsInBasket(!isInBasket)
  }

  return (
    <div className="seller">
      <div>
        <img src={saller.pic}/>
        <h3>{saller.name}</h3>`${}`
      </div>
      <a href={"tel:" + saller.number}>{saller.number}</a>
      <button onClick={changeOnBasket}>Написать</button>
    </div>
  )
}

function Location({location}) {
  return (
    <div className="location">
      <h3>Местоположение</h3>
      <h4>{location}</h4>
      <div></div>
    </div>  
  )
}

export default function ProductCard() {
  let product = useLoaderData()
  return (
    <div className="content productCard">
      <ProductTitle product={product} />
      <div className="mainBlock">
        <Description description={product.description} />
        <div className="extraOption">
          <Seller id={product.id} saller={product.seller} />
          <Location location={product.location}/>
        </div>
      </div>
      <Comments comments={product.comments} />
    </div>
  )
}