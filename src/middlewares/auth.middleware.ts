import { Request, Response, NextFunction } from 'express'
import { AuthService } from './auth.service'

class Login {
  static async auth(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[2]
      await AuthService.authorize(token)
      return next()
    } catch (error: any) {
      return res.status(401).json({ error: error.message })
    }
  }
}
export default Login
