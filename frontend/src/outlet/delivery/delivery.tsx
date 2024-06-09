import ProductList from "../../subComponents/productList/productList";

import { useLoaderData } from "react-router"
import Title from "../../subComponents/title/title";
import { useState } from "react";
import { PRODUCT } from "../../shared/mock/products/product.list.mock";

export default function Delivery() {
  const products = useLoaderData() as PRODUCT[]
  return (
    <div className="content">
      <Title>Доставка</Title>
      <ProductList list={products}/>
    </div>
  )
}