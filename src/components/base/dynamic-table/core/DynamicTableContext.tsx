import { createContext, Dispatch, ReactNode, useEffect, useMemo, useReducer } from 'react'
import { DynamicTableProps, DynamicTableReducerProps } from './types'
import axiosClient from '~/api'
import { stringify } from 'query-string'
//
import { DynamicTablePaginationContext } from './DynamicTablePaginationContext'
import { DynamicTableDataContext } from './DynamicTableDataContext'
import { SET_DATA, SET_LOADING, SET_PAGE, SET_PER_PAGE, SET_SORT } from './actions'
import { dynamicTableReducerFn } from './dynamic-table-reducer-fn'
import { DynamicTableSortContext } from '~/components/base/dynamic-table/core/DynamicTableSortContext'

export const DynamicTableContext = createContext<DynamicTableProps | undefined>(undefined)
export const DynamicTableDispatch = createContext<Dispatch<DynamicTableReducerProps> | undefined>(undefined)

type DynamicTableProviderProps = {
  reducerFn?: (state: DynamicTableProps, action: DynamicTableReducerProps) => DynamicTableProps
  children: ReactNode
}

export const DynamicTableProvider = ({ reducerFn = dynamicTableReducerFn, children }: DynamicTableProviderProps) => {
  const [state, dispatch] = useReducer(reducerFn, {
    data: [],
    isLoading: false,
    page: 1,
    perPage: 10,
    total: 100,
    filters: {},
  })
  // pagination

  useEffect(() => {
    let timeOutId: ReturnType<typeof setTimeout>
    const query: Record<string, any> = {
      _limit: state.perPage,
      _page: state.page,
    }

    if (state.sort?.sortBy && state.sort?.sortOrder) {
      query.sortBy = state.sort?.sortBy
      query.sortOrder = state.sort?.sortOrder
    }

    dispatch({
      type: SET_LOADING,
      isLoading: true,
    })

    axiosClient.get(`https://jsonplaceholder.typicode.com/posts?${stringify(query)}`).then((res) => {
      timeOutId = setTimeout(
        () =>
          dispatch({
            type: SET_DATA,
            data: res.data,
          }),
        1000
      )
    })

    return () => {
      clearTimeout(timeOutId)
    }
  }, [state.page, state.perPage, state.sort?.sortBy, state.sort?.sortOrder])

  const paginationValue = useMemo(
    () => ({
      isLoading: state.isLoading,
      page: state.page,
      perPage: state.perPage,
      total: state.total,
      setPage: (page: number) => dispatch({ type: SET_PAGE, page }),
      setPerPage: (perPage: number) => dispatch({ type: SET_PER_PAGE, perPage }),
    }),
    [dispatch, state.isLoading, state.page, state.perPage, state.total]
  )

  const sortValue = useMemo(
    () => ({
      sortBy: state.sort?.sortBy || '',
      sortOrder: state.sort?.sortOrder ?? '',
      setSort: (sortBy: string) => dispatch({ type: SET_SORT, sortBy }),
    }),
    [state.sort?.sortOrder, state.sort?.sortBy, dispatch]
  )

  const dataValue = useMemo(
    () => ({
      data: state.data,
      isLoading: state.isLoading,
    }),
    [state.data, state.isLoading]
  )

  return (
    <DynamicTableContext.Provider value={state}>
      <DynamicTableDispatch.Provider value={dispatch}>
        <DynamicTablePaginationContext.Provider value={paginationValue}>
          <DynamicTableDataContext.Provider value={dataValue}>
            <DynamicTableSortContext.Provider value={sortValue}>{children}</DynamicTableSortContext.Provider>
          </DynamicTableDataContext.Provider>
        </DynamicTablePaginationContext.Provider>
      </DynamicTableDispatch.Provider>
    </DynamicTableContext.Provider>
  )
}
