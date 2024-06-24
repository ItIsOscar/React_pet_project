import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "./outlet/main/main";
import Basket from "./outlet/basket/basket";
import Delivery from "./outlet/delivery/delivery";
import Favourite from "./outlet/favourite/favourite";
import ProductCard from "./outlet/productCard/productCard";
import Page404 from "./outlet/page404/page404";
import Body from "./routerConnector";
import catalogList, { ICatalog } from "./shared/mock/catalog/catalog.list.mock";
import productsMock from "./shared/mock/products/prouduct.methods.mock";
import userMock from "./shared/mock/users/user.methods.mock";
import Profile from "./outlet/profile/profile";
import { PRODUCT } from "./shared/mock/products/product.list.mock";
import { USER } from "./shared/mock/users/users.list.mock";


async function getData(URL: string) {
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
        loader: ({params}): PRODUCT => productsMock.findProductsById(params.id!),
        element: <ProductCard />
      },
      {
        path: "profile/:id",
        loader: ({ params }): USER => userMock.user,
        element: <Profile />
      },
      {
        path: "catalog/:type",
        loader: ({ params }): ICatalog => catalogList[params.type!],
        element: <Main />
      }
    ]
  },
])
export default router