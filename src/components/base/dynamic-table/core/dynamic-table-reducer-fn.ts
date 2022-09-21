import { SET_DATA, SET_LOADING, SET_PAGE, SET_PER_PAGE } from './actions'
import { DynamicTableDataProps, DynamicTableReducerProps } from './types'

export const dynamicTableReducerFn = (state: DynamicTableDataProps, action: DynamicTableReducerProps) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        isLoading: false,
        data: action.data || [],
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading || false,
      }
    }
    case SET_PAGE: {
      if (action.page && action.page === state.page) return state
      return {
        ...state,
        page: action.page || 1,
      }
    }
    case SET_PER_PAGE: {
      if (action.perPage && action.perPage === state.perPage) return state
      return {
        ...state,
        page: 1,
        perPage: action.perPage || 10,
      }
    }
  }
  return state
}
