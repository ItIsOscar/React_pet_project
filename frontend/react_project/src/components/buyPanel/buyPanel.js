import "./buyPanel.scss"

export default function BuyPanel() {
  return (
    <div className="panel_border">
      <div className="content buyPanel">
        <ul className="productList">
          <li><h3>Ваша корзина</h3></li>
          <li>2 товара <span>2131000 сум</span></li>
          <li>Chevrolet Spark <span>12000000 сум</span></li>
          <li>Samsung A12 <span>9131000 сум</span></li>
        </ul>
        <ul className="boughtType">
          <li><h3>Тип оплаты</h3></li>
          <li>Карточка</li>
          <li>Добавить</li>
        </ul>
      </div>
    </div>
  )
}