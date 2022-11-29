import prisma from '../prisma/client'
import {
  User,
  UserData,
  UserDTO,
  UserRequestRepository,
} from '../interfaces/user.interface'

class UserRepository implements UserRequestRepository {
  async create(data: UserData): Promise<UserDTO> {
    return await prisma.user.create({
      data,
    })
  }

  async findByEmail(email: string): Promise<UserData | null> {
    return await prisma.user.findFirst({
      where: {
        email,
      },
    })
  }

  async findById(id: string): Promise<UserDTO | null> {
    return await prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })
  }

  async listAll(): Promise<UserDTO[]> {
    return await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    })
  }

  async update(id: string, data: UserData) {
    data.password = User.generatePassword(data)
    await prisma.user.updateMany({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.user.deleteMany({
      where: {
        id,
      },
    })
  }
}

export default UserRepository
