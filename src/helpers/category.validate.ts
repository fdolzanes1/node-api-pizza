import Joi from 'joi'

const CategoryValidateSchema = Joi.object({
  name: Joi.string().required().min(3).max(255),
})

export default CategoryValidateSchema
