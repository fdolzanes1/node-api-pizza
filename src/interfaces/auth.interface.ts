import jwt from 'jsonwebtoken'

export interface AuthData {
  email: string
  password: string
}

export class Auth {
  static generateToken(email: string) {
    const JWT_SECRET = 'node-pizza'
    const token = jwt.sign({ email: email }, JWT_SECRET, {
      expiresIn: '1h',
    })
    return token
  }
}
