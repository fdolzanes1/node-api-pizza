import userRepository from '../repository/user.repository'
import { UserRequest } from '../interface/user.interface'
import UserValidateSchema from '../helpers/user.validate'

class UserService {
  static async createUser(user: UserRequest) {
    const { error } = UserValidateSchema.validate(user)
    if (error) {
      throw Error(`Invalid Request ${error.details[0].message}`)
    }
    const userExists = await userRepository.findEmailExists(user.email)
    if (userExists) {
      throw Error(`User ${user.email} already exists`)
    }
    return await userRepository.create(user)
  }

  static async updateUser(user: UserRequest) {
    const { error } = UserValidateSchema.validate(user)
    if (error) {
      throw Error(`Invalid Request ${error.details[0].message}`)
    }
    const userExists = await userRepository.findEmailExists(user.email)
    if (!userExists) {
      throw Error(`${user.email} does not exists`)
    }
    return await userRepository.update(user)
  }

  static async deleteUser(email: string) {
    const userExists = await userRepository.findEmailExists(email)
    if (!userExists) throw Error(`${email} does not exists`)
    return await userRepository.destroy(email)
  }
}

export default UserService
