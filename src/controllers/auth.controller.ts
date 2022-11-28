import { Request, Response } from 'express'
import UserRepository from '../repositories/user.repository'
import { LoginAuth } from '../services/auth/login-auth.use-case'

class Auth {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body
    const userRepository = new UserRepository()
    const loginAuth = new LoginAuth(userRepository)
    try {
      const token = await loginAuth.execute({ email, password })
      return res.status(201).json({
        message: 'Authenticated successfully',
        auth: true,
        token: token,
      })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default Auth
