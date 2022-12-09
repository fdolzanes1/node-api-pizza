import { UserRequestRepository } from '../../interfaces/user.interface'

export class GetOneUser {
  constructor(private userRequestRepository: UserRequestRepository) {}

  async execute(id: string) {
    const user = await this.userRequestRepository.findById(id)

    if (!user) {
      throw Error(`Invalid Request: Users not exist`)
    }

    return user
  }
}
