import { ReactNode } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/all'
//
import { Color } from '~/types'
//
import DTPagination from './DTPagination'
//
import { DataRecord } from '../core/types'
import { DynamicTableProvider } from '../core/DynamicTableContext'
import { useDynamicTableData } from '../core/useDynamicTableData'
import { useDynamicTableSort } from '../core/useDynamicTableSort'

export type DynamicTableHeader = {
  label: string
  source: string
  sortBy?: string
  width?: string
}

type DynamicTableProps = {
  renderItem: (item: DataRecord) => ReactNode
  headers: DynamicTableHeader[]
  color?: Color
}

const WrapperTable = ({ renderItem, headers, color = 'primary' }: DynamicTableProps) => {
  //0. Init
  const { data, isLoading } = useDynamicTableData()
  const { sortBy, setSort, sortOrder } = useDynamicTableSort()

  // class
  const colorClass = `dynamicTable-${color}`

  //1. Render table loading rows
  const renderSkeletonRows = () => {
    const arr = new Array(10).fill(null)
    return (
      <tbody>
        {arr.map((item, index) => (
          <tr key={index}>
            {headers.map((h, idx) => (
              <td key={idx}>
                <p className="skeleton" />
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
              className="flex w-full items-center justify-center space-x-2"
              onClick={() => onSort(h.sortBy)}
              disabled={!h.sortBy || isLoading}
            >
              <p className="text-sm font-medium">{h.label}</p>
              {h.sortBy ? (
                <div className="flex -space-x-2">
                  <IoMdArrowDropup className={`${sortBy === h.sortBy && sortOrder === 'asc' ? 'text-gray-500' : ''}`} />
                  <IoMdArrowDropdown
                    className={`${sortBy === h.sortBy && sortOrder === 'desc' ? 'text-gray-500' : ''}`}
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
      <table className={`dynamicTable ${colorClass}`}>
        <thead>{renderHeaders()}</thead>
        {!isLoading ? <tbody>{data.map((item) => renderItem(item))}</tbody> : null}
        {isLoading && renderSkeletonRows()}
      </table>
      <div className="mt-2">
        <DTPagination color={color} />
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
