import { useContext } from 'react'
import { DynamicTableSortContext } from './DynamicTableSortContext'

export const useDynamicTableSort = () => {
  const useDynamicTableSortContext = useContext(DynamicTableSortContext)

  if (!useDynamicTableSortContext) {
    throw new Error('useDynamicTableSortContext must be used in DynamicTableSortContextProvider')
  }
  return useDynamicTableSortContext
}
