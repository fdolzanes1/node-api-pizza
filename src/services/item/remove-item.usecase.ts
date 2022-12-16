import { ItemRequestRepository } from '../../interfaces/item.interface'

export class RemoveItem {
  constructor(private itemRequestRepository: ItemRequestRepository) {}

  async execute(id: string) {
    const itemId = await this.itemRequestRepository.findById(id)

    if (!itemId) {
      throw Error(`Invalid Request: Item not exist`)
    }

    await this.itemRequestRepository.remove(id)
  }
}
