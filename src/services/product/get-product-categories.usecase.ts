import { ProductRequestRepository } from '../../interfaces/product.interface'

export class GetProductCategories {
  constructor(private productRequestRepository: ProductRequestRepository) {}

  async execute(category_id: string) {
    const products = await this.productRequestRepository.findByCategory(
      category_id
    )

    if (!products) {
      throw Error(`Invalid Request: Products not exist`)
    }

    return products
  }
}
