import "./App.scss"

import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./components/main";
import Basket from "./components/basket";
import Delivery from "./components/delivery";
import Favourite from "./components/favourite";
import { Button } from "./button";
import ProductCard from "./components/productCard/productCard";
import Profile from "./components/profile/profile";
import SignOrLogIn from "./components/SingOrLogIn/SingOrLogIn";
import Page404 from "./components/page404/page404";
import RouterConnector from "./components/routerConnector/routerConnector";

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
    element: <RouterConnector />,
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