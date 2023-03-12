import express from 'express';
import Order from '../models/Order';


const orderRouter = express.Router();

orderRouter.get('/orders');
orderRouter.get('/orders/:id');
orderRouter.delete('/orders/:id');

orderRouter.post('/orders', async (req, res) => {

  console.log(req.body, '=========')
    try {
      const {
        name,
        surname,
        email,
        country,
        city,
        address,
        postcode,
        orderItems,
        price,
      } = req.body;
  
     const NewOrder = await Order.create({
        orderItems,
        name,
        surname,
        email,
        deliveryAddress: {
          country,
          city,
          address,
          postcode,
        },
        price,
      });

  
      res.status(200).send(NewOrder);
    } catch (error) {
  
      console.error(error);
      res.status(500).send(error);
    };
});



export default orderRouter;


