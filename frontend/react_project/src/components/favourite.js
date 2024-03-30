import ProductList from "./subComponents/productList/productList"
import Title from "./subComponents/shared/title/title"

export default function Favourite() {
  return (
    <div className="content">
      <Title>Избранное</Title>
      <ProductList status={"line"}/>
      <div className="recommend">
        <h2>Подойдет также</h2>
        <ProductList status={"line"} />
      </div>
    </div>
  )
}