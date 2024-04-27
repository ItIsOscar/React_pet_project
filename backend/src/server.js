import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

const users = [
  {
    name: "USA Agenty",
    pic: null,
    number: "+99804525409",
    discription: "РАвыаоыврыфпвравфыа",
    // products: products
  },
  {
    name: "Ваня",
    pic: null,
    number: "+9989506409",
    discription: "РАвыаоыврыфпвравфыа",
    // products: null
  }
]

const comments = [
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

app.get('/api/users/all', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        users: {
            chingiz: {
                role: 'admin',
                age: 40,
                status: 'inactive'
            },
            oscar: {
                role: 'admin',
                age: 16,
                status: 'active'
            },
            dimon: {
                role: 'user',
                age: 100,
                status: 'active'
            }
        }
        
    });
});

app.get('/api/productList/all', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json([
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
        pic: "https://carsweek.ru/upload/resize_cache/iblock/63a/1200_900_1/63a847f13331ac3da043716975e285a0.jpg",
        name: "Damaz",
        description: 
          `Продам или сдам в аренду с выкупом.
          дамас 2011 года, мотор после капиталки.
          по кузову сделано: полностью освежен, все гнилые места поменяны.
          По салону: обклеен кожзамом, установлены колонки пионер.
          
          Вариант 1:
          Предоплата 2000$
          24 месяцев по 235$
          
          Вариант 2:
          Предоплата 1500$
          24 месяцев по 270$
          
          В аренду: Ташкент или Ташкентская область`,
          cost: {
            value: 5699999,
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
        pic: "https://avatars.mds.yandex.net/get-vertis-journal/3934100/2020-05-06-2c5a909f3d3f483d8dfe9b88828afa40.jpeg_1622736290956/orig",
        name: "Дамас(Автосалон)",
        description: "",
        cost: {
          value: 4e6,
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
        pic: "https://auto.ironhorse.ru/wp-content/uploads/2015/09/nexia-r3-550x300.jpg",
        name: "Ravon",
        description: "",
        cost: {
          value: 4000,
          currency: "Долларов"
        },
        seller: 1,
        characteristics: [
          {type: "status",  value: "б/у" },
          {type: "color", value: "green"},
          {type: "transmissionType", value: "12 LMBA"}
        ],
        comments: comments
      }
  ]);
});

app.get('/api/productList/favourite', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json([
      {
        pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
        name: "Chevrolet Spark",
        cost: {
          value: 12000000,
          currency: "сум"
        },
        seller: "USA agenty",
        characteristics: [
          {type: "status",  value: "б/у" },
          {type: "color", value: "green"},
          {type: "transmissionType", value: "12 LMBA"}
        ]
      }
  ]);
});

app.get('/api/productList/basket', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json([
      {
        pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
        name: "Chevrolet Spark",
        cost: {
          value: 12000000,
          currency: "сум"
        },
        seller: "USA agenty",
        characteristics: [
          {type: "status",  value: "б/у" },
          {type: "color", value: "green"},
          {type: "transmissionType", value: "12 LMBA"}
        ]
      },
      {
          pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
          name: "Chevrolet Spark",
          cost: {
          value: 12000000,
          currency: "сум"
        },
          seller: "USA agenty",
          characteristics: [
            {type: "status",  value: "б/у" },
            {type: "color", value: "green"},
            {type: "transmissionType", value: "12 LMBA"}
          ]
        }
  ]);
});

app.delete('/api/users/all', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.sendStatus(200);
});
  
app.get('/api/comments/all', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.status(200).json(comments)
});

app.get('/api/comments/:id', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.status(200).json(comments[req.params.id])
});

app.listen(2000, () => {
    console.log('Server is running');
});