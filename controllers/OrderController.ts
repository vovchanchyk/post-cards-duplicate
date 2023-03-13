import { Response } from "express";
import Order from "../models/Order";
import OrderService from "../services/OrderService";
import { AppRequest } from "../types/basic";
import { CreateOrderRequestBody } from "../types/order";
import Controller from "./Controller";

class OrderController extends Controller {

    async create(req: AppRequest<CreateOrderRequestBody>, res: Response) {

        try {
            const { body } = req;
            const NewOrder = await OrderService.create(body)
            res.status(200).send(NewOrder);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };

    };
};

export default new OrderController();