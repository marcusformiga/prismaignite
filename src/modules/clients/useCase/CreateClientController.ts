import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  public async handle(request: Request, response: Response): Promise<Response>{
    const {username, password} = request.body
    const createClient = new CreateClientUseCase()
    const client = await createClient.execute({username, password})
    return response.status(201).json(client)
  }
}
