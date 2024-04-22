const comments = [
  {
    user: 1,
    grade: 4,
    content: "Без никаких дефектов, цена оправдана",
    date: "14 марта 2024 года",
    children: ""
  },
  {
    user: 1,
    grade: 4,
    content: "Без никаких дефектов, цена оправдана",
    date: "14 марта 2024 года",
    children: ""
  }
]

const PRODUCT_LIST = [
  {
    id: 0,
    pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
    name: "Chevrolet Spark",
    cost: {
      value: 12000000,
      currency: "сум",
    },
    seller: 1,
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ],
    comments: comments
  },
  {
    id: 1,
    pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
    name: "Chevrolet Spark",
    cost: {
      value: 12000000,
      currency: "сум"
    },
    seller: 1,
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ],
    comments: comments
  },
  {
    id: 2,
    pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
    name: "Chevrolet Spark",
    cost: {
      value: 12000000,
      currency: "сум"
    },
    seller: 1,
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ],
    comments: comments
  }
]
export default PRODUCT_LIST