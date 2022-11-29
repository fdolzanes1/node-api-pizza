import prisma from '../prisma/client'
import {
  CategoryData,
  CategoryRequestRepository,
} from '../interfaces/category.interface'

class CategoryRepository implements CategoryRequestRepository {
  async create({ name }: CategoryData) {
    await prisma.category.create({
      data: {
        name,
      },
    })
  }

  async findByName(name: string): Promise<CategoryData | null> {
    return await prisma.category.findFirst({
      where: {
        name,
      },
    })
  }
}

export default CategoryRepository
