import { UserRequestRepository } from '../../interfaces/user.interface'

export class GetAllUser {
  constructor(private userRequestRepository: UserRequestRepository) {}

  async execute() {
    return await this.userRequestRepository.listAll()
  }
}
