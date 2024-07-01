import "./profile.scss"

import ProductList from "../../subComponents/productList/productList";
import Title from "../../subComponents/title/title";
import { userModel } from "../../shared/mock/db/users.list.mock";
import productsAPIMock from "../../shared/mock/prouduct.api.mock";
import { useLoaderData } from "react-router";
import { productModel } from "../../shared/mock/db/product.list.mock";
import userAPIMock from "../../shared/mock/user.api.mock";

interface IComp_user {
  user: userModel
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
    let stallProductList: productModel[] = userAPIMock.getStall()
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
  const user: userModel = useLoaderData() as userModel

  return (
    <main className="content">
      <Description user={user} />
      <UserStall stall={user.stall}/>
      <UserComments />
    </main>
  )
}