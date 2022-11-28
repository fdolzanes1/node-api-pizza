import bcrypt from 'bcryptjs'
export interface UserData {
  name: string
  email: string
  password: string
}

export interface UserDTO {
  name: string
  email: string
}

export interface UserRequestRepository {
  listAll(): Promise<UserDTO[]>
  create(data: UserData): Promise<UserDTO>
  update(id: string, data: UserData): Promise<void>
  delete(id: string): Promise<void>
  findById(id: string): Promise<UserDTO | null>
  findByEmail(email: string): Promise<UserData | null>
}

export class User {
  static generatePassword({ password }: UserData) {
    return bcrypt.hashSync(password, 10)
  }
}
