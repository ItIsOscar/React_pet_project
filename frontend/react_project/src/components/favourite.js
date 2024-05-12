import ProductList from "./subComponents/productList/productList"
import Title from "./subComponents/title/title"

import { useLoaderData } from "react-router"

import userMock from "../shared/mock/users/user.methods.mock"
import productsMock from "../shared/mock/products/prouduct.methods.mock"

function CheckBox({children, value, name, ischecked = false}) {
  return (
    <>
      {ischecked ? 
        <input checked={ischecked} onChange={() => {}} type="radio" name={name} value={value} id={value} />  : 
        <input type="radio" name={name} value={value} id={value} />
      }
      <label htmlFor={value}>{children}</label>
    </>
  )
}

function LineSelector() {
  return (
    <div className="mainFilters">
      <div className="filters">
        <CheckBox ischecked={true} name="typeOfSallers" value={"all"} >
          Объявление
        </CheckBox>
        <CheckBox name="typeOfSallers" value={"business"} >
          Поиск
        </CheckBox>
        <CheckBox name="typeOfSallers" value={"sellers"} >
          История
        </CheckBox>
      </div>
      <div className="filtersOptions">
        <select>
          <option>Сначала новые</option>
          <option>Сначала старые</option>
        </select>
        <img />
      </div>
    </div>
  )
}

export default function Favourite() {
  const products = useLoaderData()
  console.log(products)
  let favoriteList = []
  userMock.user.favourite.forEach(inx => {
    favoriteList.push(productsMock.products[inx])
  })
  
  return (
    <div className="content">
      <Title>Избранное</Title>
      <LineSelector />
      <ProductList status={"line"} list={favoriteList}/>
      <div className="recommend">
        <h2>Подойдет также</h2>
        <ProductList status={"line"} list={products}/>
      </div>
    </div>
  )
}