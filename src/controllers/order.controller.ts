import { Request, Response } from 'express'
import OrderRepository from '../repositories/order.repository'
import { CreateOrder } from '../services/order/create-order.usecase'
import { GetAllOrder } from '../services/order/get-all-order.usecase'

class OrderController {
  static async create(req: Request, res: Response) {
    const { table, name } = req.body
    const orderRepository = new OrderRepository()
    const createOrder = new CreateOrder(orderRepository)
    try {
      await createOrder.execute({
        table,
        name,
      })
      return res.status(201).json({ message: 'Order created successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async listAll(_req: Request, res: Response) {
    const orderRepository = new OrderRepository()
    const getAllOrder = new GetAllOrder(orderRepository)
    try {
      const response = await getAllOrder.execute()
      return res.status(200).json({ orders: response })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default OrderController
