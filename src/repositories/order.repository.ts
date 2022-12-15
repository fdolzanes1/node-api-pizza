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
}

export default OrderRepository
