import { ReactNode } from 'react'
//
import DTPagination from './DTPagination'
//
import { DataRecord } from '../core/types'
import { DynamicTableProvider } from '../core/DynamicTableContext'
import { useDynamicTableData } from '../core/useDynamicTableData'

type DynamicTableProps = {
  renderItem: (item: DataRecord) => ReactNode
}

const WrapperTable = ({ renderItem }: DynamicTableProps) => {
  const { data, isLoading } = useDynamicTableData()
  console.log('data', data)
  return (
    <div>
      <table className="dynamicTable">
        <thead>
          <tr>
            <th>STT</th>
            <th>STT</th>
            <th>STT</th>
            <th>STT</th>
            <th>STT</th>
          </tr>
        </thead>
        {!isLoading ? <tbody>{data.map((item) => renderItem(item))}</tbody> : null}
      </table>
      {isLoading && <p>Loading....</p>}
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
