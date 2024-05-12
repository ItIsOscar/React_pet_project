import ProductList from "./subComponents/productList/productList";

import { useLoaderData } from "react-router"
import Title from "./subComponents/title/title";
import { useState } from "react";

export default function Delivery() {
  const products = useLoaderData()
  let [listStatus, setListStatus] = useState("line")
  console.log(sessionStorage.getItem("lineStatus"))
  function handleSetListStatus() {
    let changes
    if(listStatus == "line") {
      changes = "squad"
    } else {
      changes = "line"
    }
    setListStatus(changes)
    sessionStorage.setItem("lineStatus", changes)
  }
  return (
    <div className="content">
      <Title handleListStatus={handleSetListStatus}>Доставка</Title>
      <ProductList status={listStatus} list={products}/>
    </div>
  )
}