import prisma from '../prisma/client'
import { UserRequest } from '../interface/user.interface'

class UserRepository {
  static async create({ name, email, password }: UserRequest) {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
  }

  static async findEmailExists(email: string) {
    return await prisma.user.findFirst({
      where: {
        email,
      },
    })
  }

  static async listAll() {
    return await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    })
  }

  static async update({ name, email, password }: UserRequest) {
    await prisma.user.updateMany({
      where: {
        email,
      },
      data: {
        name,
        password,
      },
    })
  }

  static async destroy(email: string) {
    return await prisma.user.deleteMany({
      where: {
        email,
      },
    })
  }
}

export default UserRepository
