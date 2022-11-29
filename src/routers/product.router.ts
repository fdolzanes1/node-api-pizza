import { Router } from 'express'
import productController from '../controllers/product.controller'
import loginMiddleware from '../middlewares/auth.middleware'

const router = Router()

router.post('/products', loginMiddleware.auth, productController.create)

export default router
