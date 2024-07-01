import "./productCard.scss"
import Comments from "../../subComponents/comment/comment"
import { Link, useLoaderData } from "react-router-dom"
import userAPIMock from "../../shared/mock/user.api.mock"
import { useState } from "react"
import { productModel } from "../../shared/mock/db/product.list.mock"
import { userModel } from "../../shared/mock/db/users.list.mock"

//TODO: NEED SEMATITESKAYA VERSTKA!!

interface IProductTitle {
  product: productModel
}

function ProductTitle({product}: IProductTitle) {
  let characteristics: JSX.Element[] = product.characteristics.map((el, inx) => (
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

interface IDescription {
  description: string
}

function Description({description}: IDescription) {
  return (
    <div className="description">
      <p>{description}</p>
    </div>
  )
}

interface ISeller {
  id: number
  seller: userModel
}

function Seller({id, seller}: ISeller) {
  let [isInBasket, setIsInBasket] = useState(false)

  function changeOnBasket(): void {
    userAPIMock.setBasket(id, isInBasket)
    setIsInBasket(!isInBasket)
  }

  return (
    <div className="seller">
      <div>
        <img src={seller.pic}/>
        <h3>{seller.name}</h3>`${}`
      </div>
      <a href={"tel:" + seller.number}>{seller.number}</a>
      <button onClick={changeOnBasket}>Написать</button>
    </div>
  )
}

interface ILocation {
  location: string
}

function Location({location}: ILocation) {
  return (
    <div className="location">
      <h3>Местоположение</h3>
      <h4>{location}</h4>
      <div></div>
    </div>  
  )
}

export default function ProductCard() {
  let product = useLoaderData() as productModel

  return (
    <div className="content productCard">
      <ProductTitle product={product} />
      <div className="mainBlock">
        <Description description={product.description} />
        <div className="extraOption">
          <Seller id={product.id} seller={product.seller} />
          <Location location={"ул Ебенграда"}/>
        </div>
      </div>
      <Comments comments={product.comments} />
    </div>
  )
}