import { prisma } from "../../../database/prisma/prismaClient";
import { AppError } from "../../../errors/AppError";

export class FindOneDeliveryManUseCase {
  public async execute(username: string){
    const deliverymanExist = await prisma.clients.findUnique({
      where: {username}
    })
    console.log(deliverymanExist)
    if(!deliverymanExist){
      throw new AppError(404, "Entregador com o username informado nao existe")
    }
    return deliverymanExist
  }
}