import Order from "../models/Order";
import { CreateOrderRequestBody } from "../types/order";


class OrderService {

  async create(body: CreateOrderRequestBody) {

    const {
      name,
      surname,
      email,
      country,
      city,
      address,
      postcode,
      orderItems,
      price
    } = body;

    return await Order.create({
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
  };
};

export default new OrderService();