import BuyPanel from "./subComponents/buyPanel/buyPanel";
import ProductList from "./subComponents/productList/productList";
import Title from "./subComponents/shared/title/title";

export default function Basket() {
  return (
    <>
      <div className="content">
        <Title>Корзина</Title>  
        <ProductList status={"line"}/>
      </div>
      <BuyPanel />
    </>
  )
}