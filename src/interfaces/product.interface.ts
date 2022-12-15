export interface ProductData {
  name: string
  price: string
  description: string
  banner: string
  categoryId: string
}

export interface ProductDTO {
  name: string
  price: string
  description: string
  banner: string
}

export interface ProductRequestRepository {
  create(data: ProductData): Promise<void>
  findByName(name: string): Promise<ProductDTO | null>
  findByCategory(category_id: string): Promise<ProductDTO[] | null>
  listAll(): Promise<ProductDTO[]>
}
