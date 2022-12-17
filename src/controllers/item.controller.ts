import { Request, Response } from 'express'
import { AddItem } from '../services/item/add-item.usecase'
import { RemoveItem } from '../services/item/remove-item.usecase'
import { DetailsOrder } from '../services/order/details-orders.usecase'
import ItemRepository from '../repositories/item.repository'
import OrderRepository from '../repositories/order.repository'
class ItemController {
  static async add(req: Request, res: Response) {
    const { orderId, productId, amount } = req.body
    const itemRepository = new ItemRepository()
    const addItem = new AddItem(itemRepository)
    try {
      await addItem.execute({ orderId, productId, amount })
      return res.status(201).json({ message: 'Item added successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async remove(req: Request, res: Response) {
    const id = req.params.id
    const itemRepository = new ItemRepository()
    const removeItem = new RemoveItem(itemRepository)
    try {
      await removeItem.execute(String(id))
      return res.status(201).json({ message: 'Item removed successfully' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default ItemController
