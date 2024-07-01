import ProductList from "../../subComponents/productList/productList"
import Title from "../../subComponents/title/title"

import { useLoaderData } from "react-router"

import userAPIMock from "../../shared/mock/user.api.mock"
import productsAPIMock from "../../shared/mock/prouduct.api.mock"
import { productModel } from "../../shared/mock/db/product.list.mock"

interface ICheckBox {
  children: string
  value: string
  name: string
  isChecked?: boolean
}

function CheckBox({children, value, name, isChecked: isChecked = false}: ICheckBox) {
  return (
    <>
      {isChecked ? 
        <input checked={isChecked} onChange={() => {}} type="radio" name={name} value={value} id={value} />  : 
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
        <CheckBox isChecked={true} name="typeOfSallers" value={"all"} >
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

function Instruction() {
  return (
    <div>
      <h2>У вас нету избранных!</h2>
      <br />
      <h3>Чтобы добавить товар в избранное, Нужно нажать на сердце рядом с товаром</h3>
    </div>
  )
}

export default function Favourite() {
  const {favoriteList, products} = useLoaderData() as {
    favoriteList: productModel[]
    products: productModel[]
  }

  return (
    <div className="content">
      <Title>Избранное</Title>
      <LineSelector />
      {
      favoriteList.length != 0 ? 
        <ProductList list={favoriteList}/> :
        <Instruction />
      }
      <div className="recommend">
        <Title>Подойдет также</Title>
        <ProductList list={products}/>
      </div>
    </div>
  )
}