import { useDynamicTablePagination } from '~/components/base/dynamic-table/core/useDynamicTablePagination'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all'

const DTPagination = () => {
  const { page, perPage, total, setPage, setPerPage, isLoading } = useDynamicTablePagination()
  const totalPages = Math.ceil(total / perPage)

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
            className={`
            px-4 py-1 box-border border-4 bg-blue-gray-800 text-white
            ${page <= 1 ? 'bg-blue-gray-600 border-blue-gray-600' : 'bg-blue-gray-800 border-blue-gray-800'}
            `}
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
          >
            <MdKeyboardArrowLeft />
          </button>
        ) : null}

        {arr.map((item, index) => {
          if (item) {
            return (
              <button
                key={index}
                className={`
                  px-4 py-1 box-border border-4 border-blue-gray-800
                  ${page === item ? 'text-blue-gray-800 bg-white' : 'bg-blue-gray-800 text-white'}
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
              className="px-4 py-1 bg-blue-gray-800 border-4 border-blue-gray-800 text-white"
            >
              ...
            </button>
          )
        })}
        {totalPages > 1 ? (
          <button
            className={`
            px-4 py-1 box-border border-4 text-white
            ${page >= totalPages ? 'bg-blue-gray-600 border-blue-gray-600' : 'bg-blue-gray-800 border-blue-gray-800'}
            `}
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
          >
            <MdKeyboardArrowRight />
          </button>
        ) : null}
      </div>
    )
  }

  if (isLoading) return null
  return <div>{renderPages()}</div>
}

export default DTPagination
