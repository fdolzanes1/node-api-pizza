import CategoryValidateSchema from '../../helpers/category.validate'
import {
  CategoryData,
  CategoryRequestRepository,
} from '../../interfaces/category.interface'

export class CreateCategory {
  constructor(private categoryRequestRepository: CategoryRequestRepository) {}

  async execute({ name }: CategoryData) {
    const { error } = CategoryValidateSchema.validate({ name })
    if (error) {
      throw Error(`Invalid Request ${error.details[0].message}`)
    }

    const category = await this.categoryRequestRepository.findByName(name)

    if (category) {
      throw Error(`Invalid Request: Category ${name} already exist`)
    }

    await this.categoryRequestRepository.create({
      name,
    })
  }
}
