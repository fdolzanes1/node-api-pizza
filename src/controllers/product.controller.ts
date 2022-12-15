import { Request, Response } from 'express'
import ProductRepository from '../repositories/product.repository'
import { CreateProduct } from '../services/product/create-product.usecase'
import { GetProductCategories } from '../services/product/get-product-categories.usecase'
import { GetAllProduct } from '../services/product/get-all-product.usecase'
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

  static async findByCategory(req: Request, res: Response) {
    const category_id = req.params.category_id
    const productRepository = new ProductRepository()
    const getProductCategories = new GetProductCategories(productRepository)
    try {
      const response = await getProductCategories.execute(String(category_id))
      return res.status(201).json({ products: response })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async listAll(_req: Request, res: Response) {
    const productRepository = new ProductRepository()
    const getAllProduct = new GetAllProduct(productRepository)
    try {
      const response = await getAllProduct.execute()
      return res.status(200).json({ products: response })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default ProductController
