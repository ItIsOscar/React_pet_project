import ProductList from "./subComponents/productList/productList";

import { useLoaderData } from "react-router"

export default function Delivery() {
  const products = useLoaderData()
  return (
    <div className="content">
      <ProductList status={"line"} list={products}/>
    </div>
  )
}