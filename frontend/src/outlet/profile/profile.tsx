import "./profile.scss"

import ProductList from "../../subComponents/productList/productList";
import Title from "../../subComponents/title/title";
import { USER } from "../../shared/mock/users/users.list.mock";
import productsMock from "../../shared/mock/products/prouduct.methods.mock";
import { useLoaderData } from "react-router";
import { PRODUCT } from "../../shared/mock/products/product.list.mock";

interface IComp_user {
  user: USER
}

function Description({user}: IComp_user) {
  return (
    <div className="discription">
      <div className="pic_name">
        <img src={user.pic} />
        <ul>
          <li><h2>Ваня</h2></li>
          <li><h3>Вошел: 19.03.2023</h3></li>
          <li><h3>Проданные товары: 12</h3></li>
          <li><h3>Страна: узбекистан</h3></li>
        </ul>
      </div>
      <p>{user.discription}</p>
    </div> 
  )
}

function UserStall({stall}: {
  stall: number[]
}) {

  let stallList: JSX.Element
  if(stall.length != 0) {
    let stallProductList: PRODUCT[] = []

    stall.forEach(id => id == productsMock.products[id].id && 
      stallProductList.push(productsMock.products[id]))

    stallList = <ProductList list={stallProductList} />
  } else {
    stallList = <h3>Ничего не продает</h3>
  }

  return (
    <div>
      <Title margin="2rem 1rem 1rem 1rem">Объявление продавца</Title>
      {stallList}
    </div>
  )
}

function UserComments() {
  return (
    <div>
      <Title margin="2rem 1rem 1rem 1rem">Комментарии</Title>
      {/* <Comment comments={comments} />  */}
    </div>
  )
}

export default function Profile() {
  const user: USER = useLoaderData() as USER

  return (
    <div className="content">
      <Description user={user} />
      <UserStall stall={user.goodsForSale}/>
      <UserComments />
    </div>
  )
}