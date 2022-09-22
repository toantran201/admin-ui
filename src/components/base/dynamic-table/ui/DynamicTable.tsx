import { ReactNode } from 'react'
//
import DTPagination from './DTPagination'
//
import { DataRecord } from '../core/types'
import { DynamicTableProvider } from '../core/DynamicTableContext'
import { useDynamicTableData } from '../core/useDynamicTableData'
import { useDynamicTableSort } from '../core/useDynamicTableSort'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/all'

export type DynamicTableHeader = {
  label: string
  source: string
  sortBy?: string
  width?: string
}

type DynamicTableProps = {
  renderItem: (item: DataRecord) => ReactNode
  headers: DynamicTableHeader[]
}

const WrapperTable = ({ renderItem, headers }: DynamicTableProps) => {
  //0. Init
  const { data, isLoading } = useDynamicTableData()
  const { sortBy, setSort, sortOrder } = useDynamicTableSort()

  console.log('acscac', sortOrder, sortBy)

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

  //2. On header sort click
  const onSort = (sortBy: string | undefined) => {
    if (!sortBy) return
    setSort(sortBy)
  }

  const renderHeaders = () => {
    return (
      <tr>
        {headers.map((h, index) => (
          <th key={index} style={{ width: h.width || 'unset' }}>
            <button
              className="w-full flex items-center justify-center space-x-2"
              onClick={() => onSort(h.sortBy)}
              disabled={!h.sortBy}
            >
              <p className="text-sm font-medium">{h.label}</p>
              {h.sortBy ? (
                <div className="flex -space-x-2">
                  <IoMdArrowDropup
                    className={`${sortBy === h.sortBy && sortOrder === 'asc' ? 'text-blue-gray-500' : ''}`}
                  />
                  <IoMdArrowDropdown
                    className={`${sortBy === h.sortBy && sortOrder === 'desc' ? 'text-blue-gray-500' : ''}`}
                  />
                </div>
              ) : null}
            </button>
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
