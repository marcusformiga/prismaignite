import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prisma/prismaClient";
import { AppError } from "../../../errors/AppError";

interface AuthenticateDeliveryman {
  username: string
  password: string
}
export const secretDeliveryman = "hsaehsasedasdsaeuhaseasdas23213@#@!"
export class AuthDeliveryManUseCase {
  public async execute({username, password}: AuthenticateDeliveryman){
    const deliveryman = await prisma.deliveryman.findUnique({
      where: {username}
    })
    if(!deliveryman){
      throw new AppError(401, "Entregador com o password/username informados nao existem")
    }
    const passwordMatch = await compare(password, deliveryman.password)
    if(!passwordMatch){
      throw new AppError(401, "Entregador com o password/username informados nao existem")
    }
    const token = await sign({username}, secretDeliveryman, {
      subject: deliveryman.id,
      expiresIn: "15min"
    })
    return token

  }
  // verificar se username existe
  // verificar se password da "match" com o que esta hasheado
  // gerar token
}