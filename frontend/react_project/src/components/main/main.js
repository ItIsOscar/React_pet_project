import { useLoaderData } from "react-router"

import Filters from "./filters/filters"
import ProductList from "../../subComponents/productList/productList"
import Banner from "../subComponents/banner/banner"

export default function Main() {

  const data = useLoaderData()
  return (
    <div className='content'>
      <Banner />
      <Filters filtersList={data.filters}/>
      {typeof data.products == "string" ? 
        <h1>Типо {data.products}</h1> :
        <ProductList list={data.products}/>
      }
    </div>
  )
}