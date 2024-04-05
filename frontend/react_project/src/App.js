import "./App.scss"

import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { products,
  basketList, 
  deliveryList, 
  favouriteList,
  testList,
  users, 
} from "./assets/date";

import Navigation from './components/subComponents/navigation/navigation';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    loader: () => (returnData(products)),
    children: [
      {
        path: "/",
        element: <Main />,
        loader: () => (returnData(products))
      },
      {
        path: "favourite",
        element: <Favourite />,
        loader: () => (returnData(favouriteList))
      },
      {
        path: "entry",
        element: <SignOrLogIn />,
      },
      {
        path: "basket",
        element: <Basket />,
        loader: () => (returnData(basketList))
      },
      {
        path: "delivery",
        element: <Delivery />,
        loader: () => (returnData(deliveryList))
      },
      {
        path: "cardProduct/:id",
        loader: ({ params }) => (returnData(products[params.id])), 
        element: <ProductCard />
      }
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
// 2 >>