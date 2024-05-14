import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "./components/main/main";
import Basket from "./components/basket/basket";
import Delivery from "./components/delivery";
import Favourite from "./components/favourite";
import ProductCard from "./components/productCard/productCard";
import Profile from "./components/profile/profile";
import SignOrLogIn from "./components/SingOrLogIn/SingOrLogIn";
import Page404 from "./components/page404/page404";
import Body from "./components/routerConnector/routerConnector";
import catalogList from "./shared/mock/catalog/catalog.list.mock";


async function getData(URL) {
  let result = await fetch(`${URL}`, {
    method: "GET",
  })
  return result.json()
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Main />,
        loader: () =>  catalogList.main
      },
      {
        path: "favourite",
        element: <Favourite />,
        loader: () => getData("http://localhost:2000/api/products/getAll")
      },
      {
        path: "basket",
        element: <Basket />,
        loader: () => getData("http://localhost:2000/api/products/getAll"),
        children: [
          {
            path: "entry",
            element: null
          }
        ]
      },
      {
        path: "delivery",
        element: <Delivery />,
        loader: () => getData("http://localhost:2000/api/products/getAll")
      },
      {
        path: "cardProduct/:id",
        loader: ({ params }) => getData("http://localhost:2000/api/products/getAll"),
        element: <ProductCard />
      },
      {
        path: "catalog/:type",
        loader: ({ params }) => catalogList[params.type],
        element: <Main />
      }
    ]
  },
])
export default router