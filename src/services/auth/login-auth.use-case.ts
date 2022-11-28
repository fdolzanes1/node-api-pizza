import AuthValidateSchema from '../../helpers/auth.validate'
import { AuthData, Auth } from '../../interfaces/auth.interface'
import { UserRequestRepository } from '../../interfaces/user.interface'
import bcrypt from 'bcryptjs'

export class LoginAuth {
  constructor(private userRequestRepository: UserRequestRepository) {}

  async execute({ email, password }: AuthData) {
    const { error } = AuthValidateSchema.validate({
      email,
      password,
    })

    if (error) {
      throw Error(`Invalid Request ${error.details[0].message}`)
    }

    const user = await this.userRequestRepository.findByEmail(email)

    if (!user) {
      throw Error(`Invalid Request: User ${email} not exist`)
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      throw Error(`Invalid Request: Invalid Email or Password`)
    }

    const token = Auth.generateToken(email)

    return token
  }
}
