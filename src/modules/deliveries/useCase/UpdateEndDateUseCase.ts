import {prisma} from "../../../database/prisma/prismaClient"

interface UpdateEndDate {
  id_delivery: string
  id_deliveryman: string
}
export class UpdateEndDateUseCase {
  public async execute({id_delivery, id_deliveryman}: UpdateEndDate){
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        end_at: new Date()
      }
    })
    return result
  }
}