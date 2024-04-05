import "./productCard.scss"
import Comments from "../comment/comment"
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

function Description({product}) {
  return (
    <div className="description">
      <p>{product.description}</p>
    </div>
  )
}

function Seller({product}) {
  return (
    <div className="seller">
      <div>
        <img src={product.saller.pic}/>
        <h3>{product.saller.name}</h3>`${}`
      </div>
      <a href={"tel:" + product.saller.number}>{product.saller.number}</a>
      <button>Написать</button>
    </div>
  )
}

function Location({product}) {
  return (
    <div className="location">
      <h3>Местоположение</h3>
      <h4>{product.location}</h4>
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
        <Description product={product} />
        <div className="extraOption">
          <Seller product={product} />
          <Location product={product}/>
        </div>
      </div>
      <Comments comments={product.comments} />
    </div>
  )
}