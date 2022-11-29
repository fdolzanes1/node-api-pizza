import { Router } from 'express'
import userController from '../controllers/user.controller'
import loginMiddleware from '../middlewares/auth.middleware'
const router = Router()

router.get('/users', loginMiddleware.auth, userController.listAll)
router.get('/users/:id', loginMiddleware.auth, userController.findById)
router.post('/users', loginMiddleware.auth, userController.create)
router.put('/users/:id', loginMiddleware.auth, userController.update)
router.delete('/users/:id', loginMiddleware.auth, userController.delete)

export default router
