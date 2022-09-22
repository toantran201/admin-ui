import { createContext } from 'react'

export const DynamicTableSortContext = createContext<
  { sortBy: string; sortOrder: 'asc' | 'desc' | ''; setSort: (source: string) => void } | undefined
>(undefined)
