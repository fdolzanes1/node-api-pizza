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
}

export default ProductRepository
