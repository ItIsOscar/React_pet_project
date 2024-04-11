import { useLoaderData } from "react-router"

import Filters from "./subComponents/filters/filters"
import ProductList from "./subComponents/productList/productList"
import Banner from "./subComponents/banner/banner"

export default function Main() {
  const product = useLoaderData()
  // console.log("response product", product)
  return (
    <>
      <Banner />
      <div className='content'>
        <Filters />
        <ProductList status={"line"} list={product}/>
        <ProductList status={"line"} list={product}/>
      </div>
    </>
  )
}