import "./productCard.scss"
import Comments from "../subComponents/comment/comment"
import { Link, useLoaderData } from "react-router-dom"

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

function Seller({saller}) {
  return (
    <div className="seller">
      <div>
        <img src={saller.pic}/>
        <h3>{saller.name}</h3>`${}`
      </div>
      <a href={"tel:" + saller.number}>{saller.number}</a>
      <button>Написать</button>
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
  let productList = useLoaderData()
  let product = productList[0]
  return (
    <div className="content productCard">
      <ProductTitle product={product} />
      <div className="mainBlock">
        <Description description={product.description} />
        <div className="extraOption">
          <Seller saller={product.seller} />
          <Location location={product.location}/>
        </div>
      </div>
      <Comments comments={product.comments} />
    </div>
  )
}