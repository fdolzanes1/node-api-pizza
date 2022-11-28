import { Request, Response } from 'express'
import UserRepository from '../repositories/user.repository'
import { CreateUser } from '../services/user/create-user.usecase'
import { DeleteUser } from '../services/user/delete-user.usecase'
import { GetAllUser } from '../services/user/get-all-user.usecase'
import { GetOneUser } from '../services/user/get-one-user.usecase'
import { UpdateUser } from '../services/user/update-user.usecase'

class UserController {
  static async create(req: Request, res: Response) {
    const { name, email, password } = req.body
    const userRepository = new UserRepository()
    const createUser = new CreateUser(userRepository)
    try {
      await createUser.execute({ name, email, password })
      return res.status(201).json({ message: 'User created successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async listAll(_req: Request, res: Response) {
    const userRepository = new UserRepository()
    const getAllUser = new GetAllUser(userRepository)
    try {
      const response = await getAllUser.execute()
      return res.status(200).json({ users: response })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async update(req: Request, res: Response) {
    const id = req.params.id
    const user = req.body
    const userRepository = new UserRepository()
    const updateUser = new UpdateUser(userRepository)
    try {
      await updateUser.execute(String(id), user)
      return res.status(201).json({ message: 'User updated successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id
    const userRepository = new UserRepository()
    const deleteUser = new DeleteUser(userRepository)
    try {
      await deleteUser.execute(String(id))
      return res.status(201).json({ message: 'User deleted successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async findById(req: Request, res: Response) {
    const id = req.params.id
    const userRepository = new UserRepository()
    const getOneUser = new GetOneUser(userRepository)
    try {
      const response = await getOneUser.execute(String(id))
      return res.status(201).json({ user: response })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default UserController
