import { OrderRequestRepository } from '../../interfaces/order.interface'

export class GetAllOrder {
  constructor(private orderRequestRepository: OrderRequestRepository) {}

  async execute() {
    const orders = await this.orderRequestRepository.listAll()

    if (!orders) {
      throw Error(`Invalid Request: Orders not exist`)
    }

    return orders
  }
}
