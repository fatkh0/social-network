import {usersApi} from "../api/api";

const ADD_TO_FRIENDS = 'ADD_TO_FRIENDS'
const REMOVE_FROM_FRIENDS = 'REMOVE_FROM_FRIENDS'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const MOVE_PAGES_TO_LEFT = 'MOVE_PAGES_TO_LEFT'
const MOVE_PAGES_TO_RIGHT = 'MOVE_PAGES_TO_RIGHT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_USERS_IN_FETCHING = 'TOGGLE_USERS_IN_FETCHING'

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 8,
  currentPage: 1,
  startPageNumber: 1,
  endPageNumber: 10,
  isFetching: false,
  usersInFetching: []
}

const usersReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_TO_FRIENDS:
      return {
        ...state,
        users: state.users.map(t => {
          if(t.id === action.userId) {
            return { ...t, followed: true }
          }
          return t
        })
      }

    case REMOVE_FROM_FRIENDS:
      return {
        ...state,
        users: state.users.map(t => {
          if(t.id === action.userId) {
            return { ...t, followed: false }
          }
          return t
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case SET_CURRENT_PAGE:

      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }

    case MOVE_PAGES_TO_LEFT:
      if (state.startPageNumber <= 1) return state

      return {
        ...state,
        startPageNumber: --state.startPageNumber,
        endPageNumber: --state.endPageNumber
      }

    case MOVE_PAGES_TO_RIGHT:
      const pagesCount = Math.ceil (state.totalUsersCount / state.pageSize)
      if (state.endPageNumber >= pagesCount) return state


      return {
        ...state,
        startPageNumber: ++state.startPageNumber,
        endPageNumber: ++state.endPageNumber
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
    }

    case TOGGLE_USERS_IN_FETCHING:

        return{
          ...state,
          usersInFetching: state.usersInFetching.some(id => id === action.userId)
          ? state.usersInFetching.filter(id => id !== action.userId)
          : [...state.usersInFetching, action.userId]
        }

    default:
      return state
  }
}
export default usersReducer

export const addToFriendsSuccess = (userId) => ({ type: ADD_TO_FRIENDS, userId })
export const removeFromFriendsSuccess = (userId) => ({ type: REMOVE_FROM_FRIENDS, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const movePagesToLeft = () => ({ type: MOVE_PAGES_TO_LEFT})
export const movePagesToRight = () => ({ type: MOVE_PAGES_TO_RIGHT})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleUsersInFetching = (userId) => ({type: TOGGLE_USERS_IN_FETCHING, userId})


export const updateUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching (true))
    usersApi.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setUsers( data.items ))
        dispatch(setTotalUsersCount ( data.totalCount ))
        dispatch(toggleIsFetching (false))
      })
  }}


export const addToFriends = (userId) => {
  return (dispatch) => {
    dispatch(toggleUsersInFetching(userId))
    usersApi.addToFriends(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(addToFriendsSuccess(userId))
        dispatch(toggleUsersInFetching(userId))
      }
    })
  }}

export const removeFromFriends = (userId) => {
  return (dispatch) => {
    dispatch(toggleUsersInFetching(userId))
    usersApi.removeFromFriends(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(removeFromFriendsSuccess(userId))
        dispatch(toggleUsersInFetching(userId))
      }
    })
  }}