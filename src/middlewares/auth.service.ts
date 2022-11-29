import jwt from 'jsonwebtoken'

export class AuthService {
  static authorize(token: any) {
    const secret = process.env.JWT_SECRET
    if (!token) {
      throw Error('Invalid Request: Token is null')
    }
    jwt.verify(`${token}`, `${secret}`, (err) => {
      if (err) {
        throw Error('Invalid Request: Token is invalid')
      }
    })
  }
}
