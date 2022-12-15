import { Express } from 'express-serve-static-core'
import express from 'express'
import cors from 'cors'
import userRoutes from './user.routes'
import authRoutes from './auth.router'
import categoryRoutes from './category.router'
import productRoutes from './product.router'
import orderRoutes from './order.router'

const router = (app: Express) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
  app.use('/api', userRoutes)
  app.use('/api', authRoutes)
  app.use('/api', categoryRoutes)
  app.use('/api', productRoutes)
  app.use('/api', orderRoutes)
}

export default router
