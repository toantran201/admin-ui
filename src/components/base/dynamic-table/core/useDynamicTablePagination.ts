import { useContext } from 'react'
import { DynamicTablePaginationContext } from './DynamicTablePaginationContext'

export const useDynamicTablePagination = () => {
  const useDynamicTablePaginationContext = useContext(DynamicTablePaginationContext)
  if (!useDynamicTablePaginationContext) {
    throw new Error('useDynamicTablePaginationContext must be used in DynamicTablePaginationContextProvider')
  }
  return useDynamicTablePaginationContext
}
