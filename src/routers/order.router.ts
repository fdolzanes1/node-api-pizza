import { Router } from 'express'
import orderController from '../controllers/order.controller'
import loginMiddleware from '../middlewares/auth.middleware'
const router = Router()

router.post('/orders', loginMiddleware.auth, orderController.create)
router.get('/orders', orderController.listAll)
router.delete('/orders/:id', orderController.delete)

export default router
