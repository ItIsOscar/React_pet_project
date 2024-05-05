import express from 'express';
import fs from 'fs';
import { parse, resolve } from 'path';


const router = express.Router();

const assignAcrossHeader = (res) => {
    res.set('Access-Control-Allow-Origin', '*');
}

const getAll = (req, res) => {
    const products = JSON.parse(fs.readFileSync(resolve('src', 'db', 'products.txt'), { encoding: 'utf-8' }));
    const comments = JSON.parse(fs.readFileSync(resolve('src', 'db', 'comments.txt'), { encoding: 'utf-8' }));
    console.log('PRODUCTS: ', products);
    console.log('COMMENTS: ', comments);
    products.forEach(product => {
        product.comments = product.comments.map(commentId => {
            return comments.find(comment => comment.id === commentId);
        });
    });
    assignAcrossHeader(res);
    res.status(200).json(products);
};

router.use('/getAll', getAll);

export default router;