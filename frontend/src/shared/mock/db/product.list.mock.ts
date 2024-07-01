import USERS_LIST, { userModel } from "./users.list.mock"


export interface COMMENT {
  user: userModel 
  grade: number
  content: string
  date: string
  children: string
}

const comments: COMMENT[] = [
  {
    user: USERS_LIST[1],
    grade: 4,
    content: "Без никаких дефектов, цена оправдана",
    date: "14 марта 2024 года",
    children: ""
  },
  {
    user: USERS_LIST[1],
    grade: 4,
    content: "Без никаких дефектов, цена оправдана",
    date: "14 марта 2024 года",
    children: ""
  }
]

interface characteristics_interface {
  type: string
  value: string
}

export interface productModel {
  id: number
  pic: string
  name: string
  cost: {
    value: number
    currency: string
  }
  description: string
  seller: userModel
  characteristics: characteristics_interface[]
  comments: COMMENT[]
}

const PRODUCT_LIST: productModel[] = [
  {
    id: 0,
    pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
    name: "Chevrolet Spark",
    cost: {
      value: 12000000,
      currency: "сум",
    },
    description: 
      `Moshina modeli:# Spark Pozitsiya: Avtomat
      Kraska: Toza
      Rangi: Oq
      Yil: 2022
      Probeg: 42.000Km
      Yoqilg i: Benzin
      Narxi: 10.800$-= Kelishamiz=-`,
    seller: USERS_LIST[1],
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "mark",  value: "spark" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ],
    comments: comments
  },
  {
    id: 1,
    pic: "https://carsweek.ru/upload/resize_cache/iblock/63a/1200_900_1/63a847f13331ac3da043716975e285a0.jpg",
    name: "Damaz",
    cost: {
      value: 56999999,
      currency: "сум"
    },
    description: 
      `Damas оснащаются двигателем объёмом 0,8 л мощностью в 38 л.с и механической КПП. В качестве заказного оснащения предлагается кондиционер. Сидения в салоне расположены друг за другом в три ряда по схеме: 2+3+2. Грузоподъёмность - 560 килограмм.[1] Так же выпускается мини-грузовик Labo. Коробка передач — пятиступенчатая механическая. Силовой агрегат расположен продольно, под полом в передней части кузова, привод — на задние колеса.`,
    seller: USERS_LIST[1],
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "mark",  value: "damaz" },
      {type: "color", value: "white"},
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
    description: "Крутая машина! Имба просто!",
    seller: USERS_LIST[1],
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "mark",  value: "spark" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ],
    comments: comments
  },
  {
    id: 3,
    pic: "https://auto.ironhorse.ru/wp-content/uploads/2015/09/nexia-r3-550x300.jpg",
    name: "Ravon",
    description: "RAVON Bu ravish 'yur-', 'bor-' maʼnosini anglatadigan tojikcha raftan feʼlining (ТжРС, 322) rav hozirgi zamon asosiga (ТжРС, 317) -on qoʻshimchasini (ТжРС, 543) qoʻshib hosil qilingan boʻlib, 'bir tekisda', 'silliq' maʼnosini anglatadi (OʻTIL, 1,610).",
    cost: {
      value: 4000,
      currency: "Долларов"
    },
    seller: USERS_LIST[1],
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "mark",  value: "ravon" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ],
    comments: comments
  },
  {
    id: 4,
    pic: "https://auto.ironhorse.ru/wp-content/uploads/2015/09/nexia-r3-550x300.jpg",
    name: "Ravon",
    description: "",
    cost: {
      value: 4000,
      currency: "Долларов"
    },
    seller: USERS_LIST[1],
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "mark",  value: "ravon" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ],
    comments: comments
  }
]
export default PRODUCT_LIST