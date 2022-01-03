import { Request, Response } from "express";
import { FindOneClientUseCase } from "./FindOneClientUseCase";

export class FindOneClientController {
  public async handle(request: Request, response: Response):Promise<Response>{
    const username = request.params.username
    const findOneClient = new FindOneClientUseCase()
    const client = await findOneClient.execute(username)
    return response.json(client)

  }
}