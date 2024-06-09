import "./basket.scss"

import ProductList from "../../subComponents/productList/productList";
import Title from "../../subComponents/title/title";

import { useLoaderData } from "react-router"
import productsMock from "../../shared/mock/products/prouduct.methods.mock";
import userMock from "../../shared/mock/users/user.methods.mock";

function BuyPanel({products}) {
  let totalCost = 0
  products.forEach(element => {
    totalCost += element.cost.value
  })

  let basketList = products.map((obj) => {
    return <li>{`${obj.name}: ${obj.cost.value} ${obj.cost.currency}`} </li>
  })

  function sendData(e) {
    e.preventDefault()
    fetch("", {
      method: "POST",
      body: {

      }
    })
  }

  let CostList = (
    <>
      {basketList}
      <li>Итого: {products.length} товара {totalCost + " сум"}</li>
    </>
  )

  return (
    <div className="panel_border">
      <div className="content buyPanel">
        <ul>
          <li><h3>Ваша корзина</h3></li>
          {
            products.length != 0 ? 
             CostList : 
             <li>Пуста</li>
          }
          
        </ul>
        <form onSubmit={sendData} className="boughtType">
          <ul>
            <li><h3>Тип оплаты</h3></li>
            <li>
              <span>Карточки</span>
              <ul>
                <img></img>
                <img></img>
              </ul>
              </li>
            <li>Добавить</li>
          </ul> 
        </form>
      </div>
    </div>
  )
}

function Instruction() {
  return (
    <div>
      <h2>Пусто!</h2>
      <br />
      <h3>Купите уже что-то</h3>
    </div>
  )
}

export default function Basket() {
  const products = useLoaderData()
  let basketList = []
  userMock.user.basket.forEach(inx => {
    basketList.push(productsMock.products[inx])
  })

  return (
    <>
      <div className="content">
        <Title>Корзина</Title>  
        {
          basketList.length != 0 ? 
            <ProductList status={"list"} list={basketList}/> :
            <Instruction />
        }
      </div>
      <BuyPanel products={basketList}/>
    </>
  )
}