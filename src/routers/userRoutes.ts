import { Router } from 'express'
const router = Router()

router.get('/users', (req, res) => {
  return res.status(200).json({ message: 'Users' })
})

export default router
