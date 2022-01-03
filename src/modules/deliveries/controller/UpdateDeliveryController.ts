import { Request, Response } from "express";
import { UpdateDeliveryUseCase } from "../useCase/UpdateDeliveryUseCase";

export class UpdateDeliveryController {
  public async handle(request: Request, response:Response): Promise<Response>{
    const {id: id_delivery} = request.params
    const {id_deliveryman} = request
    const updateDeliveryUseCase = new UpdateDeliveryUseCase()
    const deliveries = await updateDeliveryUseCase.execute({id_delivery, id_deliveryman})
    return response.json(deliveries)
  }
}