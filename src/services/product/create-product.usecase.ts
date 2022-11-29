import ProductValidateSchema from '../../helpers/product.validate'
import {
  ProductData,
  ProductRequestRepository,
} from '../../interfaces/product.interface'

export class CreateProduct {
  constructor(private productRequestRepository: ProductRequestRepository) {}

  async execute(data: ProductData) {
    const { error } = ProductValidateSchema.validate(data)
    if (error) {
      throw Error(`Invalid Request ${error.details[0].message}`)
    }

    const product = await this.productRequestRepository.findByName(data.name)

    if (product) {
      throw Error(`Invalid Request: Product ${data.name} already exist`)
    }

    await this.productRequestRepository.create(data)
  }
}
