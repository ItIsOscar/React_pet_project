import ProductList from "./subComponents/productList/productList";

import { useLoaderData } from "react-router"
import Title from "./subComponents/title/title";
import { useState } from "react";

export default function Delivery() {
  const products = useLoaderData()
  return (
    <div className="content">
      <Title>Доставка</Title>
      <ProductList status={"list"} list={products}/>
    </div>
  )
}