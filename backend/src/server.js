import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

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
    res.status(200).json({
        response: [
            {
              pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
              name: "Chevrolet Spark",
              cost: "12000000 сум",
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
              cost: "12000000 сум",
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
              cost: "12000000 сум",
              seller: "USA agenty",
              characteristics: [
                {type: "status",  value: "б/у" },
                {type: "color", value: "green"},
                {type: "transmissionType", value: "12 LMBA"}
              ]
            }
        ]
    });
});

app.get('/api/productList/favourite', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        response: [
            {
              pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
              name: "Chevrolet Spark",
              cost: "12000000 сум",
              seller: "USA agenty",
              characteristics: [
                {type: "status",  value: "б/у" },
                {type: "color", value: "green"},
                {type: "transmissionType", value: "12 LMBA"}
              ]
            }
        ]
    });
});

app.get('/api/productList/basket', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        response: [
            {
              pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
              name: "Chevrolet Spark",
              cost: "12000000 сум",
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
                cost: "12000000 сум",
                seller: "USA agenty",
                characteristics: [
                  {type: "status",  value: "б/у" },
                  {type: "color", value: "green"},
                  {type: "transmissionType", value: "12 LMBA"}
                ]
              }
        ]
    });
});

app.delete('/api/users/all', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.sendStatus(200);
});

app.listen(2000, () => {
    console.log('Server is running');
});