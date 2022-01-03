import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { secretDeliveryman } from "../deliveryman/auth/AuthDeliveryManUseCase"
import { verify } from "jsonwebtoken";
interface PayLoad {
  sub: string
}
export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction){
  const authHeader = request.headers.authorization
  if(!authHeader){
    throw new AppError(401,"Token não enviado")
  }
  const [bearer, token] = authHeader.split(" ")
  try{
    const {sub} = await verify(token, secretDeliveryman) as PayLoad
    request.id_deliveryman = sub
    next()

  }catch(err){
    console.log(err)
  }

}