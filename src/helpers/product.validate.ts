import Joi from 'joi'

const ProductValidateSchema = Joi.object({
  name: Joi.string(),
  price: Joi.string(),
  description: Joi.string(),
  banner: Joi.string(),
  categoryId: Joi.string(),
})

export default ProductValidateSchema
