import { checkSchema } from 'express-validator';
import { OrderItem } from '../types/order';

const PostOrderSchema = checkSchema({

  name: {
      isString: true,
      notEmpty: true,
      
  },
  surname: {
      isString: true,
      notEmpty: true,
  },
  email: {
      isString: true,
      notEmpty: true,
  },
  country: {
      isString: true,
      notEmpty: true,
  },
  city: {
      isString: true,
      notEmpty: true,
  },
  address: {
      isString: true,
      notEmpty: true,
  },
  postcode: {
      isString: true,
      notEmpty: true,
  },
  orderItems: {
      isArray: {
          options: { min: 1 },
        },
        custom: {
          options: (orderItems) => {
              return orderItems.every(
                (item:  OrderItem) =>
                  typeof item.cardId === 'string' &&
                  typeof item.title === 'string' &&
                  typeof item.count === 'number' &&
                  item.count > 0
              );
            }}
  },
  price: {
      isNumeric:true,
      notEmpty: true,
  },
});

export default PostOrderSchema;