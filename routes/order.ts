import express from 'express';
import OrderController from '../controllers/OrderController';
import PostOrderSchema from '../schemas/OrderSchema';

const orderRouter = express.Router();

orderRouter.get('/orders');
orderRouter.get('/orders/:id');
orderRouter.delete('/orders/:id');

orderRouter.post('/orders', PostOrderSchema, OrderController.create);

export default orderRouter;


