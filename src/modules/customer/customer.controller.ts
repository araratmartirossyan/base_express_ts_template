import { Router, Request, Response } from "express";
import { getCustomerById } from "./customer.service";

const customerController = Router();

interface GetCustomerRequest extends Request {
  params: {
    id: string;
  };
}

customerController.get(
  "/:id",
  async (req: GetCustomerRequest, res: Response) => {
    try {
      const customerId = req.params.id;

      if (!customerId) {
        res.status(401).send("Customer id is required!");
        return;
      }

      const customer = await getCustomerById(customerId);

      res.status(200).send(customer);
    } catch (error) {
      res.status(400).send({
        error: "Something happened",
        message: "Error handler not defined for route getCustomerById",
      });
    }
  }
);

export default customerController;
