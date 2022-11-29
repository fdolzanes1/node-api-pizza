export interface CategoryData {
  name: string
}

export interface CategoryRequestRepository {
  create(data: CategoryData): Promise<void>
  findByName(name: string): Promise<CategoryData | null>
  listAll(): Promise<CategoryData[]>
}
