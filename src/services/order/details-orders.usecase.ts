import { OrderRequestRepository } from '../../interfaces/order.interface'

export class DetailsOrder {
  constructor(private orderRequestRepository: OrderRequestRepository) {}

  async execute(orderId: string) {
    const details = await this.orderRequestRepository.detailsOrder(orderId)

    if (!details) {
      throw Error(`Invalid Request: Details not exist`)
    }

    return details
  }
}
