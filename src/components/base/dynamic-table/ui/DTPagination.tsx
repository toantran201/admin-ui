import { memo } from 'react'
//
import { Color } from '~/types'
//
import { useDynamicTablePagination } from '../core/useDynamicTablePagination'
import { Pagination } from '~/components'

type DTPaginationProps = {
  color?: Color
}

const DTPagination = ({ color = 'primary' }: DTPaginationProps) => {
  //0. Init
  const { page, perPage, total, setPage, setPerPage, isLoading } = useDynamicTablePagination()
  return (
    <Pagination
      isLoading={isLoading}
      page={page}
      perPage={perPage}
      total={total}
      setPage={setPage}
      setPerPage={setPerPage}
      color={color}
    />
  )
}

export default memo(DTPagination)
