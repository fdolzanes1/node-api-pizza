import { Request, Response } from 'express'
import UserService from '../services/user.service'
import UserRepository from '../repository/user.repository'

class UserController {
  static async create(req: Request, res: Response) {
    try {
      const user = req.body
      await UserService.createUser(user)
      return res.status(201).json({ message: 'User created successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async listAll(req: Request, res: Response) {
    try {
      const response = await UserRepository.listAll()
      return res.status(200).json({ users: response })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const email = req.params.email
      const user = req.body
      await UserService.updateUser({ email, ...user })
      return res.status(201).json({ message: 'User updated successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const email = req.params.email
      await UserService.deleteUser(email)
      return res.status(201).json({ message: 'User deleted successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default UserController
