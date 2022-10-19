import { Express } from 'express-serve-static-core'
import express from 'express'
import userRoutes from './user.routes'
import cors from 'cors'

const router = (app: Express) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
  app.use('/api', userRoutes)
}

export default router
