import express from 'express';
import usersRouter from './users/users.router.js';
import productsRouter from './products/products.router.js';


const router = express.Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);

export default router;