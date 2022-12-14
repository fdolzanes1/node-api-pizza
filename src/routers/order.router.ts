import { Router } from 'express'
import itemController from '../controllers/item.controller'
import orderController from '../controllers/order.controller'
import loginMiddleware from '../middlewares/auth.middleware'
const router = Router()

router.post('/orders', loginMiddleware.auth, orderController.create)
router.get('/orders', orderController.listAll)
router.delete('/orders/:id', loginMiddleware.auth, orderController.delete)
router.post('/orders/add', loginMiddleware.auth, itemController.add)
router.delete('/orders/item/:id', loginMiddleware.auth, itemController.remove)
router.put('/orders/send/:id', loginMiddleware.auth, orderController.send)
router.get('/orders/details/', loginMiddleware.auth, orderController.details)
router.put('/orders/finish/:id', loginMiddleware.auth, orderController.finish)

export default router
