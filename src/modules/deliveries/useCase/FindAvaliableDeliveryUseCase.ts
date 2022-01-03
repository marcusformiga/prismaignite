import { prisma } from "../../../database/prisma/prismaClient";

export class FindAvaliableDeliveryUseCase {
  public async execute(){
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null
      }
    })
    return deliveries
  }
}