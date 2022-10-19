import { Router } from 'express'
import userController from '../controllers/user.controller'
const router = Router()

router.get('/users', userController.listAll)
router.post('/users', userController.create)
router.put('/users/:email', userController.update)
//router.delete('/users/:email', userController.delete)

export default router
