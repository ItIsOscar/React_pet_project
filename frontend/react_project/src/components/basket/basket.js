import "./basket.scss"

import ProductList from "../subComponents/productList/productList";
import Title from "../subComponents/title/title";

import { useLoaderData } from "react-router"
import { useState } from "react";
import productsMock from "../../shared/mock/products/prouduct.methods.mock";
import userMock from "../../shared/mock/users/user.methods.mock";

function BuyPanel({products}) {
  let totalCost = 0
  products.forEach(element => {
    totalCost += element.cost.value
  });

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

  return (
    <div className="panel_border">
      <div className="content buyPanel">
        <ul>
          <li><h3>Ваша корзина</h3></li>
          {basketList}
          <li>Итого: {products.length} товара {totalCost + " сум"}</li>
        </ul>
        <form onSubmit={sendData} className="boughtType">
          <ul>
            <li><h3>Тип оплаты</h3></li>
            <li>Карточка</li>
            <li>Добавить</li>
            <button>Купить</button>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default function Basket() {
  const products = useLoaderData()
  let basketList = []
  userMock.user.basket.forEach(inx => {
    console.log(inx)
    basketList.push(productsMock.products[inx])
  })
  return (
    <>
      <div className="content">
        <Title>Корзина</Title>  
        <ProductList status={"list"} list={basketList}/>
      </div>
      <BuyPanel products={products}/>
    </>
  )
}