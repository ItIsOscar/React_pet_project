


import "./App.scss"
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignOrLogIn from './components/SingOrLogIn/SingOrLogIn';
import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import Filters from './components/filters/filters';
import ProductList from "./components/productList/productList";
import BuyPanel from "./components/buyPanel/buyPanel";
import Title from "./components/shared/title/title";

const site = {
  Main: (formOfProduct) => (
    <>
      <Banner />
      <div className='content'>
        <Filters />
        <ProductList status={"line"}/>
      </div>  
    </>
  ),
  favourite: () => (
    <div className="content">
      <Title>Избранное</Title>
      <ProductList status={"line"}/>
      <div className="recommend">
        <h2>Подойдет также</h2>
        <ProductList status={"line"} />
      </div>
    </div>
  ),
  basket: () => (
    <>
      <div className="content">
        <Title>Корзина</Title>  
        <ProductList status={"line"}/>
      </div>
      <BuyPanel />
    </>
  ),
  delivery: () => (
    <div className="content">
      <ProductList status={"line"} />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: site.Main()
  },
  {
    path: "favourite",
    element: site.favourite()
  },
  {
    path: "basket",
    element: site.basket()
  },
  {
    path: "delivery",
    element: site.delivery()
  },
])

export default function App() {
  let [formOfProduct, changeForm] = useState("line")

  document.addEventListener("keydown", (e) => {
    if(e.key == "t") {
      console.log("change")
      changeForm(formOfProduct == "line" ? "squad" : "line")
    }
  })

  return (
    <div>
      <Navigation />
      <RouterProvider router={router} />
    </div>
  );
}

// 2 >>