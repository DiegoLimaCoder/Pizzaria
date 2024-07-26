import { Request, Response } from "express";
import { ListOrderServices } from "../../services/order/ListOrderServices";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listOrderServices = new ListOrderServices();
    const orders = await listOrderServices.execute();

    return res.json(orders);
  }
}

export { ListOrderController };
