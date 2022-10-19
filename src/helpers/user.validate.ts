import Joi from 'joi'

const UserValidateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(20),
})

export default UserValidateSchema
