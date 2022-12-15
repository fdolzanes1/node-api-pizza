export interface OrderData {
  table: number
  name: string
}

export interface OrderDTO {
  id: string
  table: number
  status: boolean
  draft: boolean
  name: string | null
  created_at: Date | null
  updated_at: Date | null
}

export interface OrderRequestRepository {
  create(data: OrderData): Promise<void>
  listAll(): Promise<OrderDTO[] | null | undefined>
}
