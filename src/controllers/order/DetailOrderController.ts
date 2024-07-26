import { Request, Response } from "express";
import { DetailOrderServices } from "../../services/order/DetailOrderServices";

class DetailOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const detailOrderServices = new DetailOrderServices();

    const orders = await detailOrderServices.execute({ order_id });

    return res.json(orders);
  }
}

export { DetailOrderController };
