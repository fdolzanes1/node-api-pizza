import { Router } from 'express'
import userController from '../controllers/user.controller'
const router = Router()

router.get('/users', userController.listAll)
router.get('/users/:id', userController.findById)
router.post('/users', userController.create)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

export default router
