import { CategoryRequestRepository } from '../../interfaces/category.interface'

export class GetAllCategory {
  constructor(private categoryRequestRepository: CategoryRequestRepository) {}

  async execute() {
    return await this.categoryRequestRepository.listAll()
  }
}
