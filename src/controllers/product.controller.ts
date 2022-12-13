import { Request, Response } from 'express'
import ProductRepository from '../repositories/product.repository'
import { CreateProduct } from '../services/product/create-product.usecase'

class ProductController {
  static async create(req: Request, res: Response) {
    const { name, price, description, banner, categoryId } = req.body
    const filename = req.file?.filename
    const productRepository = new ProductRepository()
    const createProduct = new CreateProduct(productRepository)
    try {
      await createProduct.execute(
        {
          name,
          price,
          description,
          banner,
          categoryId,
        },
        filename
      )
      return res.status(201).json({ message: 'Product created successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default ProductController
