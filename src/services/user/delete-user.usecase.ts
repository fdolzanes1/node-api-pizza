import { UserRequestRepository } from '../../interfaces/user.interface'

export class DeleteUser {
  constructor(private userRequestRepository: UserRequestRepository) {}

  async execute(id: string) {
    const userId = await this.userRequestRepository.findById(id)

    if (!userId) {
      throw Error(`Invalid Request: User not exist`)
    }

    await this.userRequestRepository.delete(id)
  }
}
