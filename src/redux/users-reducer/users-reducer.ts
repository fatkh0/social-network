import { TInferActions } from './../redux-store';
import {EResponseCode, TPutDelete, usersApi} from "../../api/api.ts";
import { updateObjectInArray } from "../../utils/reducers-halper/object-helpers";
import { UserType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {Dispatch} from "redux";

const ADD_TO_FRIENDS = 'app/usersPage/ADD_TO_FRIENDS'
const REMOVE_FROM_FRIENDS = 'app/usersPage/REMOVE_FROM_FRIENDS'
const SET_USERS = 'app/usersPage/SET_USERS'
const SET_CURRENT_PAGE = 'app/usersPage/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'app/usersPage/SET_TOTAL_USERS_COUNT'
const MOVE_PAGES_TO_LEFT = 'app/usersPage/MOVE_PAGES_TO_LEFT'
const MOVE_PAGES_TO_RIGHT = 'app/usersPage/MOVE_PAGES_TO_RIGHT'
const TOGGLE_IS_FETCHING = 'app/usersPage/TOGGLE_IS_FETCHING'
const TOGGLE_USERS_IN_FETCHING = 'app/usersPage/TOGGLE_USERS_IN_FETCHING'


const initialState = {
  users: [] as Array<UserType>,
  totalUsersCount: 0,
  pageSize: 8,
  currentPage: 1,
  startPageNumber: 1,
  endPageNumber: 10,
  isFetching: false,
  usersInFetching: [] as Array<number> // array of users id
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: TAction): InitialStateType => {

  switch(action.type) {
    case ADD_TO_FRIENDS:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, ['id'], {followed: true})
      }

    case REMOVE_FROM_FRIENDS:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, ['id'], {followed: false})
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case SET_CURRENT_PAGE:

    debugger

      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
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

type TAction = TInferActions<typeof actions>


export const actions = {
  addToFriendsSuccess: (userId: number) => ({ type: ADD_TO_FRIENDS, userId } as const ),
  removeFromFriendsSuccess: (userId: number) => ({ type: REMOVE_FROM_FRIENDS, userId } as const ),
  setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users } as const ),
  setCurrentPage: (currentPage: number) =>({ type: SET_CURRENT_PAGE, currentPage } as const ),
  setTotalUsersCount: (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const ),
  toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const ),
  toggleUsersInFetching: (userId: number) =>({ type: TOGGLE_USERS_IN_FETCHING, userId } as const )
}



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, TAction>

export const updateUsers = (currentPage, pageSize): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching (true))
  try {
    const response = await usersApi.getUsers(currentPage, pageSize)

    dispatch(actions.setUsers( response.items ))
    dispatch(actions.setTotalUsersCount ( response.totalCount ))
    dispatch(actions.toggleIsFetching (false))
  } catch (error) {
      console.log("users-reducer updateUsers error: ", error)
  }
  }


export const followUnfollowFlow = async (
                              dispatch: Dispatch<TAction>,
                              userId: number,
                              apiMethod: (userId: number) => TPutDelete,
                              actionCreator: (userId: number) =>  TAction) => {
  const response = await apiMethod(userId)
      if (response.resultCode === EResponseCode.Success) {
        dispatch(actionCreator(userId))
        dispatch(actions.toggleUsersInFetching(userId))
      }
}

export const addToFriends = (userId): ThunkType => async (dispatch) => {
    dispatch(actions.toggleUsersInFetching(userId))
    followUnfollowFlow(dispatch, userId, usersApi.addToFriends, actions.addToFriendsSuccess)    
}

export const removeFromFriends = (userId): ThunkType => async (dispatch) => {
    dispatch(actions.toggleUsersInFetching(userId))
  followUnfollowFlow(dispatch, userId, usersApi.removeFromFriends, actions.removeFromFriendsSuccess) 
}