import BuyPanel from "./subComponents/buyPanel/buyPanel";
import ProductList from "./subComponents/productList/productList";
import Title from "./subComponents/shared/title/title";

import { useLoaderData } from "react-router"

export default function Basket() {
  const products = useLoaderData()
  console.log(products)
  return (
    <>
      <div className="content">
        <Title>Корзина</Title>  
        <ProductList status={"line"} list={products}/>
      </div>
      <BuyPanel />
    </>
  )
}