import productsMock from "../products/prouduct.methods.mock"

const catalogList = {
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
        name: "manufacturer",
        title: "производитель",
        type: "selector",
        values: ["Samsung" ,"apple", "Poco"],
      },
      {
        name: "Series",
        title: "Серия",
        type: "selector",
        values: ["A12" ,"A11", "A10"],
      },
      {
        type: "rage",
        title: "Цена",
        name: "cost",
      },
      {
        type: "rage",
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