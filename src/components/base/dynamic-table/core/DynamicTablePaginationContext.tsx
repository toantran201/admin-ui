import { createContext } from 'react'

export const DynamicTablePaginationContext = createContext<
  | {
      isLoading: boolean
      page: number
      perPage: number
      total: number
      setPage: (page: number) => void
      setPerPage: (perPage: number) => void
    }
  | undefined
>(undefined)
