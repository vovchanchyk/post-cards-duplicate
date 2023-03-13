import express from 'express';
import OrderController from '../controllers/OrderController';

const orderRouter = express.Router();

orderRouter.get('/orders');
orderRouter.get('/orders/:id');
orderRouter.delete('/orders/:id');

orderRouter.post('/orders', OrderController.create);

export default orderRouter;


