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
          <button
            className={`px-4 py-1 disabled:bg-gray-300 dark:disabled:bg-blue-gray-300`}
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
          >
            <MdKeyboardArrowLeft className="text-blue-gray-800 dark:text-blue-gray-100" />
          </button>
        ) : null}

        {arr.map((item, index) => {
          if (item) {
            return (
              <button
                key={index}
                className={`
                  px-4 py-1
                  ${page === item ? 'bg-blue-gray-800 text-white' : 'text-blue-gray-800 dark:text-blue-gray-100'}
                `}
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            )
          }
          return (
            <button
              key={index}
              disabled
              className="px-4 py-1 text-blue-gray-800 disabled:bg-gray-300 dark:disabled:bg-blue-gray-300"
            >
              ...
            </button>
          )
        })}
        {totalPages > 1 ? (
          <button
            className={`px-4 py-1 disabled:bg-gray-300 dark:disabled:bg-blue-gray-300`}
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
          >
            <MdKeyboardArrowRight className="text-blue-gray-800 dark:text-blue-gray-100" />
          </button>
        ) : null}
      </div>
    )
  }
  return (
    <div className="flex space-x-5 items-center justify-end">
      {renderPages()}
      <div className="reset-min-w-input">
        <BaseInput
          label="Go to page"
          className="w-[100px]"
          value={goToValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGoToValue(e.target.value)}
          onKeyPress={onGoToPage}
        />
      </div>
    </div>
  )
}

export default memo(DTPagination)
