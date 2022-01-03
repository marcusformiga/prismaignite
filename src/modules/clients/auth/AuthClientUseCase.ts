import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prisma/prismaClient";
import { AppError } from "../../../errors/AppError";

interface AuthenticateClient {
  username: string
  password: string
}
export const secretClient = "hsaehsaeuhaseasdas23213@#@!"
export class AuthClientUseCase {
  public async execute({username, password}: AuthenticateClient){
    const client = await prisma.clients.findUnique({
      where: {username}
    })
    if(!client){
      throw new AppError(401, "Cliente com o password/username informados nao existem")
    }
    const passwordMatch = await compare(password, client.password)
    if(!passwordMatch){
      throw new AppError(401, "Cliente com o password/username informados nao existem")
    }
    const token = await sign({username}, secretClient, {
      subject: client.id,
      expiresIn: "15min"
    })
    return token

  }
  // verificar se username existe
  // verificar se password da "match" com o que esta hasheado
  // gerar token
}