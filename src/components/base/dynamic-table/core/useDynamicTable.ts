import { useContext } from 'react'
import { DynamicTableContext, DynamicTableDispatch } from './DynamicTableContext'

export const useDynamicTableState = () => {
  const useDynamicTableContext = useContext(DynamicTableContext)
  if (!useDynamicTableContext) {
    throw new Error('useDynamicTableContext must be used in DynamicTableProvider')
  }
  return useDynamicTableContext
}

export const useDynamicTableDispatch = () => {
  const useDynamicTableDispatch = useContext(DynamicTableDispatch)
  if (!useDynamicTableDispatch) {
    throw new Error('useDynamicTableDispatch must be used in DynamicTableProvider')
  }
  return useDynamicTableDispatch
}
