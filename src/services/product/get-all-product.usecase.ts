import { ProductRequestRepository } from '../../interfaces/product.interface'

export class GetAllProduct {
  constructor(private productRequestRepository: ProductRequestRepository) {}

  async execute() {
    const products = await this.productRequestRepository.listAll()

    if (!products) {
      throw Error(`Invalid Request: Products not exist`)
    }

    return products
  }
}
