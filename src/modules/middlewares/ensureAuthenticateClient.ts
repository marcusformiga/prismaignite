import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { secretClient } from "../clients/auth/AuthClientUseCase";
import { verify } from "jsonwebtoken";
interface PayLoad {
  sub: string
}
export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction){
  const authHeader = request.headers.authorization
  if(!authHeader){
    throw new AppError(401,"Token não enviado")
  }
  const [bearer, token] = authHeader.split(" ")
  try{
    const {sub} = await verify(token, secretClient) as PayLoad
    request.id_client = sub
    next()

  }catch(err){
    console.log(err)
  }

}