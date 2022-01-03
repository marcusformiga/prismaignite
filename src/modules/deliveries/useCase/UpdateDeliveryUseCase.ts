import { prisma } from "../../../database/prisma/prismaClient";

interface UpdateDelivery {
  id_deliveryman: string
  id_delivery: string
}
export class UpdateDeliveryUseCase{
  public async execute({id_delivery, id_deliveryman}: UpdateDelivery){
    const result = await prisma.deliveries.update({
      where: {id: id_delivery},
      data: {id_deliveryman}
    })
    console.log(result)
    return result
  }
}