import { useLoaderData } from "react-router"
import { PRODUCT } from "../../shared/mock/products/product.list.mock";

import Title from "../../subComponents/title/title";
import ProductList from "../../subComponents/productList/productList";

export default function Delivery() {
  const products = useLoaderData() as PRODUCT[]
  return (
    <main className="content">
      <Title>Доставка</Title>
      <ProductList list={products}/>
    </main>
  )
}