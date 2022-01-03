import {Request, Response} from "express"
import { FindOneDeliveryManUseCase } from "../useCase/FindOneDeliveryManUseCase"

export class FindOneDeliveryManController {
  public async handle(request: Request, response: Response): Promise<Response>{
    const username = request.params.username
    const findOneDeliveryMan = new FindOneDeliveryManUseCase()
    const deliveryMan = await findOneDeliveryMan.execute(username)
    return response.json(deliveryMan)
  }
}
