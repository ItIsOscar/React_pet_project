import { PRODUCT } from "../products/product.list.mock"
import productsMock from "../products/prouduct.methods.mock"
export interface IRangeFilters {
  type: "range"
  title: string
  name: string
}

export interface ISelectorFilters {
  type: "selector"
  name: string
  title: string
  values: string[]
}

export type filtersModel = (IRangeFilters | ISelectorFilters)[]

export interface ICatalogList {
  [key: string]: {
    products: PRODUCT[] |string
    filters: filtersModel
  }
}


const catalogList: ICatalogList = {
  main: {
    products: productsMock.products,
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
    products: productsMock.products,
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