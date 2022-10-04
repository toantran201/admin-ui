import { ChangeEvent, memo, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all'
//
import BaseInput from '~/components/base/BaseInput'
//
import { useDynamicTablePagination } from '../core/useDynamicTablePagination'

const DTPagination = () => {
  //0. Init
  const { page, perPage, total, setPage, setPerPage, isLoading } = useDynamicTablePagination()
  const [goToValue, setGoToValue] = useState<string>('')
  const totalPages = Math.ceil(total / perPage)

  // classnames
  const pageItem = 'px-4 py-2 hover:bg-red-100 dark:hover:bg-red-400 text-red-800 dark:text-red-100'
  const pageItemActive = 'px-4 py-2 hover:bg-red-100 dark:hover:bg-red-400 bg-red-800 text-white dark:text-red-100'

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
      <div className="flex space-x-2">
        {totalPages > 1 ? (
          <button className={pageItem} onClick={() => setPage(page - 1)} disabled={page <= 1 || isLoading}>
            <MdKeyboardArrowLeft />
          </button>
        ) : null}

        {arr.map((item, index) => {
          if (item) {
            return (
              <button
                key={index}
                className={page === item ? pageItemActive : pageItem}
                onClick={() => setPage(item)}
                disabled={page === item || isLoading}
              >
                {item}
              </button>
            )
          }
          return (
            <button key={index} disabled className="px-4 py-1 text-red-800 dark:text-red-100">
              ...
            </button>
          )
        })}
        {totalPages > 1 ? (
          <button className={pageItem} onClick={() => setPage(page + 1)} disabled={page >= totalPages || isLoading}>
            <MdKeyboardArrowRight />
          </button>
        ) : null}
      </div>
    )
  }
  return (
    <div className="flex items-center justify-end space-x-5">
      {renderPages()}
      <div className="reset-min-w-input">
        <BaseInput
          label="Go to page"
          className="w-[100px]"
          value={goToValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGoToValue(e.target.value)}
          onKeyPress={onGoToPage}
          disabled={isLoading}
        />
      </div>
    </div>
  )
}

export default memo(DTPagination)
