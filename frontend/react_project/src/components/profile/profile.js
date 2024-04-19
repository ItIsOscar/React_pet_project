import "./profile.scss"

import Comments from "../subComponents/comment/comment";
import ProductList from "../subComponents/productList/productList";
import Title from "../subComponents/shared/title/title";

export default function Profile({user}) {
  return (
    <div className="content">
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
      <div className="other">
      <Title margin="2rem 1rem 1rem 1rem">Объявление продавца</Title>
        <div>
          <ProductList status="line"/>  
        </div>
        <Title margin="2rem 1rem 1rem 1rem">Комментарии</Title>
        {/* <Comments comments={comments} />  */}
      </div> 
    </div>
  )
}