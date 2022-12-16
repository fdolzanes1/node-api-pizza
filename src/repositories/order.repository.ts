import prisma from '../prisma/client'
import {
  OrderDTO,
  OrderData,
  OrderRequestRepository,
} from '../interfaces/order.interface'

class OrderRepository implements OrderRequestRepository {
  async create(data: OrderData): Promise<void> {
    await prisma.order.create({
      data,
    })
  }

  async listAll(): Promise<OrderDTO[] | null | undefined> {
    return await prisma.order.findMany()
  }

  async delete(id: string): Promise<void> {
    await prisma.order.delete({
      where: {
        id: id,
      },
    })
  }

  async findById(id: string): Promise<OrderDTO | null> {
    return await prisma.order.findFirst({
      where: {
        id,
      },
    })
  }

  async sendOrder(id: string): Promise<OrderDTO | null> {
    return await prisma.order.update({
      where: {
        id: id,
      },
      data: {
        draft: false,
      },
    })
  }
}

export default OrderRepository
