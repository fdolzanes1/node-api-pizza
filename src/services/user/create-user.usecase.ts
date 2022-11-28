import UserValidateSchema from '../../helpers/user.validate'
import {
  User,
  UserData,
  UserRequestRepository,
} from '../../interfaces/user.interface'

export class CreateUser {
  constructor(private userRequestRepository: UserRequestRepository) {}

  async execute(data: UserData) {
    const { error } = UserValidateSchema.validate(data)
    if (error) {
      throw Error(`Invalid Request ${error.details[0].message}`)
    }

    const user = await this.userRequestRepository.findByEmail(data.email)

    if (user) {
      throw Error(`Invalid Request: User ${data.email} already exist`)
    }
    data.password = User.generatePassword(data)
    await this.userRequestRepository.create(data)
  }
}
