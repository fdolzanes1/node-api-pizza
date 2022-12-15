import {
  OrderData,
  OrderRequestRepository,
} from '../../interfaces/order.interface'

export class CreateOrder {
  constructor(private orderRequestRepository: OrderRequestRepository) {}

  async execute(data: OrderData) {
    await this.orderRequestRepository.create(data)
  }
}
