import jwt from 'jsonwebtoken'

export interface AuthData {
  email: string
  password: string
}

export class Auth {
  static generateToken(email: string) {
    const secret = process.env.JWT_SECRET
    const token = jwt.sign({ email: email }, `${secret}`, {
      expiresIn: '1h',
    })
    return token
  }
}
