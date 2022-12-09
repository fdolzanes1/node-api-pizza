import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

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

  static comparePassword(password: string, passwordDB: string) {
    const valid = bcrypt.compare(password, passwordDB)
    return valid
  }
}
