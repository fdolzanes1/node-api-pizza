import UserValidateSchema from '../../helpers/user.validate'
import {
  UserData,
  UserRequestRepository,
} from '../../interfaces/user.interface'

export class UpdateUser {
  constructor(private userRequestRepository: UserRequestRepository) {}

  async execute(id: string, data: UserData) {
    const { error } = UserValidateSchema.validate(data)
    if (error) {
      throw Error(`Invalid Request ${error.details[0].message}`)
    }

    const userId = await this.userRequestRepository.findById(id)
    const user = await this.userRequestRepository.findByEmail(data.email)

    if (!userId) {
      throw Error(`Invalid Request: User not exist`)
    }

    if (user && user.email === data.email) {
      throw Error(`Invalid Request: User ${data.email} already exist`)
    }

    try {
      await this.userRequestRepository.update(id, data)
    } catch (err) {
      throw Error(`Invalid Request: User ${data.email} already exist`)
    }
  }
}
