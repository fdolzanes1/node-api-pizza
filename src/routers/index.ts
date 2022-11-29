import { Express } from 'express-serve-static-core'
import express from 'express'
import userRoutes from './user.routes'
import authRoutes from './auth.router'
import categoryRoutes from './category.router'
import productRoutes from './product.router'
import cors from 'cors'

const router = (app: Express) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
  app.use('/api', userRoutes)
  app.use('/api', authRoutes)
  app.use('/api', categoryRoutes)
  app.use('/api', productRoutes)
}

export default router
