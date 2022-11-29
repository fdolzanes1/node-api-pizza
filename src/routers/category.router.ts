import { Router } from 'express'
import categoryController from '../controllers/category.controller'
import loginMiddleware from '../middlewares/auth.middleware'

const router = Router()

router.post('/categories', loginMiddleware.auth, categoryController.create)
router.get('/categories', loginMiddleware.auth, categoryController.listAll)

export default router
