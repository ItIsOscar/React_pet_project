import { useLoaderData } from "react-router"
import { productModel } from "../../shared/mock/db/product.list.mock";

import Title from "../../subComponents/title/title";
import ProductList from "../../subComponents/productList/productList";

export default function Delivery() {
  const products = useLoaderData() as productModel[]
  return (
    <main className="content">
      <Title>Доставка</Title>
      <ProductList list={products}/>
    </main>
  )
}