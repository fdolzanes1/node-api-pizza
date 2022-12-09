import { UserRequestRepository } from '../../interfaces/user.interface'

export class GetAllUser {
  constructor(private userRequestRepository: UserRequestRepository) {}

  async execute() {
    const users = await this.userRequestRepository.listAll()

    if (!users) {
      throw Error(`Invalid Request: Users not exist`)
    }

    return users
  }
}
