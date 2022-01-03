import { Request, Response } from "express";
import { AuthClientUseCase } from "./AuthClientUseCase";

export class AuthClientController {
  public async handle(request: Request, response: Response): Promise<Response>{
    const {username, password} = request.body
    const authClient = new AuthClientUseCase()
    const token = await authClient.execute({username, password})
    return response.status(201).json({token})
  }
}
