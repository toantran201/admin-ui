import { ReactNode } from 'react'
//
import DTPagination from './DTPagination'
//
import { DataRecord } from '../core/types'
import { DynamicTableProvider } from '../core/DynamicTableContext'
import { useDynamicTableData } from '../core/useDynamicTableData'

export type DynamicTableHeader = {
  label: string
  source: string
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
  width?: string
}

type DynamicTableProps = {
  renderItem: (item: DataRecord) => ReactNode
  headers: DynamicTableHeader[]
}

const WrapperTable = ({ renderItem, headers }: DynamicTableProps) => {
  //0. Init
  const { data, isLoading } = useDynamicTableData()

  //1. Render table loading rows
  const renderSkeletonRows = () => {
    const arr = new Array(10).fill(null)
    return (
      <tbody>
        {arr.map((item, index) => (
          <tr key={index}>
            {headers.map((h, idx) => (
              <td key={idx}>
                <p className="animate-pulse bg-gray-200 dark:bg-blue-gray-300 rounded-lg w-full h-5" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }

  const renderHeaders = () => {
    return (
      <tr>
        {headers.map((h, index) => (
          <th key={index} style={{ width: h.width || 'unset' }}>
            {h.label}
          </th>
        ))}
      </tr>
    )
  }

  return (
    <div>
      <table className="dynamicTable">
        <thead>{renderHeaders()}</thead>
        {!isLoading ? <tbody>{data.map((item) => renderItem(item))}</tbody> : null}
        {isLoading && renderSkeletonRows()}
      </table>
      <div className="mt-2">
        <DTPagination />
      </div>
    </div>
  )
}

const DynamicTable = (props: DynamicTableProps) => {
  return (
    <DynamicTableProvider>
      <WrapperTable {...props} />
    </DynamicTableProvider>
  )
}

export default DynamicTable
