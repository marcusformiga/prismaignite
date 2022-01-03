import {prisma} from "../../../database/prisma/prismaClient" 
interface CreateDelivery {
  id_client: string
  item_name: string
}
export class CreateDeliveryUseCase {
  public async execute({id_client, item_name}: CreateDelivery){
    const delivery = await prisma.deliveries.create({
      data: {
        id_client,
        item_name
      }
    })
    return delivery

  }
}