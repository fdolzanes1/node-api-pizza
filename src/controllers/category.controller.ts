import { Request, Response } from 'express'
import CategoryRepository from '../repositories/category.repository'
import { CreateCategory } from '../services/category/create-category.usecase'
import { GetAllCategory } from '../services/category/get-all-category.usecase'

class CategoryController {
  static async create(req: Request, res: Response) {
    const { name } = req.body
    const categoryRepository = new CategoryRepository()
    const createCategory = new CreateCategory(categoryRepository)
    try {
      await createCategory.execute({ name })
      return res.status(201).json({ message: 'Category created successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async listAll(_req: Request, res: Response) {
    const categoryRepository = new CategoryRepository()
    const getAllCategory = new GetAllCategory(categoryRepository)
    try {
      const response = await getAllCategory.execute()
      return res.status(200).json({ category: response })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default CategoryController
