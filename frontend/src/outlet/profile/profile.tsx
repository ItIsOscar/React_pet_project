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
    //idk it is secton or article
    <article className="discription">
      <section className="pic_name">
        <img src={user.pic} />
        <ul>
          <li>Ваня</li>
          <li>Вошел: 19.03.2023</li>
          <li>Проданные товары: 12</li>
          <li>Страна: узбекистан</li>
        </ul>
      </section>
      <p>{user.discription}</p>
    </article> 
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
    stallList = <span>Ничего не продает</span>
  }
  
  return (
    //idk it is secton or article
    <article> 
      <Title margin="2rem 1rem 1rem 1rem">Объявление продавца</Title>
      {stallList}
    </article>
  )
}

function UserComments() {
  return (
    //idk it is secton or article
    <section> 
      <Title margin="2rem 1rem 1rem 1rem">Комментарии</Title>
      {/* <Comment comments={comments} />  */}
    </section>
  )
}

export default function Profile() {
  const user: USER = useLoaderData() as USER

  return (
    <main className="content">
      <Description user={user} />
      <UserStall stall={user.goodsForSale}/>
      <UserComments />
    </main>
  )
}