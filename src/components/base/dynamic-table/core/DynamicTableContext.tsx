import { createContext, Dispatch, ReactNode, useEffect, useMemo, useReducer } from 'react'
import { DynamicTableDataProps, DynamicTableReducerProps } from './types'
import axiosClient from '~/api'
import { stringify } from 'query-string'
//
import { DynamicTablePaginationContext } from './DynamicTablePaginationContext'
import { DynamicTableDataContext } from './DynamicTableDataContext'
import { SET_DATA, SET_LOADING, SET_PAGE, SET_PER_PAGE } from './actions'
import { dynamicTableReducerFn } from './dynamic-table-reducer-fn'

export const DynamicTableContext = createContext<DynamicTableDataProps | undefined>(undefined)
export const DynamicTableDispatch = createContext<Dispatch<DynamicTableReducerProps> | undefined>(undefined)

type DynamicTableProviderProps = {
  reducerFn?: (state: DynamicTableDataProps, action: DynamicTableReducerProps) => DynamicTableDataProps
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
    const query = {
      _limit: state.perPage,
      _page: state.page,
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
  }, [state.page, state.perPage])

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
          <DynamicTableDataContext.Provider value={dataValue}>{children}</DynamicTableDataContext.Provider>
        </DynamicTablePaginationContext.Provider>
      </DynamicTableDispatch.Provider>
    </DynamicTableContext.Provider>
  )
}
