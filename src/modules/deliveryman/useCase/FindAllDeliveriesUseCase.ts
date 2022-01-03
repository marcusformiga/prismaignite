import { prisma } from "../../../database/prisma/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
  public async execute(id_deliveryman: string){
    const deliveries = await prisma.deliveryman.findMany({
      where: {id: id_deliveryman},
      select: {
        Deliveries: true,
        id: true,
        username: true
      }
    })
    return deliveries
    
  }
}