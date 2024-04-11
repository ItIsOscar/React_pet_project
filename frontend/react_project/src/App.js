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
import Page404 from "./components/page404/page404";

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
    errorElement: <Page404 />,
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
      },

    ]
  },
  
])

export default function App() {
  let [formOfProduct, changeForm] = useState("line")
  let [lastScroll, setLastScroll] = useState(0)

  let [firstUp, setFirstUp] = useState({
    is: false,
    value: 0
  })
  let [firstDown, setFirstDown] = useState({
    is: false,
    value: 9999
  })

  window.onscroll = () => {
    let nav = document.querySelector(".navigation")
    let currentScroll = window.scrollY
    let curLastUp = 99999
    let curLastDown = 0
    setLastScroll(currentScroll)

    if(currentScroll > lastScroll) {
      curLastDown = currentScroll
      if(firstUp.is) {
        setFirstUp({
          is: false,
          value: 0
        })
      }
      if(!firstDown.is) {
        setFirstDown({
          is: true,
          value: curLastDown
        })
      }
    } 
    else {
      curLastUp = currentScroll
      if(!firstUp.is) {
        setFirstUp({
          is: true,
          value: curLastUp
        })
      }
      if(firstDown.is) {
        setFirstDown({
          is: false,
          value: 9999
        })
      }
    }

    if(firstDown.value < curLastDown - 200) {
      console.log("down")
      nav.style.transform = "translate(0, -100%)"
    } 
    if(firstUp.value > curLastUp + 500) {
      console.log("first", firstUp.value, "cur", curLastUp + 500)
      nav.style.transform = "translate(0, 0)"
    }
    if(currentScroll == 0) {
      nav.style.transform = "translate(0, 0)"
    }

    // console.log("lastScroll", lastScroll)
    // console.log("scrollY", currentScroll)
    // console.log("curLastDown",curLastDown)  
    // console.log("curLastup", curLastUp)  
    // console.log("fistup", firstUp)  
    // console.log("fistDown", firstDown)  
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