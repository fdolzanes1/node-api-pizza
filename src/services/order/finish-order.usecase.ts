import { OrderRequestRepository } from '../../interfaces/order.interface'

export class FinishOrder {
  constructor(private orderRequestRepository: OrderRequestRepository) {}

  async execute(id: string) {
    const orderId = await this.orderRequestRepository.findById(id)

    if (!orderId) {
      throw Error(`Invalid Request: Order not exist`)
    }

    return await this.orderRequestRepository.finishOrder(id)
  }
}
