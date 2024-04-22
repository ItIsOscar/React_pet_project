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