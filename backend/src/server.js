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

app.delete('/api/users/all', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.sendStatus(200);
});

app.listen(2000, () => {
    console.log('Server is running');
});