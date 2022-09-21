export type Identifier = string | number

// state
export type DynamicTableDataProps = {
  data: DataRecord[]
  sort?: {
    sortBy?: string
    sortOrder?: string
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
}

export type DataRecord = {
  id: Identifier
  [key: string]: any
}
