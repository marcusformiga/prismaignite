import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "../useCase/UpdateEndDateUseCase";
export class UpdateEndDateController {
  public async handle(request: Request, response:Response): Promise<Response>{
    const {id: id_delivery} = request.params
    const {id_deliveryman} = request
    const updateEndDateUseCase = new UpdateEndDateUseCase()
    const deliveries = await updateEndDateUseCase.execute({id_delivery, id_deliveryman})
    return response.json(deliveries)
  }
}
