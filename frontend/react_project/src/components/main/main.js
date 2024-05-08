import { useLoaderData } from "react-router"

import Filters from "./filters/filters"
import ProductList from "../subComponents/productList/productList"
import Banner from "../subComponents/banner/banner"

export default function Main() {
  const product = useLoaderData()
  console.log(product)
  return (
    <div className='content'>
      <Banner />
      <Filters />
      {typeof product == "string" ? 
        <h1>Типо {product}</h1> :
        <ProductList status={"line"} list={product}/>
      }
    </div>
  )
}