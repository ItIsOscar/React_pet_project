import "./App.scss"

import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Navigation from './components/navigation/navigation';
import Main from "./components/main";
import Basket from "./components/basket";
import Delivery from "./components/delivery";
import Favourite from "./components/favourite";
import { Button } from "./button";
import ProductCard from "./components/productCard/productCard";
import Profile from "./components/profile/profile";
import SignOrLogIn from "./components/SingOrLogIn/SingOrLogIn";

function returnData(data) {
  return data
}

async function getData(URL) {
  let result = await fetch(`${URL}`, {
    method: "GET",
  })
  return result.json()
} 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Main />,
        loader: () => getData("http://localhost:2000/api/productList/all")
      },
      {
        path: "favourite",
        element: <Favourite />,
        loader: () => getData("http://localhost:2000/api/productList/all")
      },
      {
        path: "entry",
        element: <SignOrLogIn />,
      },
      {
        path: "basket",
        element: <Basket />,
        loader: () => getData("http://localhost:2000/api/productList/all")
      },
      {
        path: "delivery",
        element: <Delivery />,
        loader: () => getData("http://localhost:2000/api/productList/all")
      },
      {
        path: "cardProduct/:id",
        loader: ({ params }) => getData("http://localhost:2000/api/productList/all",),
        element: <ProductCard />
      }
    ]
  },
  
])

export default function App() {
  let [formOfProduct, changeForm] = useState("line")
  window.onscroll = () => {
    let currentScroll = window.scrollY
    console.log("scrollY", currentScroll)
    let nav = document.querySelector(".navigation")
    if(currentScroll != 0) {
      nav.style.transform = "translate3d(0, -100%, 0)"
    } else {
      nav.style.transform = "translate3d(0, 0, 0)"
    }
  }

  document.addEventListener("keydown", (e) => {
    if(e.key == "t") {
      console.log("change")
      changeForm(formOfProduct == "line" ? "squad" : "line")
    }
  })
  return (
    <RouterProvider router={router} />
  );
}
// 2 >>