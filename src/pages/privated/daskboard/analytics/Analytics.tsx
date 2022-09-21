import DynamicTable from '~/components/base/dynamic-table/ui/DynamicTable'
import { DataRecord } from '~/components/base/dynamic-table/core/types'

const Analytics = () => {
  const renderRow = (item: DataRecord) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.id}</td>
        <td>{item.id}</td>
        <td>{item.id}</td>
        <td>{item.id}</td>
      </tr>
    )
  }
  return <DynamicTable renderItem={renderRow} />
}

export default Analytics
