import Joi from 'joi'

const AuthValidateSchema = Joi.object({
  email: Joi.string().required().email().min(5).max(255),
  password: Joi.string().required().min(6).max(20),
})

export default AuthValidateSchema
