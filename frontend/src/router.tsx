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
import type { catalogModel } from "./shared/mock/db/catalog.list.mock";
import productsAPIMock from "./shared/mock/prouduct.api.mock";
import userAPIMock from "./shared/mock/user.api.mock";
import Profile from "./outlet/profile/profile";
import type { productModel } from "./shared/mock/db/product.list.mock";
import type { userModel } from "./shared/mock/db/users.list.mock";
import catalogAPIMock from "./shared/mock/catalog.api.mock";


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
        loader: () =>  catalogAPIMock.getCatalogByName("main")
      },
      {
        path: "favourite",
        element: <Favourite />,
        loader: () => ({
          favouriteList: userAPIMock.getFavourite(),
          products: productsAPIMock.getAllProducts()
        })
      },
      {
        path: "basket",
        element: <Basket />,
        loader: () => userAPIMock.getBasket(),
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
        loader: ({ params }): productModel | null =>  productsAPIMock.getProductsByID(Number(params.id)),
        element: <ProductCard />
        // errorElement: <NopeCard />
      },
      {
        path: "profile/:id",
        loader: ({ params }): userModel => userAPIMock.getAuthUser(),
        element: <Profile />
      },
      {
        path: "catalog/:type",
        loader: ({ params }): catalogModel => catalogAPIMock.getCatalogByName(params.type!),
        element: <Main />
      }
    ]
  },
])
export default router