import { hash } from "bcryptjs";
import { prisma } from "../../../database/prisma/prismaClient";
import { AppError } from "../../../errors/AppError";

interface CreateDeliveryMan {
  username: string
  password: string
}
export class CreateDeliveryManUseCase {
  public async execute({username, password}: CreateDeliveryMan){
    const deliveryManExists = await prisma.deliveryman.findUnique({
      where: {username}
    })
    if(deliveryManExists){
      throw new AppError(409, "Já existe um entregador cadastrado com o username informado")
    }
    const hashPassword = await hash(password, 10)
    const deliveryMan = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
      
    })
    return deliveryMan
  }
}