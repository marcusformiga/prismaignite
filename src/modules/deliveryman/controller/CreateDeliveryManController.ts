import { Request, Response } from "express";
import { CreateClientUseCase } from "../../clients/useCase/CreateClientUseCase";
import { CreateDeliveryManUseCase } from "../useCase/CreateDeliveryManUseCase";

export class CreateDeliveryManController {
  public async handle(request: Request, response: Response): Promise<Response>{
    const {username, password} = request.body
    const createDeliveryMan = new CreateDeliveryManUseCase()
    const deliveryMan = await createDeliveryMan.execute({username, password})
    return response.status(201).json(deliveryMan)

  }
}
