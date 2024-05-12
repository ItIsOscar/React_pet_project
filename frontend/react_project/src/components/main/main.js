import { useLoaderData } from "react-router"

import Filters from "./filters/filters"
import ProductList from "../subComponents/productList/productList"
import Banner from "../subComponents/banner/banner"
import { useContext, useRef, useState } from "react"
import { LineStatusContext } from "../routerConnector/routerConnector"
import ListStatus from "../../shared/controlles/listStatus.controller"

export default function Main() {
  const data = useLoaderData()
  let listStatus = useRef(new ListStatus())
  return (
    <div className='content'>
      <Banner />
      <Filters filtersList={data.filters}/>
      {typeof data.products == "string" ? 
        <h1>Типо {data.products}</h1> :
        <ProductList status={"line"}  list={data.products}/>
      }
    </div>
  )
}