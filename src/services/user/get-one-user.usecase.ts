import { UserRequestRepository } from '../../interfaces/user.interface'

export class GetOneUser {
  constructor(private userRequestRepository: UserRequestRepository) {}

  async execute(id: string) {
    return await this.userRequestRepository.findById(id)
  }
}
