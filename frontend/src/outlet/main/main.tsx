import { useLoaderData } from "react-router"

import Filters from "./filters/filters"
import ProductList from "../../subComponents/productList/productList"
import Banner from "./banner/banner"
import { ICatalog } from "../../shared/mock/catalog/catalog.list.mock"

export default function Main() {
  const catalog = useLoaderData() as ICatalog
  
  return (
    <div className='content'>
      <Banner />
      <Filters filtersList={catalog.filters}/> 
      {typeof catalog.products === "string" ? 
        <h1>Типо {catalog.products}</h1> :
        <ProductList list={catalog.products}/>
      }
    </div>
  )
}