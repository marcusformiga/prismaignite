import { Request, Response } from "express";
import { FindAvaliableDeliveryUseCase} from "../useCase/FindAvaliableDeliveryUseCase";

export class FindAvaliableDeliveryController {
  public async handle(request: Request, response:Response): Promise<Response>{
    const findAvaliableDeliveryUseCase = new FindAvaliableDeliveryUseCase()
    const deliveries = await findAvaliableDeliveryUseCase.execute()
    return response.json(deliveries)
  }
}