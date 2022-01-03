import { prisma } from "../../../database/prisma/prismaClient";
import { AppError } from "../../../errors/AppError";

export class FindOneClientUseCase {
  public async execute(username: string){
    const clientExist = await prisma.clients.findUnique({where: {username}})
    console.log(clientExist)
    if(!clientExist){
      throw new AppError(404, "Cliente com o username informado nao existe")
    }
    return clientExist
  }
}