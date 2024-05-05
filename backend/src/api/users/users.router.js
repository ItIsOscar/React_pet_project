import express from 'express';
import fs from 'fs';
import { resolve } from 'path';


const router = express.Router();

const assignAcrossHeader = (res) => {
    res.set('Access-Control-Allow-Origin', '*');
}

const getAll = (req, res) => {
    fs.readFile(resolve('src', 'db', 'users.txt'), 'utf-8', (err, data) => {
        const users = JSON.parse(data);
        assignAcrossHeader(res);
        return res.status(200).json(users);
    });
};

router.get('/getAll', getAll);

export default router;