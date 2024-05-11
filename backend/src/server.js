import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './api/api.router.js';


const app = express();

app.use(bodyParser.json({ type: 'application/json' }));
app.use('/api', apiRouter);
app.listen(2000, () => {
    console.log('Server is running');
});