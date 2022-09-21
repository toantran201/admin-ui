import { useContext } from 'react'
import { DynamicTableDataContext } from './DynamicTableDataContext'

export const useDynamicTableData = () => {
  const useDynamicTableDataContext = useContext(DynamicTableDataContext)
  if (!useDynamicTableDataContext) {
    throw new Error('useDynamicTableDataContext must be used in DynamicTableDataContextProvider')
  }
  return useDynamicTableDataContext
}
