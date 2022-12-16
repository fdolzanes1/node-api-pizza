import prisma from '../prisma/client'
import {
  ItemDTO,
  ItemData,
  ItemRequestRepository,
} from '../interfaces/item.interface'

class ItemRepository implements ItemRequestRepository {
  async create(data: ItemData): Promise<void> {
    await prisma.item.create({
      data,
    })
  }

  async remove(id: string): Promise<void> {
    await prisma.item.delete({
      where: {
        id: id,
      },
    })
  }

  async findById(id: string): Promise<ItemDTO | null> {
    return await prisma.item.findFirst({
      where: {
        id,
      },
    })
  }
}

export default ItemRepository
