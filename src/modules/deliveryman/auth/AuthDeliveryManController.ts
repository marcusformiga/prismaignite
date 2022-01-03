import { Request, Response } from "express";
import { AuthDeliveryManUseCase } from "./AuthDeliveryManUseCase";

export class AuthDeliveryManController {
  public async handle(request: Request, response: Response): Promise<Response>{
    const {username, password} = request.body
    const authDeliveryman = new AuthDeliveryManUseCase()
    const token = await authDeliveryman.execute({username, password})
    return response.status(201).json({token})
  }
}
