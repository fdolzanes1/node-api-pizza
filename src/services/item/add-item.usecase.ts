import {
  ItemData,
  ItemRequestRepository,
} from '../../interfaces/item.interface'

export class AddItem {
  constructor(private itemRequestRepository: ItemRequestRepository) {}

  async execute(data: ItemData) {
    await this.itemRequestRepository.create(data)
  }
}
