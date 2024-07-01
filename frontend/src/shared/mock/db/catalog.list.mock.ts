import { productModel } from "../db/product.list.mock"
import productsAPIMock from "../prouduct.api.mock"
export interface rangeFiltersModel {
  type: "range"
  title: string
  name: string
}

export interface selectorFiltersModel {
  type: "selector"
  name: string
  title: string
  values: string[]
}

export type filtersModel = (rangeFiltersModel | selectorFiltersModel)[]

export interface catalogModel {
  products: productModel[] | string
  filters: filtersModel
}
   
export interface catalogListModel {
  [key: string]: catalogModel
}

const catalogList: catalogListModel = {
  main: {
    products: productsAPIMock.getAllProducts(),
    filters: [
      {
        type: "range",
        title: "Цена",
        name: "cost",
      },
    ]
  },
  toys: {
    products: "Игрушки",
    filters: [
      {
        name: "Age",
        title: "Возраст",
        type: "selector",
        values: ["all", "+16" ,"12", "6", "-3"],
      },
      {
        name: "material",
        title: "Материал",
        type: "selector",
        values: ["Пух", "Пластик" ,"Картон"],
      },
    ]
  },
  electronics: {
    products: "Электроника",
    filters: [
      {
        type: "selector",
        name: "manufacturer",
        title: "производитель",
        values: ["Samsung" ,"apple", "Poco"],
      },
      {
        type: "selector",
        name: "Series",
        title: "Серия",
        values: ["A12" ,"A11", "A10"],
      },
      {
        type: "range",
        title: "Цена",
        name: "cost",
      },
      {
        type: "range",
        title: "Аккумулятор",
        name: "battery",
      }
    ]
  },
  cars: {
    products: productsAPIMock.getAllProducts(),
    filters: [
      {
        type: "selector",
        title: "Марки",
        name: "mark",
        values: ["all" ,"skoda", "BMW", "sparkle", "lamborghini"],
      },
      {
        type: "selector",
        title: "Состояние",
        name: "Status",
        values: ["all" ,"B/y", "New", "Broken"],
      },
      {
        type: "range",
        title: "Цена",
        name: "cost",
      },
    ]
  },
}
export default catalogList