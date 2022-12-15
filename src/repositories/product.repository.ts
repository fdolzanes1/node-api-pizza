import prisma from '../prisma/client'
import {
  ProductData,
  ProductDTO,
  ProductRequestRepository,
} from '../interfaces/product.interface'

class ProductRepository implements ProductRequestRepository {
  async create(data: ProductData): Promise<void> {
    await prisma.product.create({
      data,
    })
  }

  async findByName(name: string): Promise<ProductDTO | null> {
    return await prisma.product.findFirst({
      where: {
        name,
      },
    })
  }

  async findByCategory(category_id: string): Promise<ProductDTO[] | null> {
    return await prisma.product.findMany({
      where: {
        categoryId: category_id,
      },
    })
  }

  async listAll(): Promise<ProductDTO[]> {
    return await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        banner: true,
        created_at: true,
        updated_at: true,
        categoryId: true,
      },
    })
  }
}

export default ProductRepository
