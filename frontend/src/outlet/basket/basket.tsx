import "./basket.scss"

import ProductList from "../../subComponents/productList/productList";
import Title from "../../subComponents/title/title";

import { useLoaderData } from "react-router"
import productsMock from "../../shared/mock/products/prouduct.methods.mock";
import userMock from "../../shared/mock/users/user.methods.mock";
import { PRODUCT } from "../../shared/mock/products/product.list.mock";
import { FormEvent } from "react";

interface IComp_basketList {
  basketList: PRODUCT[]
}

function BasketCostList({basketList}: IComp_basketList) {
  let basketcostList: JSX.Element[] = basketList.map(product => {
    return <li>{`${product.name}: ${product.cost.value} ${product.cost.currency}`}</li>
  })

  let totalProducts = basketList.length

  let totalCost: number = 0
  basketList.forEach(product => {
    totalCost += product.cost.value
  })

 return (
    <>
      {basketcostList}
      <li>Итого: {totalProducts} товара {totalCost + " сум"}</li>
    </>
  )
}

function EmptyBasket() {
  return (
    <li>Пуста</li>
  )
}

function BasketList({basketList}: IComp_basketList) {
  return (
    <ul>
      <li><h3>Ваша корзина</h3></li>
      {
        basketList.length != 0 ? 
          <BasketCostList basketList={basketList}/> : 
          <EmptyBasket />
      }
    </ul>
  )
}

function CardIcon({src}: {
  src: string
}) {
  return (
    <button className="cardIcon">
      <img src={src}/>
    </button>
  )
}

function Payment() {
  function paymenConfirmation(event: FormEvent) {
    event.preventDefault()
    fetch("", {
      method: "POST",
      // body: {

      // }
    })
  }
  return (
    <form onSubmit={paymenConfirmation} className="paymenConfirmation">
          <fieldset>
            <legend>Тип оплаты</legend>
            <span>Карточки</span>
            <ul>
              <CardIcon src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1313-j69pg4er.png" />
            </ul>
            <button>Добавить</button>
          </fieldset> 
        </form>
  )
}

function BuyPanel({basketList}: IComp_basketList) {

  return (
    <div className="panel_border">
      <div className="content buyPanel">
        <BasketList basketList={basketList}/>
        <Payment />
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
  const products = useLoaderData() as PRODUCT[]

  let basketList: PRODUCT[] = []
  userMock.user.basket.forEach(inx => {
    basketList.push(productsMock.products[inx])
  })
  return (
    <>
      <div className="content">
        <Title>Корзина</Title>  
        {
          basketList.length != 0 ? 
            <ProductList list={basketList}/> :
            <Instruction />
        }
      </div>
      <BuyPanel basketList={basketList}/>
    </>
  )
}