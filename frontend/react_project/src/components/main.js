import { useLoaderData, useRouteLoaderData } from "react-router"

import Filters from "./subComponents/filters/filters"
import ProductList from "./subComponents/productList/productList"
import Banner from "./subComponents/banner/banner"

export default function Main() {
  const products = useLoaderData()
  console.log(products)
  return (
    <>
      <Banner />
      <div className='content'>
        <Filters />
        <ProductList status={"line"}/>
      </div>
    </>
  )
}