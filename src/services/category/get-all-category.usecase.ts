import { CategoryRequestRepository } from '../../interfaces/category.interface'

export class GetAllCategory {
  constructor(private categoryRequestRepository: CategoryRequestRepository) {}

  async execute() {
    const categories = await this.categoryRequestRepository.listAll()

    if (!categories) {
      throw Error(`Invalid Request: Categories not exist`)
    }

    return categories
  }
}
