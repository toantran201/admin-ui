import { createContext } from 'react'
//
import { DataRecord } from './types'

export const DynamicTableDataContext = createContext<
  | {
      isLoading: boolean
      data: DataRecord[]
    }
  | undefined
>(undefined)
