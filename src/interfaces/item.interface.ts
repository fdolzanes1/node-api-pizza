export interface ItemData {
  orderId: string
  productId: string
  amount: number
}

export interface ItemDTO {
  id: string
  orderId: string | null
  productId: string | null
  amount: number
  created_at: Date | null
  updated_at: Date | null
}

export interface ItemRequestRepository {
  create(data: ItemData): Promise<void>
  remove(id: string): Promise<void>
  findById(id: string): Promise<ItemDTO | null>
}
