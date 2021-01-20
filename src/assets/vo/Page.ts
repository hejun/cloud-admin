export interface OrderItem {
  column: string | null
  asc: boolean
}

export default interface Page<T> {
  records: Array<T>,
  total: number,
  size: number,
  current: number,
  orders: Array<OrderItem>,
  optimizeCountSql: boolean,
  searchCount: boolean,
  hitCount: boolean,
  countId: string | null,
  maxLimit: number | null,
  pages: number
}
