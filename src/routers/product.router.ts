import { Router } from 'express'
import productController from '../controllers/product.controller'
import loginMiddleware from '../middlewares/auth.middleware'
import uploadConfig from '../config/multer'
import multer from 'multer'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

router.post(
  '/products',
  loginMiddleware.auth,
  upload.single('file'),
  productController.create
)

export default router
