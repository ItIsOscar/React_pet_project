export const capchaPic= [
    {
        src: "https://cs13.pikabu.ru/post_img/2019/04/19/7/1555673350180265083.jpg",
        itsCar: true
    }, 
]

export const users = [
  {
    name: "USA Agenty",
    pic: undefined,
    number: "+99804525409",
    discription: "РАвыаоыврыфпвравфыа",
    // products: products
  },
  {
    name: "Ваня",
    pic: undefined,
    number: "+9989506409",
    discription: "РАвыаоыврыфпвравфыа",
    // products: null
  }
]

export const comments = [
  {
    user: users[1],
    grade: 4,
    content: "Без никаких дефектов, цена оправдана",
    date: "14 марта 2024 года",
    children: ""
  },
  {
    user: users[1],
    grade: 4,
    content: "Без никаких дефектов, цена оправдана",
    date: "14 марта 2024 года",
    children: ""
  }
]

export const products = [
    {
      id: 0,
      pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
      name: "Chevrolet Spark",
      cost: "12000000 сум",
      description: "Chevrolet Spark — малолитражный автомобиль, выпускаемый General Motors с 2005 года. До 2015 года был известен на некоторых рынках, как Daewoo Matiz. А с 2015 до 2020 год за пределы Узбекистана поставлялся под маркой Ravon R2.",
      saller: users[0],
      location: "Шота Руставели",
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
      cost: "12000000 сум",
      description: "Chevrolet Spark — малолитражный автомобиль, выпускаемый General Motors с 2005 года. До 2015 года был известен на некоторых рынках, как Daewoo Matiz. А с 2015 до 2020 год за пределы Узбекистана поставлялся под маркой Ravon R2.",
      saller: users[0],    
      location: "Шота Руставели",
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
      cost: "12000000 сум",
      description: "Chevrolet Spark — малолитражный автомобиль, выпускаемый General Motors с 2005 года. До 2015 года был известен на некоторых рынках, как Daewoo Matiz. А с 2015 до 2020 год за пределы Узбекистана поставлялся под маркой Ravon R2.",
      saller: users[0],
      location: "Шота Руставели",
      characteristics: [
        {type: "status",  value: "б/у" },
        {type: "color", value: "green"},
        {type: "transmissionType", value: "12 LMBA"}
      ],
      comments: comments
    }
]

export const favouriteList = [
  products[0],
  products[1]
] 

export const basketList = [
  products[1],
  products[2]
]

export const deliveryList = [
  products[1],
  products[2]
]
