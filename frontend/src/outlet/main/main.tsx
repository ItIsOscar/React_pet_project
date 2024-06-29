import { useLoaderData } from "react-router"

import Filters from "./filters/filters"
import ProductList from "../../subComponents/productList/productList"
import Banner from "./banner/banner"
import { ICatalog } from "../../shared/mock/catalog/catalog.list.mock"

export default function Main() {
  const catalog = useLoaderData() as ICatalog
  
  return (
    <main className='content'>
      <Banner />
      <Filters filtersList={catalog.filters}/> 
      {typeof catalog.products === "string" ? 
        <span>Типо {catalog.products}</span> :
        <ProductList list={catalog.products}/>
      }
    </main>
  )
}