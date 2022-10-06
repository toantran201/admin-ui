import { ChangeEvent, useState } from 'react'
import BaseInput from './BaseInput'
import { Color } from '~/types'

type PaginationProps = {
  isLoading: boolean
  page: number
  perPage: number
  total: number
  setPage: (page: number) => void
  setPerPage: (perPage: number) => void
  color?: Color
}

const Pagination = ({ page, perPage, total, setPage, setPerPage, isLoading, color = 'danger' }: PaginationProps) => {
  const [goToValue, setGoToValue] = useState<string>('')
  const totalPages = Math.ceil(total / perPage)

  // classnames
  const colorClass = `pagination-${color}`

  //1. On go to
  const onGoToPage = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return
    const reg = new RegExp(/^\d+$/)
    if (reg.test(goToValue)) {
      let pageNumber = parseInt(goToValue)
      if (pageNumber < 1) pageNumber = 1
      if (pageNumber > totalPages) pageNumber = totalPages
      setPage(pageNumber)
    }
    setGoToValue('')
  }

  //2. Render pagination item
  const renderPages = () => {
    let arr: (number | null)[] = []
    if (totalPages < 6) {
      for (let i = 1; i <= totalPages; i++) arr.push(i)
    } else {
      if (page <= 3) {
        arr = [1, 2, 3, 4, null, totalPages]
      } else {
        if (page >= totalPages - 2) {
          arr = [1, null, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        } else {
          arr = [1, null, page - 1, page, page + 1, null, totalPages]
        }
      }
    }

    return (
      <div className={` flex space-x-2 `}>
        {totalPages > 1 ? (
          <button className="pagination__item" onClick={() => setPage(page - 1)} disabled={page <= 1 || isLoading}>
            Previous
          </button>
        ) : null}

        {arr.map((item, index) => {
          if (item) {
            return (
              <button
                key={index}
                className={page === item ? 'pagination__item--active' : 'pagination__item'}
                onClick={() => setPage(item)}
                disabled={page === item || isLoading}
              >
                {item}
              </button>
            )
          }
          return (
            <button key={index} disabled className="pagination__item">
              ...
            </button>
          )
        })}
        {totalPages > 1 ? (
          <button
            className="pagination__item"
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages || isLoading}
          >
            Next
          </button>
        ) : null}
      </div>
    )
  }
  return (
    <div className={`pagination flex items-center justify-end space-x-3 ${colorClass}`}>
      {renderPages()}
      <div className="reset-min-w-input">
        <BaseInput
          placeholder="Go to page"
          value={goToValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGoToValue(e.target.value)}
          onKeyUp={onGoToPage}
          disabled={isLoading}
          color={color}
          className="w-24 bg-transparent"
        />
      </div>
    </div>
  )
}

export default Pagination
