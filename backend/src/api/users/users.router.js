import express from 'express';
import fs from 'fs';
import { resolve } from 'path';


const router = express.Router();

const assignAcrossHeader = (res) => {
    res.set('Access-Control-Allow-Origin', '*');
}

const getAll = (req, res) => {
    const users = JSON.parse(fs.readFileSync(resolve('db', 'users.txt'), { encoding: 'utf-8' }));
    assignAcrossHeader(res);
    return res.status(200).json(users);
};

router.get('/getAll', getAll);

export default router;