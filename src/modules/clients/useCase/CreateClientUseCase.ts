import { prisma } from "../../../database/prisma/prismaClient";
import {hash} from "bcryptjs"
import { AppError } from "../../../errors/AppError";

interface CreateClient {
  username: string
  password: string
}
export class CreateClientUseCase {
  public async execute({username, password}: CreateClient){
    const usernameExists = await prisma.clients.findFirst({
      where: {username}
    })
    if(usernameExists){
      throw new AppError(409,"Cliente com o nome de usuario informado ja existe")
    }
    //console.log(usernameExists)
    const hashPass = await hash(password, 10)
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPass
      }
    })
    return client

  }
}