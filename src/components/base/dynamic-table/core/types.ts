export type Identifier = string | number

// state
export type DynamicTableProps = {
  data: DataRecord[]
  sort?: {
    sortBy?: string
    sortOrder?: 'asc' | 'desc' | ''
  }
  isLoading: boolean
  page: number
  perPage: number
  total: number
  filters: any
}
// action
export type DynamicTableReducerProps = {
  type: string
  data?: DataRecord[]
  page?: number
  perPage?: number
  isLoading?: boolean
  source?: string
  sortBy?: string
}

export type DataRecord = {
  id: Identifier
  [key: string]: any
}
