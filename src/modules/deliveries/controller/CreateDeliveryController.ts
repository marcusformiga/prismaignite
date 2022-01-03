import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "../useCase/CreateDeliveryUseCase";

export class CreateDeliveryController {
  public async handle(request: Request, response: Response): Promise<Response>{
    const {item_name} = request.body
    const {id_client} = request
    const createDelivery = new CreateDeliveryUseCase()
    const delivery = await createDelivery.execute({item_name, id_client})
    return response.status(201).json(delivery)
  }
}