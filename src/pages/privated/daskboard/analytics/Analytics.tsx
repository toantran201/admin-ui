import { DynamicTable, DynamicTableHeader } from '~/components'
import { DataRecord } from '~/components/base/dynamic-table/core/types'
// import { Card, CardBody } from '@material-tailwind/react'

const Analytics = () => {
  //0. Init
  const headers: DynamicTableHeader[] = [
    {
      label: 'ID',
      source: 'id',
      width: '75px',
    },
    {
      label: 'User ID',
      source: 'userId',
      width: '100px',
    },
    {
      label: 'Title',
      source: 'title',
      sortBy: 'title',
    },
    {
      label: 'Body',
      source: 'body',
      sortBy: 'body',
    },
  ]
  const renderRow = (item: DataRecord) => {
    return (
      <tr key={item.id}>
        <td>
          <p>{item.id}</p>
        </td>
        <td>
          <p>{item.userId}</p>
        </td>
        <td>
          <p>{item.title}</p>
        </td>
        <td>
          <p className="overflow-row" style={{ maxWidth: '700px' }}>
            {item.body}
          </p>
        </td>
      </tr>
    )
  }
  return <DynamicTable renderItem={renderRow} headers={headers} />
}

export default Analytics
